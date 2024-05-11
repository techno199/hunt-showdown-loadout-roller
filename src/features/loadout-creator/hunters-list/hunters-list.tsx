import React, {useRef} from 'react';
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

  const scrollableRef = useRef(null as HTMLDivElement);

  return (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex flex-col gap-4 basis-0 grow overflow-auto'} ref={scrollableRef}>
        {hunterLoadouts.map(loadout => (
          <motion.div
            key={loadout.id}
            initial={{opacity: 0}}
            animate={{opacity: 100}}
            transition={{duration: 0.4}}
          >
            <Button
              variant={'flat'}
              className={'flex items-center w-full text-left text-2xl'}
              selected={selectedLoadout?.id === loadout.id}
              sfx={'selectHunter1'}
              onClick={onLoadoutClick(loadout)}
            >
              {loadout.hunterName}
              {loadout.weaponSlots!?.find((s: TWeaponSlot) => s?.dualWielding) && (
                <Image alt={''} src={DualWield} className={'h-[26px] w-auto'} />
              )}
            </Button>
          </motion.div>
        ))}

        <Button
          variant={'flat'}
          className={'flex items-center w-full text-left uppercase !bg-col-7/20 hover:!bg-col-8/80 animate-glow'}
          sfx={'recruitHunter1'}
          onClick={onGenerateClick}
        >
          Recruit Hunter
        </Button>

        {Array(15).fill(null).map((_, i) => (
          <Button
            key={i}
            variant={'flat'}
            className={'flex items-center w-full text-left text-2xl'}
          >
            <span className={'opacity-30'}>(EMPTY)</span>
          </Button>
        ))}
      </div>

      <div className={'flex gap-2'}>
        <Button
          variant={'flat'}
          className={'text-left w-full uppercase !bg-col-5/30 hover:shadow-[0_0px_25px_-5px_rgb(215_38_61)]'}
          disabled={!hunterLoadouts.length}
          sfx={'cancel'}
          onClick={onDismissAll}
        >
          Dismiss Everyone
        </Button>
      </div>
    </div>
  );
};

export default HuntersList;