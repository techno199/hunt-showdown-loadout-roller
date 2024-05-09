import React from 'react';
import {TWeaponSlot} from "@/entities/weapon-slot";
import clsx from "clsx";
import Image from "next/image";
import {WEAPONS_CONFIG} from "@/weapons.config";
import {TWeapon} from "@/entities/weapon";
import {AMMO_CONFIG} from "@/ammo-type.config";

export type WeaponSlotProps = {}

const WeaponSlot = (props: {weaponSlot: TWeaponSlot | undefined}) => {
  const {weaponSlot} = props;
  const {weapon} = {...weaponSlot} as TWeaponSlot;
  const {ammoType} = {...weapon} as TWeapon;
  const weaponConfigItem = WEAPONS_CONFIG.find(ci => ci.name === weaponSlot?.weapon.name);
  console.log(ammoType)

  return (
    <div className={'flex gap-2 h-[120px]'}>
      {Array(weaponSlot?.dualWielding ? 2 : 1).fill(0).map((_, i) => {
        return (
          <div key={i} className={'relative flex flex-col border-2 border-col-2/50 rounded p-2.5 grow bg-col-9  z-0'}>
            <div className={'flex items-center justify-between grow'}>
              {weapon && (
                <Image
                  alt={''}
                  src={weaponConfigItem.src}
                  width={1000}
                  height={1000}
                  className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-full w-auto'}
                />
              )}
            </div>
            <div className={'flex gap-8 items-end'}>
              <div className={'flex gap-2'}>
                {[1,2,3].map(i => (
                  <div key={i} className={clsx('w-3 h-3 border border-col-2', {['bg-white']: i <= (weaponSlot?.weapon.slotSize || 0)})} />
                ))}
              </div>

              <span className={'text-base leading-[12px]'}>{weaponSlot?.weapon.name}</span>
            </div>
          </div>
        )
      })}

      {ammoType?.map((type, i) => {
        const ammoConfigItem = AMMO_CONFIG.find(ci => ci.id === type);

        return (
          <div key={i} className={'flex flex-col justify-end items-center gap-3 w-[60px] shrink-0 py-3 border-2 border-col-2 rounded bg-col-6'}>
            {ammoConfigItem?.src && (
              <Image
                alt={''}
                width={1000}
                height={1000}
                src={ammoConfigItem.src}
                className={'w-[35px]'}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default WeaponSlot;