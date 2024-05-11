import {TOOLS_CONFIG} from "@/tools.config";
import {Weightable} from "@/entities/weightable";
import {TLoadoutPreset} from "@/entities/loadout-preset";

export const PRESET110524_TOOLS_PRESET: Weightable[][] = [
  [{name: 'First Aid Kit', weight: 1}],
  [{name: 'Knife', weight: 100}, {name: 'Heavy Knife', weight: 100}, {name: 'Dusters', weight: 100}, {name: 'Throwing Axes', weight: 20}, {name: 'Throwing Knives', weight: 20}],
  [{name: 'Quad Derringer', weight: 1}],
  [...TOOLS_CONFIG.filter(item => !item.name.toLowerCase().match(/knife|knive|dusters|aid/)?.length)]
];

export const PRESET110524_LOADOUT_PRESET: TLoadoutPreset = {
  id: 2,
  name: 'Preset 11.05.24',
  weaponSlotPools: [
    [],[]
  ],
  chanceToSpawnSpecialAmmo: 0,
  toolSlotPools: PRESET110524_TOOLS_PRESET,
  consumableSlotPools: [
    [{name: 'Ammo Box'}],
    [],
    [],
    []
  ]
}

