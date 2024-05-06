import React from 'react';
import WeaponSlot from "@/features/loadout-creator/_shared/weapon-slot";
import {TWeaponSlot} from "@/entities/weapon-slot";
import Button from "@/ui/Button/Button";
import {THunterLoadout} from "@/entities/hunter-loadout";

export type HunterLoadoutDetailsProps = {
  selectedLoadout: THunterLoadout;
  onDismiss: () => any;
}

const HunterLoadoutDetails = (props: HunterLoadoutDetailsProps) => {
  const { selectedLoadout, onDismiss, ...rest } = props;
  return (
    <div className={'flex flex-col gap-4'}>
      <WeaponSlot weaponSlot={selectedLoadout?.weaponSlots?.[0]} />
      <WeaponSlot weaponSlot={selectedLoadout?.weaponSlots?.[1]} />

      <div className={'grid grid-cols-4 gap-4'}>
        <div className={'border border-col-4 h-[120px]'}></div>
        <div className={'border border-col-4 h-[120px]'}></div>
        <div className={'border border-col-4 h-[120px]'}></div>
        <div className={'border border-col-4 h-[120px]'}></div>
      </div>

      <div className={'grid grid-cols-4 gap-4'}>
        <div className={'border border-col-4 h-[120px]'}></div>
        <div className={'border border-col-4 h-[120px]'}></div>
        <div className={'border border-col-4 h-[120px]'}></div>
        <div className={'border border-col-4 h-[120px]'}></div>
      </div>

      {selectedLoadout && (
        <Button variant={'flat'} onClick={onDismiss}>Dismiss Hunter</Button>
      )}
    </div>
  );
};

export default HunterLoadoutDetails;