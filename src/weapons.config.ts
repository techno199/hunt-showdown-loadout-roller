import {AmmoTypeId} from "@/entities/ammo-type";
import {
  BERTHIER_AMMO_POOL,
  BORNHEIM_AMMO_POOL,
  CALDWELL_AMMO_POOL,
  CALDWELL_MARATHON_AMMO_POOL,
  CALDWELL_PAX_AMMO_POOL,
  CALDWELL_RIVAL_AMMO_POOL,
  CROWN_KING_AMMO_POOL,
  DRILLING_BULLET_AMMO_POOL,
  DRILLING_SHELL_AMMO_POOL, KRAG_AMMO_POOL, LEBEL_AMMO_POOL,
  LEMAT_BULLET_AMMO_POOL,
  LEMAT_SHELL_AMMO_POOL, MAKO_AMMO_POOL, MARTINI_AMMO_POOL, MOSIN_AMMO_POOL,
  NAGANT_AMMO_POOL,
  ROMERO_AMMO_POOL,
  SCOTTFIELD_AMMO_POOL, SPARKS_AMMO_POOL,
  SPECTER_AMMO_POOL,
  SPRINGFIELD_AMMO_POOL, UPPERCUT_AMMO_POOL, UPPERMAT_AMMO_POOL, VETTERLY_AMMO_POOL,
  WINFIELD_AMMO_POOL, WINFIELD_CENTENNIAL_AMMO_POOL,
  WINFIELD_SLATE_AMMO_POOL,
  WINFIELD_TERMINUS_AMMO_POOL
} from "@/ammo-pool.config";

export type TWeaponConfigItem = {
  name: string;
  slotSize: number;
  ammoType: AmmoTypeId[];
  availableAmmoTypes?: AmmoTypeId[][];
  dualWieldingAvailable?: boolean;
  src?: string;
}

