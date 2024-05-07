export const TOOLS_CONFIG = [
  {
    name: 'Choke Bombs',
    src: '/crytek-assets/tools/tool_chokegrenade.png'
  },
  {
    name: 'First Aid Kit',
    src: '/crytek-assets/tools/tool_aidkit.png'
  },
  {
    name: 'Spyglass',
    src: '/crytek-assets/tools/tool_spyglass.png'
  },
  {
    name: 'Throwing Knives',
    src: '/crytek-assets/tools/tool_throwingknives.png'
  },
  {
    name: 'Throwing Axes',
    src: '/crytek-assets/tools/tool_throwingaxes.png'
  },
  {
    name: 'Derringer Pennyshot',
    src: '/crytek-assets/tools/tool_derringerpennyshot.png'
  },
  {
    name: 'Electric Lamp',
    src: '/crytek-assets/tools/tool_electriclamp.png'
  },
  {
    name: 'Knife',
    src: '/crytek-assets/tools/tool_knife.png'
  },
  {
    name: 'Knuckle Knife',
    src: '/crytek-assets/tools/tool_knuckleknife.png'
  },
  {
    name: 'Decoys',
    src: '/crytek-assets/tools/tool_decoys.png'
  },
  {
    name: 'Heavy Knife',
    src: '/crytek-assets/tools/tool_heavyknife.png'
  },
  {
    name: 'Quad Derringer',
    src: '/crytek-assets/tools/tool_quadderringer.png'
  },
  {
    name: 'Flare Pistol',
    src: '/crytek-assets/tools/tool_flarepistol.png'
  },
  {
    name: 'Fusees',
    src: '/crytek-assets/tools/tool_fusees.png'
  },
  {
    name: 'Dusters',
    src: '/crytek-assets/tools/tool_dusters.png'
  },
  {
    name: 'Poison Trap Mines',
    src: '/crytek-assets/tools/tool_poisontripmines.png'
  },
  {
    name: 'Concertina Trip Mines',
    src: '/crytek-assets/tools/tool_concertinatripmines.png'
  },
  {
    name: 'Alert Trip Mines',
    src: '/crytek-assets/tools/tool_alerttripmines.png'
  },
  {
    name: 'Blank Fire Decoys',
    src: '/crytek-assets/tools/tool_blankfiredecoys.png'
  },
  {
    name: 'Decoy Fuses',
    src: '/crytek-assets/tools/tool_decoyfuses.png'
  }
];

export const DEFAULT_TOOLS_PRESET = [
  [{name: 'First Aid Kit', weight: 1}],
  [{name: 'Knife', weight: 100}, {name: 'Heavy Knife', weight: 100}, {name: 'Dusters', weight: 100}, {name: 'Throwing Axes', weight: 20}, {name: 'Throwing Knives', weight: 20}],
  [...TOOLS_CONFIG.filter(item => !item.name.toLowerCase().match(/knife|dusters|aid/)?.length)],
  [...TOOLS_CONFIG.filter(item => !item.name.toLowerCase().match(/knife|dusters|aid/)?.length)]
]

console.log(DEFAULT_TOOLS_PRESET)