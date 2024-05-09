'use client';
import React, {useEffect, useState} from 'react';
import {THunterLoadout} from "@/entities/hunter-loadout";

export type LoadoutCreatorCacheValidationProps = {
  children: any;
}

const LoadoutCreatorCacheValidation = (props: LoadoutCreatorCacheValidationProps) => {
  const [state, setState] = useState({
    isLoadoutModelSafe: false,
  });
  const {isLoadoutModelSafe} = state;

  useEffect(() => {
    try {
      const loadouts: THunterLoadout[] = JSON.parse(localStorage.getItem('loadouts'));
      // validate loadouts if cache successfully identified as array
      if (Array.isArray(loadouts)) {
        for (let loadout of loadouts) {
          if (!Array.isArray(loadout.weaponSlots?.[0].weapon.ammoType)) {
            localStorage.removeItem('loadouts');
          }
        }
      }


      setState({...state, isLoadoutModelSafe: true});
    } catch (e) {
      console.log(e)
    }
  }, []);

  if (isLoadoutModelSafe) {
    return props.children;
  } else {
    return (
      <div className={'text-col-2'}>
        Загрузка..
      </div>
    )
  }
};

export default LoadoutCreatorCacheValidation;