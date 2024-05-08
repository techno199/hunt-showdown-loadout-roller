import {TWeapon} from "@/entities/weapon";
import {AmmoType} from "@/entities/ammo-type";

const SMALL_AMMO_POOL = [
  AmmoType.SMALL_POISON,
  AmmoType.SMALL_INCENDIARY,
  AmmoType.SMALL_DUMDUM,
  AmmoType.SMALL_HIGH_VELOCITY
]

export const WEAPONS_CONFIG: TWeapon[] = [
  // Shotguns
  {
    name: 'Caldwell Rival 78',
    slotSize: 3,
    ammoType: AmmoType.SHELL,
  },
  {
    name: 'Caldwell Rival 78 Handcannon',
    slotSize: 2,
    ammoType: AmmoType.SHELL,
  },
  {
    name: 'Crown &King Auto-5',
    slotSize: 3,
    ammoType: AmmoType.SHELL
  },
  {
    name: 'Drilling',
    slotSize: 3,
    ammoType: AmmoType.SHELL
  },
  {
    name: 'Drilling Handcannon',
    slotSize: 2,
    ammoType: AmmoType.SHELL,
  },
  {
    name: 'Drilling Hatchet',
    slotSize: 2,
    ammoType: AmmoType.SHELL,
  },
  {
    name: 'Romero 77',
    slotSize: 3,
    ammoType: AmmoType.SHELL,
    availableAmmoTypes: []
  },
  {
    name: 'Romero 77 Talon',
    slotSize: 3,
    ammoType: AmmoType.SHELL,
    availableAmmoTypes: []
  },
  {
    name: 'Romero 77 Handcannon',
    slotSize: 2,
    ammoType: AmmoType.SHELL,
  },
  {
    name: 'Romero 77 Hatchet',
    slotSize: 2,
    ammoType: AmmoType.SHELL,
  },
  {
    name: 'Romero 77 Alamo',
    slotSize: 3,
    ammoType: AmmoType.SHELL,
    availableAmmoModifiers: []
  },
  {
    name: 'Specter 1882',
    slotSize: 3,
    ammoType: AmmoType.SHELL
  },
  {
    name: 'Specter 1882 Bayonet',
    slotSize: 3,
    ammoType: AmmoType.SHELL
  },
  {
    name: 'Specter 1882 Compact',
    slotSize: 2,
    ammoType: AmmoType.SHELL
  },
  {
    name: 'Winfield 1887 Terminus',
    slotSize: 3,
    ammoType: AmmoType.SHELL
  },
  {
    name: 'Winfield 1887 Terminus Handcannon',
    slotSize: 2,
    ammoType: AmmoType.SHELL
  },
  {
    name: 'Winfield 1893 Slate',
    slotSize: 3,
    ammoType: AmmoType.SHELL
  },
  {
    name: 'Winfield 1893 Slate Riposte',
    slotSize: 3,
    ammoType: AmmoType.SHELL
  },
  // Small
  {
    name: 'Bornheim No. 3',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons/weapon_bronheim.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Bornheim No. 3 Extended',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons/weapon_bronheimextended.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Bornheim No. 3 Match',
    slotSize: 2,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_bronheimmatch.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Bornheim No. 3 Silencer',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons/weapon_bronheimsilencer.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Caldwell 92 New Army',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons/weapon_caldwellnewarmy.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Caldwell 92 New Army Swift',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons/weapon_caldwellnewarmyswift.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Caldwell Conversion Pistol',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons/weapon_caldwellconversion.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Caldwell Conversion Chain Pistol',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons/weapon_caldwellconversionchain.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Caldwell Marathon',
    slotSize: 3,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_caldwellmarathon.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Caldwell Marathon Swift',
    slotSize: 3,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_caldwellmarathonswift.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'LeMat Mark II',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons/weapon_lemat.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'LeMat Mark II Carbine',
    slotSize: 3,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_lematcarbine.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'LeMat Mark II Carbine Marksman',
    slotSize: 3,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_lematcarbinemarksman.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Nagant M1895',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons/weapon_nagant.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Nagant M1895 Precision',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_nagantprecision.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Nagant M1895 Silencer',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons/weapon_nagantsilencer.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Nagant M1895 Precision Deadeye',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_nagantprecisiondeadeye.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Nagant M1895 Officer',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons/weapon_nagantofficer.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Nagant M1895 Officer Brawler',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons/weapon_nagantofficerbrawler.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Nagant M1895 Officer Carbine',
    slotSize: 3,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_nagantofficercarbine.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Nagant M1895 Officer Carbine Deadeye',
    slotSize: 3,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_nagantofficercarbinedeadeye.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Winfield M1873',
    slotSize: 3,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_winfield.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Winfield M1873 Aperture',
    slotSize: 3,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_winfieldaperture.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Winfield M1873 Musket Bayonet',
    slotSize: 3,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_winfieldmusketbayonet.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Winfield M1873 Talon',
    slotSize: 3,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_winfieldtalon.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Winfield M1873 Swift',
    slotSize: 3,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_winfieldswift.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Winfield M1873C',
    slotSize: 3,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_winfield1873c.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Winfield M1873C Silencer',
    slotSize: 3,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_winfield1873csilencer.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Winfield M1873C Marksman',
    slotSize: 3,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_winfield1873cmarksman.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Winfield M1873C Vandal',
    slotSize: 2,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_winfield1873cvandal.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Winfield M1873C Vandal Striker',
    slotSize: 2,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_winfield1873cvandalstriker.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  {
    name: 'Winfield M1873C Vandal Deadeye',
    slotSize: 2,
    ammoType: AmmoType.SMALL,
    src: '/crytek-assets/weapons/weapon_winfield1873cvandaldeadeye.png',
    availableAmmoTypes: SMALL_AMMO_POOL
  },
  // Medium
  {
    name: 'Caldwell Pax',
    slotSize: 1,
    ammoType: AmmoType.MEDIUM,
    dualWieldingAvailable: true
  },
  {
    name: 'Caldwell Pax Claw',
    slotSize: 1,
    ammoType: AmmoType.MEDIUM,
    dualWieldingAvailable: true
  },
  {
    name: 'Caldwell Pax Trueshot',
    slotSize: 1,
    ammoType: AmmoType.MEDIUM,
    dualWieldingAvailable: true
  },
  {
    name: 'Scottfield Model 3',
    slotSize: 1,
    ammoType: AmmoType.MEDIUM,
    dualWieldingAvailable: true
  },
  {
    name: 'Scottfield Model 3 Brawler',
    slotSize: 1,
    ammoType: AmmoType.MEDIUM,
    dualWieldingAvailable: true
  },
  {
    name: 'Scottfield Model 3 Swift',
    slotSize: 1,
    ammoType: AmmoType.MEDIUM,
    dualWieldingAvailable: true
  },
  {
    name: 'Scottfield Model 3 Spitfire',
    slotSize: 1,
    ammoType: AmmoType.MEDIUM,
    dualWieldingAvailable: true
  },
  {
    name: 'Scottfield Model 3 Precision',
    slotSize: 2,
    ammoType: AmmoType.MEDIUM,
  },
  {
    name: 'Springfield 1866',
    slotSize: 3,
    ammoType: AmmoType.MEDIUM,
  },
  {
    name: 'Springfield 1866 Bayonet',
    slotSize: 3,
    ammoType: AmmoType.MEDIUM,
  },
  {
    name: 'Springfield 1866 Marksman',
    slotSize: 3,
    ammoType: AmmoType.MEDIUM,
  },
  {
    name: 'Springfield 1866 Compact',
    slotSize: 2,
    ammoType: AmmoType.MEDIUM,
  },
  {
    name: 'Springfield 1866 Compact Deadeye',
    slotSize: 2,
    ammoType: AmmoType.MEDIUM,
  },
  {
    name: 'Springfield 1866 Compact Striker',
    slotSize: 2,
    ammoType: AmmoType.MEDIUM,
  },
  {
    name: 'Vetterly 71 Karabiner',
    slotSize: 3,
    ammoType: AmmoType.MEDIUM,
  },
  {
    name: 'Vetterly 71 Karabiner Bayonet',
    slotSize: 3,
    ammoType: AmmoType.MEDIUM,
  },
  {
    name: 'Vetterly 71 Karabiner Cyclone',
    slotSize: 3,
    ammoType: AmmoType.MEDIUM,
  },
  {
    name: 'Vetterly 71 Deadeye',
    slotSize: 3,
    ammoType: AmmoType.MEDIUM,
  },
  {
    name: 'Vetterly 71 Karabiner Silencer',
    slotSize: 3,
    ammoType: AmmoType.MEDIUM,
  },
  {
    name: 'Vetterly 71 Karabiner Marksman',
    slotSize: 3,
    ammoType: AmmoType.MEDIUM,
  },
  {
    name: 'Winfield M1976 Centennial',
    slotSize: 3,
    ammoType: AmmoType.MEDIUM,
  },
  {
    name: 'Winfield M1976 Centennial Shorty',
    slotSize: 2,
    ammoType: AmmoType.MEDIUM,
  },
  {
    name: 'Winfield M1976 Centennial Shorty Silencer',
    slotSize: 2,
    ammoType: AmmoType.MEDIUM,
  },
  {
    name: 'Winfield M1976 Centennial Sniper',
    slotSize: 3,
    ammoType: AmmoType.MEDIUM,
  },
  {
    name: 'Winfield M1976 Centennial Trauma',
    slotSize: 3,
    ammoType: AmmoType.MEDIUM,
  },
  // Large
  {
    name: 'Berthier M1e 1892',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Berthier M1e 1892 Deadeye',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Berthier M1e 1892 Marksman',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Berthier M1e 1892 Riposte',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Caldwell Conversion Uppercut',
    slotSize: 1,
    ammoType: AmmoType.LARGE,
    dualWieldingAvailable: true
  },
  {
    name: 'Caldwell Conversion Uppercut Precision',
    slotSize: 2,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Caldwell Conversion Uppercut Precision Deadeye',
    slotSize: 2,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'LeMat II UpperMat',
    slotSize: 2,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Lebel 1886',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Lebel 1886 Aperture',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Lebel 1886 Marksman',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Lebel 1886 Talon',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Mako 1895 Carbine',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Mako 1895 Carbine Claw',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Mako 1895 Carbine Aperture',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Mako 1895 Carbine Marksman',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Martini-Henry IC1',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Martini-Henry IC1 Deadeye',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Martini-Henry IC1 Ironside',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Martini-Henry IC1 Marksman',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Martini-Henry IC1 Riposte',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Mosin-Nagant M1891',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Mosin-Nagant M1891 Bayonet',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Mosin-Nagant M1891 Sniper',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Mosin-Nagant M1891 Avtomat',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Mosin-Nagant M1891 Obrez',
    slotSize: 2,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Mosin-Nagant Orbez Drum',
    slotSize: 2,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Mosin-Nagant Orbez Mace',
    slotSize: 2,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Sparks LRR',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Sparks LRR Silencer',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Sparks LRR Sniper',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Sparks Pistol',
    slotSize: 2,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Springfield M1892 Krag',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Springfield M1892 Krag Bayonet',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  {
    name: 'Springfield M1892 Krag Sniper',
    slotSize: 3,
    ammoType: AmmoType.LARGE,
  },
  // Special
  {
    name: 'Bomb Lance',
    slotSize: 3,
    ammoType: AmmoType.PROTOTYPE,
  },
  {
    name: 'Dolch 96',
    slotSize: 1,
    ammoType: AmmoType.PROTOTYPE,
    dualWieldingAvailable: true
  },
  {
    name: 'Dolch 96 Claw',
    slotSize: 1,
    ammoType: AmmoType.PROTOTYPE,
    dualWieldingAvailable: true
  },
  {
    name: 'Dolch 96 Deadeye',
    slotSize: 1,
    ammoType: AmmoType.PROTOTYPE,
  },
  {
    name: 'Dolch 96 Precision',
    slotSize: 2,
    ammoType: AmmoType.PROTOTYPE,
  },
  {
    name: 'Crossbow',
    slotSize: 3,
    ammoType: AmmoType.CROSSBOW,
  },
  {
    name: 'Hand Crossbow',
    slotSize: 1,
    ammoType: AmmoType.CROSSBOW,
  },
  {
    name: 'Hunting Bow',
    slotSize: 2,
    ammoType: AmmoType.CROSSBOW,
  },
  {
    name: 'Nitro Express Rifle',
    slotSize: 3,
    ammoType: AmmoType.NITRO_EXPRESS,
  }
]