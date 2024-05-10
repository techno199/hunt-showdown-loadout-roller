import {TWeapon} from "@/entities/weapon";
import {TToolSlot} from "@/entities/tool-slot";
import {TConsumableSlot} from "@/entities/consumable-slot";
import {names, uniqueNamesGenerator} from "unique-names-generator";
import {TWeaponConfigItem, WEAPONS_CONFIG} from "@/weapons.config";
import {TWeaponSlot} from "@/entities/weapon-slot";
import {getRandomInt} from "@/utils/get-random-int";
import {DEFAULT_TOOLS_PRESET, TOOLS_CONFIG} from "@/tools.config";
import {CONSUMABLES_CONFIG} from "@/consumables.config";
import {getRandomWeightedItem} from "@/utils/get-random-weighted-item";
import {AmmoTypeId} from "@/entities/ammo-type";
import {TLoadoutPreset} from "@/entities/loadout-preset";
import {PRESETS_LIST} from "@/loadout-presets/presets-list.const";

const HUNTER_BASE_MAX_SLOTS = 4;

export type THunterLoadout = {
  id: string;
  hunterName: string;
  weaponSlots?: TWeaponSlot[];
  toolsSlots?: TToolSlot[];
  consumableSlots?: TConsumableSlot[];
  associatedPresetId: number;
}

export class HunterLoadout implements THunterLoadout {
  id: string;
  hunterName: string;
  weaponSlots: TWeaponSlot[] = [];
  toolsSlots: TToolSlot[] = [];
  consumableSlots: TConsumableSlot[] = [];
  associatedPresetId: number;

  constructor(preset: TLoadoutPreset) {
    this.id = crypto.randomUUID();
    this.hunterName = uniqueNamesGenerator({
      dictionaries: [names, names],
      length: 2,
      separator: ' '
    });
    this.associatedPresetId = preset.id;

    // First weapon roll
    const firstWeaponSlot = this.__rollWeaponSlot({
      weaponPool: preset.weaponSlotPools[0],
      availableSize: 4
    });
    const firstWeaponSlotSize = firstWeaponSlot.dualWielding ? 2 : firstWeaponSlot.weapon.slotSize;

    // Second weapon roll
    const secondWeaponSlot = this.__rollWeaponSlot({
      weaponPool: preset.weaponSlotPools[1],
      availableSize: 4 - firstWeaponSlotSize,
      // Allow the only dual wield slot
      dualWieldProhibited: firstWeaponSlot.dualWielding,
      // Exclude first weapon dup
      excludedWeapons: [firstWeaponSlot.weapon]
    });

    this.weaponSlots[0] = firstWeaponSlot;
    this.weaponSlots[1] = secondWeaponSlot;

    // Tools roll
    let toolsPool = [...TOOLS_CONFIG];
    const toolsCount = getRandomInt(3, 4);
    for (let i=0; i<toolsCount; i++) {
      const presetItems = DEFAULT_TOOLS_PRESET[i];
      const nextToolPresetItem: any = getRandomWeightedItem(presetItems || toolsPool as any);
      const nextToolIndex = toolsPool.findIndex(t => t.name === nextToolPresetItem.name);
      const nextTool = toolsPool[nextToolIndex];

      toolsPool.splice(nextToolIndex, 1);
      this.toolsSlots.push(nextTool);
    }

    // Consumables roll
    let consumablesPool = [...CONSUMABLES_CONFIG];
    const consumablesQuantity = getRandomInt(3, 4);
    for (let i=0; i<consumablesQuantity; i++) {
      const nextConsumableIndex = getRandomInt(0, consumablesPool.length - 1);
      const nextTool = consumablesPool[nextConsumableIndex];
      consumablesPool.splice(nextConsumableIndex, 1);
      this.consumableSlots.push(nextTool);
    }
  }

  private __rollWeaponSlot = ({
    weaponPool,
    availableSize,
    dualWieldProhibited = false,
    // Ability to exclude list of weapons regardless of preset
    excludedWeapons = []
  }) => {
    // Create weapon pool
    const filteredWeaponPool = weaponPool.filter(w =>
      // Filter by size
      (w.slotSize <= availableSize || (w.dualWieldingAvailable && 2 <= availableSize)) &&
      // Filter by name
      !excludedWeapons?.find(exw => exw.name === w.name)
    );
    // Roll random weapon from pool
    const weaponConfigItem: TWeaponConfigItem = getRandomWeightedItem(filteredWeaponPool);
    // Roll random ammo from ammo pool(s)
    let ammoType = [];
    if (weaponConfigItem.availableAmmoTypes && Math.random() < 0.5) {
      for (const ammoPool of weaponConfigItem.availableAmmoTypes || []) {
        ammoType.push(getRandomWeightedItem(ammoPool));
      }
    } else {
      ammoType = weaponConfigItem.ammoType
    }


    // Create weapon object
    const weapon: TWeapon = {
      name: weaponConfigItem.name,
      ammoType,
      slotSize: weaponConfigItem.slotSize,
      dualWieldingAvailable: weaponConfigItem.dualWieldingAvailable && !dualWieldProhibited
    }
    // Create slot object
    const weaponSlot: TWeaponSlot = {
      weapon,
      dualWielding: weapon.dualWieldingAvailable && availableSize >= 2
    }

    return weaponSlot;
  }

  toString() {
    return this.hunterName;
  }
}