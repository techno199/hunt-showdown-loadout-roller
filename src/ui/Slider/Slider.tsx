import React, {ReactNode} from 'react';
import {SliderProps as MuiSliderProps, Slider as MuiSlider} from "@mui/material";
import clsx from "clsx";
import {AppMultimediaCenter} from "@/features/app-multimedia-center/app-multimedia-center";

export type SliderProps = MuiSliderProps & {
  label?: ReactNode;
}

const Slider = (props: SliderProps) => {
  const { label, className, ...rest } = props;

  const __playClick1Sfx = () => {
    const audio = new Audio('/crytek-assets/sfx/hunt_sfx_click1.mp3');
    audio.currentTime = 0.2;
    AppMultimediaCenter.playStreamSfx(audio);
  }

  const __playClick2Sfx = () => {
    const audio = new Audio('/crytek-assets/sfx/hunt_sfx_click2.mp3');
    // audio.currentTime = 0.2;
    AppMultimediaCenter.playStreamSfx(audio);
  }

  return (
    <div
      className={clsx(className, 'group grid', {['grid-cols-[1fr,450px]']: label})}
      onClick={__playClick1Sfx}
      onMouseEnter={__playClick1Sfx}
      onMouseLeave={__playClick1Sfx}
    >
      {label && (
        <label className={'font-bold'}>{label}</label>
      )}

      {/* Slider + value */}
      <div className={'relative flex gap-10 pr-20'}>
        <MuiSlider
          className={clsx({
            ['rounded-none border-2 border-col-6 h-auto  bg-col-4/70']: 1
          })}
          classes={{
            rail: 'hidden',
            thumb: 'hidden',
            track: 'h-5 bg-col-6 group-hover:bg-col-2 border-none',
          }}
          {...rest}
        />

        <span className={'absolute right-6 font-bold text-xl'}>{rest.value}</span>
      </div>
    </div>
  );
};

export default Slider;