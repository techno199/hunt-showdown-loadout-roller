import React from 'react';
import {TWeaponSlot} from "@/entities/weapon-slot";
import DualWield from "/public/crytek-assets/dual_wield.png";
import clsx from "clsx";
import Image from "next/image";

export type WeaponSlotProps = {}

const WeaponSlot = (props: {weaponSlot: TWeaponSlot | undefined}) => {
  const {weaponSlot} = props;

  return (
    <div className={'flex gap-2 h-[120px]'}>
      {Array(weaponSlot?.dualWielding ? 2 : 1).fill(0).map((_, i) => (
        <div key={i} className={'flex flex-col border-2 border-col-2 rounded p-2.5 grow'}>
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

      {weaponSlot?.dualWielding && (
        <div className={'flex flex-col justify-center  border-2 border-col-2 rounded'}>
          <Image src={DualWield} />
        </div>
      )}
    </div>
  )
}

export default WeaponSlot;