import React from 'react';
import WeaponSlot from "@/features/loadout-creator/_shared/weapon-slot";
import Button from "@/ui/Button/Button";
import {THunterLoadout} from "@/entities/hunter-loadout";
import Image from "next/image";

export type HunterLoadoutDetailsProps = {
  selectedLoadout: THunterLoadout;
  onDismiss: () => any;
}

const HunterLoadoutDetails = (props: HunterLoadoutDetailsProps) => {
  const {selectedLoadout, onDismiss, ...rest} = props;

  return (
    <div className={'flex flex-col gap-4'}>
      <WeaponSlot weaponSlot={selectedLoadout?.weaponSlots?.[0]}/>
      <WeaponSlot weaponSlot={selectedLoadout?.weaponSlots?.[1]}/>

      <div className={'grid grid-cols-4 gap-4'}>
        {Array(4).fill(null).map((_, i) => {
          const tool = selectedLoadout?.toolsSlots?.[i];

          return (
            <div
              key={i}
              className={'flex items-end justify-center p-1.5 text-center border border-col-2/50 bg-col-6 h-[120px]'}
            >
              {tool && (
                <Image
                  src={tool.src}
                  width={100}
                  height={100}
                  alt={''}
                  className={'absolute'}
                />
              )}
              <span className={'relative text-sm'}>{tool?.name}</span>
            </div>
          )
        })}
      </div>

      <div className={'grid grid-cols-4 gap-4'}>
        {Array(4).fill(null).map((_, i) => {
          const consumable = selectedLoadout?.consumableSlots?.[i];

          return (
            <div
              key={i}
              className={'flex items-end justify-center p-1.5 text-center border border-col-2/50 bg-col-6 h-[120px]'}
            >
              {consumable && (
                <Image
                  src={consumable.src}
                  width={100}
                  height={100}
                  alt={''}
                  className={'absolute'}
                />
              )}
              <span className={'relative text-sm'}>{consumable?.name}</span>
            </div>
          )
        })}
      </div>

      {selectedLoadout && (
        <Button variant={'flat'} onClick={onDismiss}>Dismiss Hunter</Button>
      )}
    </div>
  );
};

export default HunterLoadoutDetails;