export const WEAPONS_CONFIG: TWeaponConfigItem[] = [
  // Shotguns
  {
    name: 'Caldwell Rival 78',
    slotSize: 3,
    ammoType: [AmmoTypeId.SHELL],
    availableAmmoTypes: [CALDWELL_RIVAL_AMMO_POOL],
    src: '/crytek-assets/weapons_assets/weapon_caldwellrival.png',
  },
  {
    name: 'Caldwell Rival 78 Handcannon',
    slotSize: 2,
    ammoType: [AmmoTypeId.SHELL],
    availableAmmoTypes: [CALDWELL_RIVAL_AMMO_POOL],
    src: '/crytek-assets/weapons_assets/weapon_caldwellrivalhandcannon.png',
  },
  {
    name: 'Crown &King Auto-5',
    slotSize: 3,
    ammoType: [AmmoTypeId.SHELL],
    availableAmmoTypes: [CROWN_KING_AMMO_POOL],
    src: '/crytek-assets/weapons_assets/weapon_crown&king.png',
  },
  {
    name: 'Drilling',
    slotSize: 3,
    ammoType: [AmmoTypeId.MEDIUM, AmmoTypeId.SHELL],
    availableAmmoTypes: [DRILLING_BULLET_AMMO_POOL, DRILLING_SHELL_AMMO_POOL],
    src: '/crytek-assets/weapons_assets/weapon_drilling.png',
  },
  {
    name: 'Drilling Handcannon',
    slotSize: 2,
    ammoType: [AmmoTypeId.SHELL],
    availableAmmoTypes: [DRILLING_BULLET_AMMO_POOL, DRILLING_SHELL_AMMO_POOL],
    src: '/crytek-assets/weapons_assets/weapon_drillinghandcannon.png',
  },
  {
    name: 'Drilling Hatchet',
    slotSize: 2,
    ammoType: [AmmoTypeId.SHELL],
    availableAmmoTypes: [DRILLING_BULLET_AMMO_POOL, DRILLING_SHELL_AMMO_POOL],
    src: '/crytek-assets/weapons_assets/weapon_drillinghatchet.png',
  },
  {
    name: 'Romero 77',
    slotSize: 3,
    ammoType: [AmmoTypeId.SHELL],
    availableAmmoTypes: [ROMERO_AMMO_POOL],
    src: '/crytek-assets/weapons_assets/weapon_romero.png',
  },
  {
    name: 'Romero 77 Talon',
    slotSize: 3,
    ammoType: [AmmoTypeId.SHELL],
    availableAmmoTypes: [ROMERO_AMMO_POOL],
    src: '/crytek-assets/weapons_assets/weapon_romerotalon.png',
  },
  {
    name: 'Romero 77 Handcannon',
    slotSize: 2,
    ammoType: [AmmoTypeId.SHELL],
    availableAmmoTypes: [ROMERO_AMMO_POOL],
    src: '/crytek-assets/weapons_assets/weapon_romerohandcannon.png',
  },
  {
    name: 'Romero 77 Hatchet',
    slotSize: 2,
    ammoType: [AmmoTypeId.SHELL],
    availableAmmoTypes: [ROMERO_AMMO_POOL],
    src: '/crytek-assets/weapons_assets/weapon_romerohatchet.png',
  },
  {
    name: 'Romero 77 Alamo',
    slotSize: 3,
    ammoType: [AmmoTypeId.SHELL],
    availableAmmoTypes: [ROMERO_AMMO_POOL],
    src: '/crytek-assets/weapons_assets/weapon_romeroalamo.png',
  },
  {
    name: 'Specter 1882',
    slotSize: 3,
    ammoType: [AmmoTypeId.SHELL],
    availableAmmoTypes: [SPECTER_AMMO_POOL],
    src: '/crytek-assets/weapons_assets/weapon_specter.png',
  },
  {
    name: 'Specter 1882 Bayonet',
    slotSize: 3,
    ammoType: [AmmoTypeId.SHELL],
    availableAmmoTypes: [SPECTER_AMMO_POOL],
    src: '/crytek-assets/weapons_assets/weapon_specterbayonet.png',
  },
  {
    name: 'Specter 1882 Compact',
    slotSize: 2,
    ammoType: [AmmoTypeId.SHELL],
    availableAmmoTypes: [SPECTER_AMMO_POOL],
    src: '/crytek-assets/weapons_assets/weapon_spectercompact.png',
  },
  {
    name: 'Winfield 1887 Terminus',
    slotSize: 3,
    ammoType: [AmmoTypeId.SHELL],
    availableAmmoTypes: [WINFIELD_TERMINUS_AMMO_POOL],
    src: '/crytek-assets/weapons_assets/weapon_winfieldterminus.png',
  },
  {
    name: 'Winfield 1887 Terminus Handcannon',
    slotSize: 2,
    ammoType: [AmmoTypeId.SHELL],
    availableAmmoTypes: [WINFIELD_TERMINUS_AMMO_POOL],
    src: '/crytek-assets/weapons_assets/weapon_winfieldterminushandcannon.png',
  },
  {
    name: 'Winfield 1893 Slate',
    slotSize: 3,
    ammoType: [AmmoTypeId.SHELL],
    availableAmmoTypes: [WINFIELD_SLATE_AMMO_POOL],
    src: '/crytek-assets/weapons_assets/weapon_winfieldslate.png',
  },
  {
    name: 'Winfield 1893 Slate Riposte',
    slotSize: 3,
    ammoType: [AmmoTypeId.SHELL],
    availableAmmoTypes: [WINFIELD_SLATE_AMMO_POOL],
    src: '/crytek-assets/weapons_assets/weapon_winfieldslateriposte.png',
  },
  // Small
  {
    name: 'Bornheim No. 3',
    slotSize: 1,
    ammoType: [AmmoTypeId.SMALL],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_bornheim.png',
    availableAmmoTypes: [BORNHEIM_AMMO_POOL]
  },
  {
    name: 'Bornheim No. 3 Extended',
    slotSize: 1,
    ammoType: [AmmoTypeId.SMALL],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_bornheimextended.png',
    availableAmmoTypes: [BORNHEIM_AMMO_POOL]
  },
  {
    name: 'Bornheim No. 3 Match',
    slotSize: 2,
    ammoType: [AmmoTypeId.SMALL],
    src: '/crytek-assets/weapons_assets/weapon_bornheimmatch.png',
    availableAmmoTypes: [BORNHEIM_AMMO_POOL]
  },
  {
    name: 'Bornheim No. 3 Silencer',
    slotSize: 1,
    ammoType: [AmmoTypeId.SMALL],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_bornheimsilencer.png',
    availableAmmoTypes: [BORNHEIM_AMMO_POOL]
  },
  {
    name: 'Caldwell 92 New Army',
    slotSize: 1,
    ammoType: [AmmoTypeId.SMALL],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_caldwellnewarmy.png',
    availableAmmoTypes: [CALDWELL_AMMO_POOL]
  },
  {
    name: 'Caldwell 92 New Army Swift',
    slotSize: 1,
    ammoType: [AmmoTypeId.SMALL],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_caldwellnewarmyswift.png',
    availableAmmoTypes: [CALDWELL_AMMO_POOL]
  },
  {
    name: 'Caldwell Conversion Pistol',
    slotSize: 1,
    ammoType: [AmmoTypeId.SMALL],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_caldwellconversion.png',
    availableAmmoTypes: [CALDWELL_AMMO_POOL]
  },
  {
    name: 'Caldwell Conversion Chain Pistol',
    slotSize: 1,
    ammoType: [AmmoTypeId.SMALL],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_caldwellconversionchain.png',
    availableAmmoTypes: [CALDWELL_AMMO_POOL]
  },
  {
    name: 'Caldwell Marathon',
    slotSize: 3,
    ammoType: [AmmoTypeId.SMALL],
    src: '/crytek-assets/weapons_assets/weapon_caldwellmarathon.png',
    availableAmmoTypes: [CALDWELL_MARATHON_AMMO_POOL]
  },
  {
    name: 'Caldwell Marathon Swift',
    slotSize: 3,
    ammoType: [AmmoTypeId.SMALL],
    src: '/crytek-assets/weapons_assets/weapon_caldwellmarathonswift.png',
    availableAmmoTypes: [CALDWELL_MARATHON_AMMO_POOL]
  },
  {
    name: 'LeMat Mark II',
    slotSize: 1,
    ammoType: [AmmoTypeId.SMALL, AmmoTypeId.SHELL],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_lemat.png',
    availableAmmoTypes: [LEMAT_BULLET_AMMO_POOL, LEMAT_SHELL_AMMO_POOL]
  },
  {
    name: 'LeMat Mark II Carbine',
    slotSize: 3,
    ammoType: [AmmoTypeId.SMALL, AmmoTypeId.SHELL],
    src: '/crytek-assets/weapons_assets/weapon_lematcarbine.png',
    availableAmmoTypes:  [LEMAT_BULLET_AMMO_POOL, LEMAT_SHELL_AMMO_POOL]
  },
  {
    name: 'LeMat Mark II Carbine Marksman',
    slotSize: 3,
    ammoType: [AmmoTypeId.SMALL, AmmoTypeId.SHELL],
    src: '/crytek-assets/weapons_assets/weapon_lematcarbinemarksman.png',
    availableAmmoTypes:  [LEMAT_BULLET_AMMO_POOL, LEMAT_SHELL_AMMO_POOL]
  },
  {
    name: 'Nagant M1895',
    slotSize: 1,
    ammoType: [AmmoTypeId.SMALL],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_nagant.png',
    availableAmmoTypes: [NAGANT_AMMO_POOL]
  },
  {
    name: 'Nagant M1895 Precision',
    slotSize: 1,
    ammoType: [AmmoTypeId.SMALL],
    src: '/crytek-assets/weapons_assets/weapon_nagantprecision.png',
    availableAmmoTypes: [NAGANT_AMMO_POOL]
  },
  {
    name: 'Nagant M1895 Silencer',
    slotSize: 1,
    ammoType: [AmmoTypeId.SMALL],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_nagantsilencer.png',
    availableAmmoTypes: [NAGANT_AMMO_POOL]
  },
  {
    name: 'Nagant M1895 Precision Deadeye',
    slotSize: 1,
    ammoType: [AmmoTypeId.SMALL],
    src: '/crytek-assets/weapons_assets/weapon_nagantprecisiondeadeye.png',
    availableAmmoTypes: [NAGANT_AMMO_POOL]
  },
  {
    name: 'Nagant M1895 Officer',
    slotSize: 1,
    ammoType: [AmmoTypeId.SMALL],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_nagantofficer_test.png',
    availableAmmoTypes: [NAGANT_AMMO_POOL]
  },
  {
    name: 'Nagant M1895 Officer Brawler',
    slotSize: 1,
    ammoType: [AmmoTypeId.SMALL],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_nagantofficerbrawler.png',
    availableAmmoTypes: [NAGANT_AMMO_POOL]
  },
  {
    name: 'Nagant M1895 Officer Carbine',
    slotSize: 3,
    ammoType: [AmmoTypeId.SMALL],
    src: '/crytek-assets/weapons_assets/weapon_nagantofficercarbine.png',
    availableAmmoTypes: [NAGANT_AMMO_POOL]
  },
  {
    name: 'Nagant M1895 Officer Carbine Deadeye',
    slotSize: 3,
    ammoType: [AmmoTypeId.SMALL],
    src: '/crytek-assets/weapons_assets/weapon_nagantofficercarbinedeadeye.png',
    availableAmmoTypes: [NAGANT_AMMO_POOL]
  },
  {
    name: 'Winfield M1873',
    slotSize: 3,
    ammoType: [AmmoTypeId.SMALL],
    src: '/crytek-assets/weapons_assets/weapon_winfield.png',
    availableAmmoTypes: [WINFIELD_AMMO_POOL]
  },
  {
    name: 'Winfield M1873 Aperture',
    slotSize: 3,
    ammoType: [AmmoTypeId.SMALL],
    src: '/crytek-assets/weapons_assets/weapon_winfieldaperture.png',
    availableAmmoTypes: [WINFIELD_AMMO_POOL]
  },
  {
    name: 'Winfield M1873 Musket Bayonet',
    slotSize: 3,
    ammoType: [AmmoTypeId.SMALL],
    src: '/crytek-assets/weapons_assets/weapon_winfieldmusketbayonet.png',
    availableAmmoTypes: [WINFIELD_AMMO_POOL]
  },
  {
    name: 'Winfield M1873 Talon',
    slotSize: 3,
    ammoType: [AmmoTypeId.SMALL],
    src: '/crytek-assets/weapons_assets/weapon_winfieldtalon.png',
    availableAmmoTypes: [WINFIELD_AMMO_POOL]
  },
  {
    name: 'Winfield M1873 Swift',
    slotSize: 3,
    ammoType: [AmmoTypeId.SMALL],
    src: '/crytek-assets/weapons_assets/weapon_winfieldswift.png',
    availableAmmoTypes: [WINFIELD_AMMO_POOL]
  },
  {
    name: 'Winfield M1873C',
    slotSize: 3,
    ammoType: [AmmoTypeId.SMALL],
    src: '/crytek-assets/weapons_assets/weapon_winfield1873c.png',
    availableAmmoTypes: [WINFIELD_AMMO_POOL]
  },
  {
    name: 'Winfield M1873C Silencer',
    slotSize: 3,
    ammoType: [AmmoTypeId.SMALL],
    src: '/crytek-assets/weapons_assets/weapon_winfield1873csilencer.png',
    availableAmmoTypes: [WINFIELD_AMMO_POOL]
  },
  {
    name: 'Winfield M1873C Marksman',
    slotSize: 3,
    ammoType: [AmmoTypeId.SMALL],
    src: '/crytek-assets/weapons_assets/weapon_winfield1873cmarksman.png',
    availableAmmoTypes: [WINFIELD_AMMO_POOL]
  },
  {
    name: 'Winfield M1873C Vandal',
    slotSize: 2,
    ammoType: [AmmoTypeId.SMALL],
    src: '/crytek-assets/weapons_assets/weapon_winfield1873cvandal.png',
    availableAmmoTypes: [WINFIELD_AMMO_POOL]
  },
  {
    name: 'Winfield M1873C Vandal Striker',
    slotSize: 2,
    ammoType: [AmmoTypeId.SMALL],
    src: '/crytek-assets/weapons_assets/weapon_winfield1873cvandalstriker.png',
    availableAmmoTypes: [WINFIELD_AMMO_POOL]
  },
  {
    name: 'Winfield M1873C Vandal Deadeye',
    slotSize: 2,
    ammoType: [AmmoTypeId.SMALL],
    src: '/crytek-assets/weapons_assets/weapon_winfield1873cvandaldeadeye.png',
    availableAmmoTypes: [WINFIELD_AMMO_POOL]
  },
  // Medium
  {
    name: 'Caldwell Pax',
    slotSize: 1,
    ammoType: [AmmoTypeId.MEDIUM],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_caldwellpax.png',
    availableAmmoTypes: [CALDWELL_PAX_AMMO_POOL]
  },
  {
    name: 'Caldwell Pax Claw',
    slotSize: 1,
    ammoType: [AmmoTypeId.MEDIUM],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_caldwellpaxclaw.png',
    availableAmmoTypes: [CALDWELL_PAX_AMMO_POOL]
  },
  {
    name: 'Caldwell Pax Trueshot',
    slotSize: 1,
    ammoType: [AmmoTypeId.MEDIUM],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_caldwellpaxtrueshot.png',
    availableAmmoTypes: [CALDWELL_PAX_AMMO_POOL]
  },
  {
    name: 'Scottfield Model 3',
    slotSize: 1,
    ammoType: [AmmoTypeId.MEDIUM],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_scottfield.png',
    availableAmmoTypes: [SCOTTFIELD_AMMO_POOL]
  },
  {
    name: 'Scottfield Model 3 Brawler',
    slotSize: 1,
    ammoType: [AmmoTypeId.MEDIUM],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_scottfieldbrawler.png',
    availableAmmoTypes: [SCOTTFIELD_AMMO_POOL]
  },
  {
    name: 'Scottfield Model 3 Swift',
    slotSize: 1,
    ammoType: [AmmoTypeId.MEDIUM],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_scottfieldswift.png',
    availableAmmoTypes: [SCOTTFIELD_AMMO_POOL]
  },
  {
    name: 'Scottfield Model 3 Spitfire',
    slotSize: 1,
    ammoType: [AmmoTypeId.MEDIUM],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_scottfieldspitfire.png',
    availableAmmoTypes: [SCOTTFIELD_AMMO_POOL]
  },
  {
    name: 'Scottfield Model 3 Precision',
    slotSize: 2,
    ammoType: [AmmoTypeId.MEDIUM],
    src: '/crytek-assets/weapons_assets/weapon_scottfieldprecision.png',
    availableAmmoTypes: [SCOTTFIELD_AMMO_POOL]
  },
  {
    name: 'Springfield 1866',
    slotSize: 3,
    ammoType: [AmmoTypeId.MEDIUM],
    src: '/crytek-assets/weapons_assets/weapon_springfield.png',
    availableAmmoTypes: [SPRINGFIELD_AMMO_POOL]
  },
  {
    name: 'Springfield 1866 Bayonet',
    slotSize: 3,
    ammoType: [AmmoTypeId.MEDIUM],
    src: '/crytek-assets/weapons_assets/weapon_springfieldbayonet.png',
    availableAmmoTypes: [SPRINGFIELD_AMMO_POOL]
  },
  {
    name: 'Springfield 1866 Marksman',
    slotSize: 3,
    ammoType: [AmmoTypeId.MEDIUM],
    src: '/crytek-assets/weapons_assets/weapon_springfieldmarksman.png',
    availableAmmoTypes: [SPRINGFIELD_AMMO_POOL]
  },
  {
    name: 'Springfield 1866 Compact',
    slotSize: 2,
    ammoType: [AmmoTypeId.MEDIUM],
    src: '/crytek-assets/weapons_assets/weapon_springfieldcompact.png',
    availableAmmoTypes: [SPRINGFIELD_AMMO_POOL]
  },
  {
    name: 'Springfield 1866 Compact Deadeye',
    slotSize: 2,
    ammoType: [AmmoTypeId.MEDIUM],
    src: '/crytek-assets/weapons_assets/weapon_springfieldcompactdeadeye.png',
    availableAmmoTypes: [SPRINGFIELD_AMMO_POOL]
  },
  {
    name: 'Springfield 1866 Compact Striker',
    slotSize: 2,
    ammoType: [AmmoTypeId.MEDIUM],
    src: '/crytek-assets/weapons_assets/weapon_springfieldcompactstriker.png',
    availableAmmoTypes: [SPRINGFIELD_AMMO_POOL]
  },
  {
    name: 'Vetterly 71 Karabiner',
    slotSize: 3,
    ammoType: [AmmoTypeId.MEDIUM],
    src: '/crytek-assets/weapons_assets/weapon_vetterly.png',
    availableAmmoTypes: [VETTERLY_AMMO_POOL]
  },
  {
    name: 'Vetterly 71 Karabiner Bayonet',
    slotSize: 3,
    ammoType: [AmmoTypeId.MEDIUM],
    src: '/crytek-assets/weapons_assets/weapon_vetterlybayonet.png',
    availableAmmoTypes: [VETTERLY_AMMO_POOL]
  },
  {
    name: 'Vetterly 71 Karabiner Cyclone',
    slotSize: 3,
    ammoType: [AmmoTypeId.MEDIUM],
    src: '/crytek-assets/weapons_assets/weapon_vetterlycyclone.png',
    availableAmmoTypes: VETTERLY_AMMO_POOL
  },
  {
    name: 'Vetterly 71 Deadeye',
    slotSize: 3,
    ammoType: [AmmoTypeId.MEDIUM],
    src: '/crytek-assets/weapons_assets/weapon_vetterlydeadeye.png',
    availableAmmoTypes: [VETTERLY_AMMO_POOL]
  },
  {
    name: 'Vetterly 71 Karabiner Silencer',
    slotSize: 3,
    ammoType: [AmmoTypeId.MEDIUM],
    src: '/crytek-assets/weapons_assets/weapon_vetterlysilencer.png',
    availableAmmoTypes: [VETTERLY_AMMO_POOL]
  },
  {
    name: 'Vetterly 71 Karabiner Marksman',
    slotSize: 3,
    ammoType: [AmmoTypeId.MEDIUM],
    src: '/crytek-assets/weapons_assets/weapon_vetterlymarksman.png',
    availableAmmoTypes: [VETTERLY_AMMO_POOL]
  },
  {
    name: 'Winfield M1976 Centennial',
    slotSize: 3,
    ammoType: [AmmoTypeId.MEDIUM],
    src: '/crytek-assets/weapons_assets/weapon_winfieldcentennial.png',
    availableAmmoTypes: [WINFIELD_CENTENNIAL_AMMO_POOL]
  },
  {
    name: 'Winfield M1976 Centennial Shorty',
    slotSize: 2,
    ammoType: [AmmoTypeId.MEDIUM],
    src: '/crytek-assets/weapons_assets/weapon_winfieldcentennialshorty.png',
    availableAmmoTypes: [WINFIELD_CENTENNIAL_AMMO_POOL]
  },
  {
    name: 'Winfield M1976 Centennial Shorty Silencer',
    slotSize: 2,
    ammoType: [AmmoTypeId.MEDIUM],
    src: '/crytek-assets/weapons_assets/weapon_winfieldcentennialshortysilencer.png',
    availableAmmoTypes: [WINFIELD_CENTENNIAL_AMMO_POOL]
  },
  {
    name: 'Winfield M1976 Centennial Sniper',
    slotSize: 3,
    ammoType: [AmmoTypeId.MEDIUM],
    src: '/crytek-assets/weapons_assets/weapon_winfieldcentennialsniper.png',
    availableAmmoTypes: [WINFIELD_CENTENNIAL_AMMO_POOL]
  },
  {
    name: 'Winfield M1976 Centennial Trauma',
    slotSize: 3,
    ammoType: [AmmoTypeId.MEDIUM],
    src: '/crytek-assets/weapons_assets/weapon_winfieldcentennialtrauma.png',
    availableAmmoTypes: [WINFIELD_CENTENNIAL_AMMO_POOL]
  },
  // Large
  {
    name: 'Berthier M1e 1892',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_berthier.png',
    availableAmmoTypes: [BERTHIER_AMMO_POOL]
  },
  {
    name: 'Berthier M1e 1892 Deadeye',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_berthierdeadeye.png',
    availableAmmoTypes: [BERTHIER_AMMO_POOL]
  },
  {
    name: 'Berthier M1e 1892 Marksman',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_berthiermarksman.png',
    availableAmmoTypes: [BERTHIER_AMMO_POOL]
  },
  {
    name: 'Berthier M1e 1892 Riposte',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_berthierriposte.png',
    availableAmmoTypes: [BERTHIER_AMMO_POOL]
  },
  {
    name: 'Caldwell Conversion Uppercut',
    slotSize: 1,
    ammoType: [AmmoTypeId.LARGE],
    dualWieldingAvailable: true,
    src: '/crytek-assets/weapons_assets/weapon_uppercut.png',
    availableAmmoTypes: [UPPERCUT_AMMO_POOL]
  },
  {
    name: 'Caldwell Conversion Uppercut Precision',
    slotSize: 2,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_uppercutprecision.png',
    availableAmmoTypes: [UPPERCUT_AMMO_POOL]
  },
  {
    name: 'Caldwell Conversion Uppercut Precision Deadeye',
    slotSize: 2,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_uppercutprecisiondeadeye.png',
    availableAmmoTypes: [UPPERCUT_AMMO_POOL]
  },
  {
    name: 'LeMat II UpperMat',
    slotSize: 2,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_lematuppermat.png',
    availableAmmoTypes: [UPPERMAT_AMMO_POOL]
  },
  {
    name: 'Lebel 1886',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_lebel.png',
    availableAmmoTypes: [LEBEL_AMMO_POOL]
  },
  {
    name: 'Lebel 1886 Aperture',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_lebelaperture.png',
    availableAmmoTypes: [LEBEL_AMMO_POOL]
  },
  {
    name: 'Lebel 1886 Marksman',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_lebelmarksman.png',
    availableAmmoTypes: [LEBEL_AMMO_POOL]
  },
  {
    name: 'Lebel 1886 Talon',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_lebeltalon.png',
    availableAmmoTypes: [LEBEL_AMMO_POOL]
  },
  {
    name: 'Mako 1895 Carbine',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_mako.png',
    availableAmmoTypes: [MAKO_AMMO_POOL]
  },
  {
    name: 'Mako 1895 Carbine Claw',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_makoclaw.png',
    availableAmmoTypes: [MAKO_AMMO_POOL]
  },
  {
    name: 'Mako 1895 Carbine Aperture',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_makoaperture.png',
    availableAmmoTypes: [MAKO_AMMO_POOL]
  },
  {
    name: 'Martini-Henry IC1',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_martini.png',
    availableAmmoTypes: [MARTINI_AMMO_POOL]
  },
  {
    name: 'Martini-Henry IC1 Deadeye',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_martinideadeye.png',
    availableAmmoTypes: [MARTINI_AMMO_POOL]
  },
  {
    name: 'Martini-Henry IC1 Ironside',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_martiniironside.png',
    availableAmmoTypes: [MARTINI_AMMO_POOL]
  },
  {
    name: 'Martini-Henry IC1 Marksman',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_martinimarksman.png',
    availableAmmoTypes: [MARTINI_AMMO_POOL]
  },
  {
    name: 'Martini-Henry IC1 Riposte',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_martiniriposte.png',
    availableAmmoTypes: [MARTINI_AMMO_POOL]
  },
  {
    name: 'Mosin-Nagant M1891',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_mosin.png',
    availableAmmoTypes: [MOSIN_AMMO_POOL]
  },
  {
    name: 'Mosin-Nagant M1891 Bayonet',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_mosinbayonet.png',
    availableAmmoTypes: [MOSIN_AMMO_POOL]
  },
  {
    name: 'Mosin-Nagant M1891 Sniper',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_mosinsniper.png',
    availableAmmoTypes: [MOSIN_AMMO_POOL]
  },
  {
    name: 'Mosin-Nagant M1891 Avtomat',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_mosinavtomat.png',
    availableAmmoTypes: [MOSIN_AMMO_POOL]
  },
  {
    name: 'Mosin-Nagant M1891 Obrez',
    slotSize: 2,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_mosinobrez.png',
    availableAmmoTypes: [MOSIN_AMMO_POOL]
  },
  {
    name: 'Mosin-Nagant Orbez Drum',
    slotSize: 2,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_mosinobrezdrum.png',
    availableAmmoTypes: [MOSIN_AMMO_POOL]
  },
  {
    name: 'Mosin-Nagant Orbez Mace',
    slotSize: 2,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_mosinobrezmace.png',
    availableAmmoTypes: [MOSIN_AMMO_POOL]
  },
  {
    name: 'Sparks LRR',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_sparks.png',
    availableAmmoTypes: [SPARKS_AMMO_POOL]
  },
  {
    name: 'Sparks LRR Silencer',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_sparkssilencer.png',
    availableAmmoTypes: [SPARKS_AMMO_POOL]
  },
  {
    name: 'Sparks LRR Sniper',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_sparkssniper.png',
    availableAmmoTypes: [SPARKS_AMMO_POOL]
  },
  {
    name: 'Sparks Pistol',
    slotSize: 1,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_sparkspistol.png',
    availableAmmoTypes: [SPARKS_AMMO_POOL]
  },
  {
    name: 'Springfield M1892 Krag',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_springfieldkrag.png',
    availableAmmoTypes: [KRAG_AMMO_POOL]
  },
  {
    name: 'Springfield M1892 Krag Bayonet',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_springfieldkragbayonet.png',
    availableAmmoTypes: [KRAG_AMMO_POOL]
  },
  {
    name: 'Springfield M1892 Krag Sniper',
    slotSize: 3,
    ammoType: [AmmoTypeId.LARGE],
    src: '/crytek-assets/weapons_assets/weapon_springfieldkragsniper.png',
    availableAmmoTypes: [KRAG_AMMO_POOL]
  },
  // Special
  {
    name: 'Bomb Lance',
    slotSize: 3,
    ammoType: [AmmoTypeId.PROTOTYPE],
  },
  {
    name: 'Dolch 96',
    slotSize: 1,
    ammoType: [AmmoTypeId.PROTOTYPE],
    dualWieldingAvailable: true
  },
  {
    name: 'Dolch 96 Claw',
    slotSize: 1,
    ammoType: [AmmoTypeId.PROTOTYPE],
    dualWieldingAvailable: true
  },
  {
    name: 'Dolch 96 Deadeye',
    slotSize: 1,
    ammoType: [AmmoTypeId.PROTOTYPE],
  },
  {
    name: 'Dolch 96 Precision',
    slotSize: 2,
    ammoType: [AmmoTypeId.PROTOTYPE],
  },
  {
    name: 'Crossbow',
    slotSize: 3,
    ammoType: [AmmoTypeId.CROSSBOW],
  },
  {
    name: 'Hand Crossbow',
    slotSize: 1,
    ammoType: [AmmoTypeId.CROSSBOW],
  },
  {
    name: 'Hunting Bow',
    slotSize: 2,
    ammoType: [AmmoTypeId.CROSSBOW],
  },
  {
    name: 'Nitro Express Rifle',
    slotSize: 3,
    ammoType: [AmmoTypeId.NITRO_EXPRESS],
  }
]