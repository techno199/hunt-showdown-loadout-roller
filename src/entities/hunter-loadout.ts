import {TWeapon} from "@/entities/weapon";
import {TToolSlot} from "@/entities/tool-slot";
import {TConsumableSlot} from "@/entities/consumable-slot";
import {names, uniqueNamesGenerator} from "unique-names-generator";
import {TWeaponConfigItem, WEAPONS_CONFIG} from "@/weapons.config";
import {TWeaponSlot} from "@/entities/weapon-slot";
import {getRandomInt} from "@/utils/get-random-int";
import {TOOLS_CONFIG} from "@/tools.config";
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
      availableSize: 4,
      chanceToSpawnSpecialAmmo: preset.chanceToSpawnSpecialAmmo
    });
    const firstWeaponSlotSize = firstWeaponSlot?.dualWielding ? 2 : firstWeaponSlot?.weapon?.slotSize || 0;

    // Second weapon roll
    const secondWeaponSlot = this.__rollWeaponSlot({
      weaponPool: preset.weaponSlotPools[1],
      availableSize: 4 - firstWeaponSlotSize,
      // Allow the only dual wield slot
      dualWieldProhibited: firstWeaponSlot?.dualWielding,
      // Exclude first weapon dup
      excludedWeapons: firstWeaponSlot ? [firstWeaponSlot.weapon] : [],
      chanceToSpawnSpecialAmmo: preset.chanceToSpawnSpecialAmmo
    });

    this.weaponSlots[0] = firstWeaponSlot;
    this.weaponSlots[1] = secondWeaponSlot;

    // Tools roll
    const toolsCount = getRandomInt(3, 4);
    for (let i=0; i<toolsCount; i++) {
      const presetItems = preset.toolSlotPools[i];

      if (presetItems?.length) {
        // Filer dup items

        const legalPresetItems = presetItems
          .filter(item => !this.toolsSlots.find(ts => ts.name === item.name))
        const nextToolItem = getRandomWeightedItem(legalPresetItems);
        this.toolsSlots.push(TOOLS_CONFIG.find(ci => ci.name === nextToolItem.name));
      }
    }

    // Consumables roll
    const consumablesCount = getRandomInt(3, 4);
    for (let i=0; i<consumablesCount; i++) {
      const presetItems = preset.consumableSlotPools[i];

      if (presetItems?.length) {
        const legalPresetItems = presetItems
          .filter(item => !this.toolsSlots.find(ts => ts.name === item.name))
        const nextConsumableItem = getRandomWeightedItem(legalPresetItems);
        this.consumableSlots.push(CONSUMABLES_CONFIG.find(ci => ci.name === nextConsumableItem.name));
      }
    }
  }

  private __rollWeaponSlot = ({
    weaponPool,
    availableSize,
    dualWieldProhibited = false,
    // Ability to exclude list of weapons regardless of preset
    excludedWeapons = [],
    chanceToSpawnSpecialAmmo
  }) => {
    // Create weapon pool
    const filteredWeaponPool = weaponPool.filter(w =>
      // Filter by size
      (w.slotSize <= availableSize || (w.dualWieldingAvailable && 2 <= availableSize)) &&
      // Filter by name
      !excludedWeapons?.find(exw => exw.name === w.name)
    );
    if (!filteredWeaponPool.length) {
      return;
    }
    // Roll random weapon from pool
    const weaponConfigItem: TWeaponConfigItem = getRandomWeightedItem(filteredWeaponPool);
    // Roll random ammo from ammo pool(s)
    let ammoType = [];
    if (weaponConfigItem.availableAmmoTypes && Math.random() < chanceToSpawnSpecialAmmo) {
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