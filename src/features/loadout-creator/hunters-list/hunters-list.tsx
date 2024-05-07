import React from 'react';
import {motion} from "framer-motion";
import Button from "@/ui/Button/Button";
import {THunterLoadout} from "@/entities/hunter-loadout";
import {TWeaponSlot} from "@/entities/weapon-slot";
import DualWield from "/public/crytek-assets/dual_wield.png";
import Image from "next/image";

export type HuntersListProps = {
  hunterLoadouts: THunterLoadout[];
  selectedLoadout: THunterLoadout;
  onLoadoutClick: (loadout: THunterLoadout) => any;
  onGenerateClick: () => any;
  onDismissAll: () => any;
}

const HuntersList = (props: HuntersListProps) => {
  const { hunterLoadouts, selectedLoadout, onLoadoutClick, onGenerateClick, onDismissAll, ...rest } = props;

  return (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex flex-col gap-4 basis-0 grow overflow-auto'}>
        {hunterLoadouts.map(loadout => (
          <motion.div
            key={loadout.id}
            initial={{opacity: 0}}
            animate={{opacity: 100}}
            transition={{duration: 0.4}}
          >
            <Button
              variant={'flat'}
              className={'flex items-center w-full text-left'}
              selected={selectedLoadout?.id === loadout.id}
              onClick={onLoadoutClick(loadout)}
            >
              {loadout.hunterName}
              {loadout.weaponSlots!?.find((s: TWeaponSlot) => s.dualWielding) && (
                <Image src={DualWield} className={'h-[26px] w-auto'} />
              )}
            </Button>
          </motion.div>
        ))}
      </div>

      <div className={'flex gap-2'}>
        <Button variant={'flat'} className={'text-left w-full'} onClick={onGenerateClick}>+ Create New</Button>
        <Button variant={'flat'} className={'text-left w-full'} disabled={!hunterLoadouts.length} onClick={onDismissAll}>Dismiss Everyone</Button>
      </div>
    </div>
  );
};

export default HuntersList;