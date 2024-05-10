import {TWeaponConfigItem} from "@/weapons.config";
import {TOOLS_CONFIG} from "@/tools.config";
import {CONSUMABLES_CONFIG} from "@/consumables.config";
import {Weightable} from "@/entities/weightable";

export type TLoadoutPreset = {
  id: number;
  weaponSlotPools: Weightable<TWeaponConfigItem>[][],
  toolSlotPools: Weightable<typeof TOOLS_CONFIG[number]>[][],
  consumableSlotPools: (Weightable<typeof CONSUMABLES_CONFIG[number]>)[][],
  chanceToSpawnSpecialAmmo: number
}