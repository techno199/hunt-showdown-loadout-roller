import {TWeaponConfigItem} from "@/weapons.config";
import {TOOLS_CONFIG} from "@/tools.config";
import {CONSUMABLES_CONFIG} from "@/consumables.config";
import {Weightable} from "@/entities/weightable";

export type TLoadoutPreset = {
  id: number;
  name: string;
  weaponSlotPools: Weightable<{name: string}>[][],
  toolSlotPools: Weightable<{name: string}>[][],
  consumableSlotPools: (Weightable<{name: string}>)[][],
  chanceToSpawnSpecialAmmo: number
}