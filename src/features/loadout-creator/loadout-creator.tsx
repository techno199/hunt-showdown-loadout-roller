import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import Button from "@/ui/Button/Button";
import {HunterLoadout, THunterLoadout} from "@/entities/hunter-loadout";
import WeaponSlot from "@/features/loadout-creator/_shared/weapon-slot";
import HuntersList from "@/features/loadout-creator/hunters-list/hunters-list";
import HunterLoadoutDetails from "@/features/loadout-creator/hunter-loadout-details/hunter-loadout-details";
import {TWeaponSlot} from "@/entities/weapon-slot";

export type LoadoutCreatorProps = {}

const LoadoutCreator = (props: LoadoutCreatorProps) => {
  const [state, setState] = useState({
    loadoutsInitialized: false,
    huntersLoadouts: [] as HunterLoadout[],
    selectedLoadout: null as HunterLoadout
  });

  const {huntersLoadouts, selectedLoadout, loadoutsInitialized} = state;
  const firstWeaponSlot = selectedLoadout?.weaponSlots?.[0];
  const secondWeaponSlot = selectedLoadout?.weaponSlots?.[1];

  useEffect(() => {
    const huntersLoadouts = JSON.parse(localStorage.getItem('loadouts'));
    const selectedLoadout = huntersLoadouts[0];
    setState({...state, huntersLoadouts, selectedLoadout, loadoutsInitialized: true});
  }, [])

  useEffect(() => {
    if (loadoutsInitialized) {
      localStorage.setItem('loadouts', JSON.stringify(huntersLoadouts));
    }
  }, [huntersLoadouts, loadoutsInitialized])

  const handleGenerateLoadout = () => {
    const newLoadout = new HunterLoadout();

    setState({
      ...state,
      huntersLoadouts: [...huntersLoadouts, newLoadout],
      selectedLoadout: newLoadout
    })
  }

  const handleDismissAll = () => {
    setState({...state, huntersLoadouts: [], selectedLoadout: null!});
  }

  const handleDismiss = () => {
    const newLoadouts = state.huntersLoadouts.filter(l => l !== selectedLoadout);
    setState({
      ...state,
      huntersLoadouts: newLoadouts,
      selectedLoadout: newLoadouts.at(-1)
    })
  }

  const handleLoadoutClick = (loadout: HunterLoadout) => () => {
    setState({...state, selectedLoadout: loadout});
  }

  return (
    <div className={'grid grid-cols-2 gap-8'}>
      {/* Список хантеров */}
      <HuntersList
        hunterLoadouts={huntersLoadouts}
        selectedLoadout={selectedLoadout}
        onLoadoutClick={handleLoadoutClick}
        onDismissAll={handleDismissAll}
        onGenerateClick={handleGenerateLoadout}
      />

      {/* Лоадаут выбранного хантера */}
     <HunterLoadoutDetails
       selectedLoadout={selectedLoadout}
       onDismiss={() => handleDismiss()}
     />
    </div>
  );
};

export default LoadoutCreator;