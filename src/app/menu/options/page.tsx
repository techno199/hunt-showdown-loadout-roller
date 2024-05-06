'use client'
import React from 'react';
import {motion} from "framer-motion";
import Select from "@/ui/Select/Select";
import {MusicPreset} from "@/features/app-multimedia-center/entities/music-preset";

export type PageProps = {}

const Page = (props: PageProps) => {
  return (
    <motion.div
      className={'flex flex-col gap-10 py-3'}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity:0}}
    >
      <div className={'flex flex-col gap-4'}>
        <h3 className={'text-3xl'}>Music</h3>

        <div className={'grid grid-cols-[auto,1fr] gap-12'}>
          <span>Background music preset</span>
          <Select value={presetOptions[0]} options={presetOptions} />
        </div>
      </div>
    </motion.div>
  );
};

export default Page;

const presetOptions = [
  { label: 'Vocal', preset: MusicPreset.VOCAL },
  { label: 'Instrumental', preset: MusicPreset.INSTRUMENTAL },
  { label: 'Mixed', preset: MusicPreset.MIXED }
]