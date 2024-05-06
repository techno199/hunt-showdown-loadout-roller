import {TWeapon} from "@/entities/weapon";
import {TToolSlot} from "@/entities/tool-slot";
import {TConsumableSlot} from "@/entities/consumable-slot";
import {names, uniqueNamesGenerator} from "unique-names-generator";
import {WEAPONS_CONFIG} from "@/weapons.config";
import {TWeaponSlot} from "@/entities/weapon-slot";
import {getRandomInt} from "@/utils/get-random-int";

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

    const firstWeaponPool = WEAPONS_CONFIG.filter(w => w.slotSize > 1 || w.dualWieldingAvailable);
    const firstWeapon: TWeapon = firstWeaponPool[getRandomInt(1, firstWeaponPool.length) - 1];
    const firstWeaponSlot: TWeaponSlot = {
      weapon: firstWeapon,
      dualWielding: firstWeapon.dualWieldingAvailable
    }
    const firstWeaponSlotSize = firstWeapon.dualWieldingAvailable ? 2 : 3;

    const secondWeaponAvailableSize = HUNTER_BASE_MAX_SLOTS - firstWeaponSlotSize;
    const secondWeaponPool = WEAPONS_CONFIG.filter(w => w.slotSize <= secondWeaponAvailableSize);
    const secondWeapon = secondWeaponPool[getRandomInt(1, secondWeaponPool.length) - 1];
    const secondWeaponSlot: TWeaponSlot = {
      weapon: secondWeapon,
      dualWielding: !firstWeaponSlot.dualWielding && secondWeapon.dualWieldingAvailable && secondWeaponAvailableSize === 2
    };

    this.weaponSlots[0] = firstWeaponSlot;
    this.weaponSlots[1] = secondWeaponSlot;
  }

  toString() {
    return this.hunterName;
  }
}