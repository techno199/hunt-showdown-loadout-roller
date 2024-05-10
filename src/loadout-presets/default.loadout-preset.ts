import {WEAPONS_CONFIG} from "@/weapons.config";
import {DEFAULT_TOOLS_PRESET} from "@/tools.config";
import {CONSUMABLES_CONFIG} from "@/consumables.config";
import {TLoadoutPreset} from "@/entities/loadout-preset";
import {AmmoTypeId} from "@/entities/ammo-type";

export const DEFAULT_LOADOUT_PRESET: TLoadoutPreset = {
  id: 1,
  weaponSlotPools: [
    WEAPONS_CONFIG,
    WEAPONS_CONFIG
  ],
  chanceToSpawnSpecialAmmo: 0.5,
  toolSlotPools: DEFAULT_TOOLS_PRESET,
  consumableSlotPools: [
    CONSUMABLES_CONFIG,
    CONSUMABLES_CONFIG,
    CONSUMABLES_CONFIG,
    CONSUMABLES_CONFIG
  ],
}