import React from 'react';
import {TWeaponSlot} from "@/entities/weapon-slot";
import DualWield from "/public/crytek-assets/dual_wield.png";
import ShellAmmo from '/public/crytek-assets/ammo/shell_ammo.png';
import SmallAmmo from '/public/crytek-assets/ammo/small_ammo.png';
import MediumAmmo from '/public/crytek-assets/ammo/medium_ammo.png';
import LargeAmmo from '/public/crytek-assets/ammo/large_ammo.png';
import CrossbowAmmo from '/public/crytek-assets/ammo/crossbow_ammo.png';
import PrototypeAmmo from '/public/crytek-assets/ammo/prototype_ammo.png';
import NitroExpressAmmo from '/public/crytek-assets/ammo/nitro_express_bullet.png';
import clsx from "clsx";
import Image from "next/image";
import {AmmoType} from "@/entities/ammo-type";

export type WeaponSlotProps = {}

const WeaponSlot = (props: {weaponSlot: TWeaponSlot | undefined}) => {
  const {weaponSlot} = props;

  return (
    <div className={'flex gap-2 h-[120px]'}>
      {Array(weaponSlot?.dualWielding ? 2 : 1).fill(0).map((_, i) => (
        <div key={i} className={'flex flex-col border-2 border-col-2/50 rounded p-2.5 grow bg-col-6'}>
          <div className={'flex items-center justify-between grow'}>
            <span>{weaponSlot?.weapon.name}</span>
          </div>
          <div className={'flex gap-2'}>
            {[1,2,3].map(i => (
              <div key={i} className={clsx('w-3 h-3 border border-col-2', {['bg-white']: i <= (weaponSlot?.weapon.slotSize || 0)})} />
            ))}
          </div>
        </div>
      ))}


        <div className={'flex flex-col justify-end items-center gap-3 w-[60px] shrink-0 py-3 border-2 border-col-2 rounded bg-col-6'}>
          {weaponSlot?.weapon.ammoType === AmmoType.SMALL && (
            <Image alt={''} src={SmallAmmo} className={'w-[35px]'} />
          )}

          {weaponSlot?.weapon.ammoType === AmmoType.MEDIUM && (
            <Image alt={''} src={MediumAmmo} className={'w-[45px]'} />
          )}

          {weaponSlot?.weapon.ammoType === AmmoType.LARGE && (
            <Image alt={''} src={LargeAmmo} className={'w-[50px]'} />
          )}

          {weaponSlot?.weapon.ammoType === AmmoType.SHELL && (
            <Image alt={''} src={ShellAmmo} />
          )}

          {weaponSlot?.weapon.ammoType === AmmoType.CROSSBOW && (
            <Image alt={''} src={CrossbowAmmo} />
          )}

          {weaponSlot?.weapon.ammoType === AmmoType.PROTOTYPE && (
            <Image alt={''} src={PrototypeAmmo} />
          )}

          {weaponSlot?.weapon.ammoType === AmmoType.NITRO_EXPRESS && (
            <Image alt={''} src={NitroExpressAmmo} />
          )}
        </div>
    </div>
  )
}

export default WeaponSlot;