import {TWeapon} from "@/entities/weapon";
import {TToolSlot} from "@/entities/tool-slot";
import {TConsumableSlot} from "@/entities/consumable-slot";
import {names, uniqueNamesGenerator} from "unique-names-generator";
import {WEAPONS_CONFIG} from "@/weapons.config";
import {TWeaponSlot} from "@/entities/weapon-slot";
import {getRandomInt} from "@/utils/get-random-int";
import {DEFAULT_TOOLS_PRESET, TOOLS_CONFIG} from "@/tools.config";
import {CONSUMABLES_CONFIG} from "@/consumables.config";
import {getRandomWeightedItem} from "@/utils/get-random-weighted-item";

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
    const firstWeaponPool = WEAPONS_CONFIG.filter(w => w.slotSize > 1 || w.dualWieldingAvailable);
    const firstWeapon: TWeapon = firstWeaponPool[getRandomInt(1, firstWeaponPool.length) - 1];
    const firstWeaponSlot: TWeaponSlot = {
      weapon: firstWeapon,
      dualWielding: firstWeapon.dualWieldingAvailable
    }
    const firstWeaponSlotSize = firstWeapon.dualWieldingAvailable ? 2 : 3;

    // Second weapon roll
    const secondWeaponAvailableSize = HUNTER_BASE_MAX_SLOTS - firstWeaponSlotSize;
    const secondWeaponPool = WEAPONS_CONFIG.filter(w => w.slotSize <= secondWeaponAvailableSize);
    const secondWeapon = secondWeaponPool[getRandomInt(1, secondWeaponPool.length) - 1];
    const secondWeaponSlot: TWeaponSlot = {
      weapon: secondWeapon,
      dualWielding: !firstWeaponSlot.dualWielding && secondWeapon.dualWieldingAvailable && secondWeaponAvailableSize === 2
    };

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

  toString() {
    return this.hunterName;
  }
}