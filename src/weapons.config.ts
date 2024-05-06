import {TWeapon} from "@/entities/weapon";
import {AmmoType} from "@/entities/ammo-type";
import {AmmoModifier} from "@/entities/ammo-modifier";

export const WEAPONS_CONFIG: TWeapon[] = [
  // Shotguns
  {
    name: 'Caldwell Rival 78',
    slotSize: 3,
    ammoType: AmmoType.SHELL,
    availableAmmoModifiers: [AmmoModifier.DRAGON_BREATH, AmmoModifier.FLECHETTE],
    ammoModifier: AmmoModifier.DRAGON_BREATH
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
    availableAmmoModifiers: []
  },
  {
    name: 'Romero 77 Talon',
    slotSize: 3,
    ammoType: AmmoType.SHELL,
    availableAmmoModifiers: []
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
    dualWieldingAvailable: true
  },
  {
    name: 'Bornheim No. 3 Extended',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true
  },
  {
    name: 'Bornheim No. 3 Match',
    slotSize: 2,
    ammoType: AmmoType.SMALL
  },
  {
    name: 'Bornheim No. 3 Silencer',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true
  },
  {
    name: 'Caldwell 92 New Army',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true
  },
  {
    name: 'Caldwell 92 New Army Swift',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true
  },
  {
    name: 'Caldwell Conversion Pistol',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true
  },
  {
    name: 'Caldwell Conversion Chain Pistol',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true
  },
  {
    name: 'Caldwell Marathon',
    slotSize: 3,
    ammoType: AmmoType.SMALL
  },
  {
    name: 'Caldwell Marathon Swift',
    slotSize: 3,
    ammoType: AmmoType.SMALL
  },
  {
    name: 'LeMat Mark II',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true
  },
  {
    name: 'LeMat Mark II Carbine',
    slotSize: 3,
    ammoType: AmmoType.SMALL,
  },
  {
    name: 'LeMat Mark II Carbine Marksman',
    slotSize: 3,
    ammoType: AmmoType.SMALL,
  },
  {
    name: 'Nagant M1895',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true
  },
  {
    name: 'Nagant M1895 Precision',
    slotSize: 1,
    ammoType: AmmoType.SMALL
  },
  {
    name: 'Nagant M1895 Silencer',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true
  },
  {
    name: 'Nagant M1895 Precision Deadeye',
    slotSize: 1,
    ammoType: AmmoType.SMALL
  },
  {
    name: 'Nagant M1895 Officer',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true
  },
  {
    name: 'Nagant M1895 Officer Brawler',
    slotSize: 1,
    ammoType: AmmoType.SMALL,
    dualWieldingAvailable: true
  },
  {
    name: 'Nagant M1895 Officer Carbine',
    slotSize: 3,
    ammoType: AmmoType.SMALL,
  },
  {
    name: 'Nagant M1895 Officer Deadeye',
    slotSize: 3,
    ammoType: AmmoType.SMALL,
  },
  {
    name: 'Winfield M1873',
    slotSize: 3,
    ammoType: AmmoType.SMALL
  },
  {
    name: 'Winfield M1873 Aperture',
    slotSize: 3,
    ammoType: AmmoType.SMALL
  },
  {
    name: 'Winfield M1873 Musket Bayonet',
    slotSize: 3,
    ammoType: AmmoType.SMALL
  },
  {
    name: 'Winfield M1873 Talon',
    slotSize: 3,
    ammoType: AmmoType.SMALL
  },
  {
    name: 'Winfield M1873 Swift',
    slotSize: 3,
    ammoType: AmmoType.SMALL
  },
  {
    name: 'Winfield M1873C',
    slotSize: 3,
    ammoType: AmmoType.SMALL
  },
  {
    name: 'Winfield M1873C Silencer',
    slotSize: 3,
    ammoType: AmmoType.SMALL
  },
  {
    name: 'Winfield M1873C Marksman',
    slotSize: 3,
    ammoType: AmmoType.SMALL
  },
  {
    name: 'Winfield M1873C Vandal',
    slotSize: 2,
    ammoType: AmmoType.SMALL
  },
  {
    name: 'Winfield M1873C Vandal Striker',
    slotSize: 2,
    ammoType: AmmoType.SMALL
  },
  {
    name: 'Winfield M1873C Vandal Deadeye',
    slotSize: 2,
    ammoType: AmmoType.SMALL
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
    ammoType: AmmoType.SPECIAL,
  },
  {
    name: 'Dolch 96',
    slotSize: 1,
    ammoType: AmmoType.SPECIAL,
    dualWieldingAvailable: true
  },
  {
    name: 'Dolch 96 Claw',
    slotSize: 1,
    ammoType: AmmoType.SPECIAL,
    dualWieldingAvailable: true
  },
  {
    name: 'Dolch 96 Deadeye',
    slotSize: 1,
    ammoType: AmmoType.SPECIAL,
  },
  {
    name: 'Dolch 96 Precision',
    slotSize: 2,
    ammoType: AmmoType.SPECIAL,
  },
  {
    name: 'Crossbow',
    slotSize: 3,
    ammoType: AmmoType.SPECIAL,
  },
  {
    name: 'Hand Crossbow',
    slotSize: 1,
    ammoType: AmmoType.SPECIAL,
  },
  {
    name: 'Hunting Bow',
    slotSize: 2,
    ammoType: AmmoType.SPECIAL,
  },
  {
    name: 'Nitro Express Rifle',
    slotSize: 3,
    ammoType: AmmoType.SPECIAL,
  }
]