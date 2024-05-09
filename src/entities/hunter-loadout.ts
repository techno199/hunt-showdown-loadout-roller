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

const HUNTER_BASE_MAX_SLOTS = 4;

export type THunterLoadout = {
  id: string;
  hunterName: string;
  weaponSlots?: TWeaponSlot[];
  toolsSlots?: TToolSlot[];
  consumableSlots?: TConsumableSlot[];
}

export class HunterLoadout implements THunterLoadout {
  id: string;
  hunterName: string;
  weaponSlots: TWeaponSlot[] = [];
  toolsSlots: TToolSlot[] = [];
  consumableSlots: TConsumableSlot[] = [];

  constructor() {
    this.id = crypto.randomUUID();
    this.hunterName = uniqueNamesGenerator({
      dictionaries: [names, names],
      length: 2,
      separator: ' '
    });

    // First weapon roll
    const firstWeaponSlot = this.__rollWeaponSlot({
      availableSize: 4
    });
    const firstWeaponSlotSize = firstWeaponSlot.dualWielding ? 2 : firstWeaponSlot.weapon.slotSize;

    // Second weapon roll
    const secondWeaponSlot = this.__rollWeaponSlot({
      availableSize: 4 - firstWeaponSlotSize,
      dualWieldProhibited: firstWeaponSlot.dualWielding
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

  private __rollWeaponSlot = ({availableSize, dualWieldProhibited = false}) => {
    // Create weapon pool
    const weaponPool = WEAPONS_CONFIG.filter(w => w.slotSize <= availableSize || (w.dualWieldingAvailable && 2 <= availableSize));
    // Roll random weapon from pool
    const weaponConfigItem: TWeaponConfigItem = getRandomWeightedItem(weaponPool);
    // Roll random ammo from ammo pool(s)
    let ammoType = [];
    if (weaponConfigItem.availableAmmoTypes) {
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