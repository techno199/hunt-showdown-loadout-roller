'use client'
import React, {useContext} from 'react';
import {motion} from "framer-motion";
import Select from "@/ui/Select/Select";
import {MusicPresetId} from "@/features/app-multimedia-center/entities/music-preset-id";
import {AppOptionsContext} from "@/features/app-options/app-options.context";
import {PRESETS_LIST} from "@/loadout-presets/presets-list.const";
import {APP_MUSIC_PRESET_OPTIONS} from "@/features/app-options/app-options.const";

export type PageProps = {}

const Page = (props: PageProps) => {
  const {options, setOptions} = useContext(AppOptionsContext);

  const handleIdChange = optionKey => (e) => {
    setOptions({...options, [optionKey]: e.target.value.id});
  }

  return (
    <motion.div
      className={'flex flex-col gap-10 py-3'}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity:0}}
    >
      <div className={'flex flex-col gap-12'}>
        <div className={'flex flex-col gap-4'}>
          <h3 className={'text-3xl'}>Preset</h3>

          <div className={'grid grid-cols-[200px,1fr] gap-12 items-center'}>
            <span>Loadout preset</span>
            <Select
              labelField={'name'}
              value={PRESETS_LIST.find(preset => preset.id === options.loadoutPreset)}
              options={PRESETS_LIST}
              onChange={handleIdChange('loadoutPreset')}
            />
          </div>
        </div>

        <div className={'flex flex-col gap-4'}>
          <h3 className={'text-3xl'}>Music</h3>

          <div className={'grid grid-cols-[200px,1fr] gap-12 items-center'}>
            <span>Music preset</span>
            <Select
              value={APP_MUSIC_PRESET_OPTIONS.find(preset => preset.id === options.musicPreset)}
              options={APP_MUSIC_PRESET_OPTIONS}
              onChange={handleIdChange('musicPreset')}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;