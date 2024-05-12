'use client'
import React, {useContext, useState} from 'react';
import {motion} from "framer-motion";
import Select from "@/ui/Select/Select";
import {MusicPresetId} from "@/features/app-multimedia-center/entities/music-preset-id";
import {AppOptionsContext} from "@/features/app-options/app-options.context";
import {PRESETS_LIST} from "@/loadout-presets/presets-list.const";
import {APP_MUSIC_PRESET_OPTIONS} from "@/features/app-options/app-options.const";
import Slider from "@/ui/Slider/Slider";

export type PageProps = {}

const Page = (props: PageProps) => {
  const [state, setState] = useState({
    controlHintText: ''
  })

  const {options, setOptions} = useContext(AppOptionsContext);

  const handleIdChange = optionKey => (e) => {
    setOptions({...options, [optionKey]: e.target.value.id});
  }

  const handleSetHintText = (hintText: string) => () => {
    setState({...state, controlHintText: hintText});
  }

  return (
    <motion.div
      className={'flex flex-col gap-10 py-3'}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity:0}}
    >
      <div className={'grid grid-cols-[1fr,400px] gap-4 grow'}>
        {/* Options list */}
        <div className={'flex flex-col gap-12'}>
          <div className={'flex flex-col gap-4'}>
            <h3 className={'text-3xl font-bold'}>Preset</h3>

            <Select
              label={'Recruit Preset'}
              value={PRESETS_LIST.find(i => i.id === options.loadoutPreset)}
              options={PRESETS_LIST}
              labelField={'name'}
              onChange={handleIdChange('loadoutPreset')}
              onMouseEnter={handleSetHintText('Select "Recruit Hunter" rules')}
              onMouseLeave={handleSetHintText('')}
            />
          </div>

          <div className={'flex flex-col gap-4'}>
            <h3 className={'text-3xl'}>Music</h3>

            <Select
              label={'Background music'}
              value={APP_MUSIC_PRESET_OPTIONS.find(preset => preset.id === options.musicPreset)}
              options={APP_MUSIC_PRESET_OPTIONS}
              onChange={handleIdChange('musicPreset')}
              onMouseEnter={handleSetHintText('Select music list')}
              onMouseLeave={handleSetHintText('')}
            />

            <Slider
              label={'Music volume'}
              value={+(options.musicVolume * 100).toFixed(0)}
              onChange={(e, v: number) => setOptions({...options, musicVolume: (v/100)})}
            />
          </div>
        </div>

        {/* Description panel */}
        <div className={'border-2 border-col-6 bg-black/80 px-2 py-4'}>
          {state.controlHintText}
        </div>
      </div>
    </motion.div>
  );
};

export default Page;