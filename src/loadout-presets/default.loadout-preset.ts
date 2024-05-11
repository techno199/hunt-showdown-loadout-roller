import {WEAPONS_CONFIG} from "@/weapons.config";
import {TOOLS_CONFIG} from "@/tools.config";
import {CONSUMABLES_CONFIG} from "@/consumables.config";
import {TLoadoutPreset} from "@/entities/loadout-preset";
import {AmmoTypeId} from "@/entities/ammo-type";
import {Weightable} from "@/entities/weightable";

export const DEFAULT_TOOLS_PRESET: Weightable[][] = [
  [{name: 'First Aid Kit', weight: 1}],
  [{name: 'Knife', weight: 100}, {name: 'Heavy Knife', weight: 100}, {name: 'Dusters', weight: 100}, {name: 'Throwing Axes', weight: 20}, {name: 'Throwing Knives', weight: 20}],
  [...TOOLS_CONFIG.filter(item => !item.name.toLowerCase().match(/knife|dusters/)?.length)],
  [...TOOLS_CONFIG.filter(item => !item.name.toLowerCase().match(/knife|dusters/)?.length)]
];

export const DEFAULT_LOADOUT_PRESET: TLoadoutPreset = {
  name: 'Default Preset',
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

