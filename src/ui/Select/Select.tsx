import React from 'react';
import {MenuItem, Select as MuiSelect, SelectProps as MuiSelectProps} from "@mui/material";
import ArrowLeft from '/public/icons/arrow_left.png'
import clsx from "clsx";
import Image from "next/image";
import {AppMultimediaCenter} from "@/features/app-multimedia-center/app-multimedia-center";

export type SelectProps = MuiSelectProps & {
  options: any[];
  labelField?: string;
}

const Select = (props: SelectProps) => {
  const {options, labelField = 'label', label, className, onMouseEnter, onMouseLeave, onChange, onOpen, onClose, ...rest} = props;

  const handleShiftChange = (shift: number) => () => {
    const selectedOptionIndex = options.findIndex(o => o === rest.value);
    onChange?.({
      target: {
        value: options.at((selectedOptionIndex + shift) % options.length)
      }
    } as any, null);
  }

  const handleOpen = (e) => {
    onOpen?.(e);
    const audio = new Audio('/crytek-assets/sfx/hunt_sfx_click1.mp3');
    audio.currentTime = 0.2;
    AppMultimediaCenter.playStreamSfx(audio);
  }

  const handleClose = (e) => {
    onClose?.(e);
    const audio = new Audio('/crytek-assets/sfx/hunt_sfx_click1.mp3');
    audio.currentTime = 0.2;
    AppMultimediaCenter.playStreamSfx(audio);
  }

  return (
    <div
      className={clsx(className, {['grid grid-cols-[1fr,450px] gap-4 items-center']: label})}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Label */}
      {label && <span className={'font-bold'}>{label}</span>}

      <div className={clsx('relative')}>
        {/* Arrows */}
        <Image alt='' src={ArrowLeft} className={'absolute -top-[10px] z-10 hover:brightness-200 cursor-pointer'}
               onClick={handleShiftChange(-1)}/>
        <Image alt='' src={ArrowLeft}
               className={'absolute -top-[2px] right-0 rotate-180 z-10 hover:brightness-200 cursor-pointer'}
               onClick={handleShiftChange(1)}/>

        {/* Options square counter */}
        <div className={'absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-1'}>
          {Array(options.length).fill(0).map((_, i) => (
            <div key={i} className={clsx('w-[5px] h-[5px] bg-col-2 opacity-50', {['!opacity-100']: options[i] === props.value})} />
          ))}
        </div>

        {/* Base */}
        <MuiSelect
          fullWidth
          className={'group text-col-2 [&_fieldset]:border-0 [&_.MuiSelect-select]:text-center font-bold'}
          renderValue={(v) => v?.[labelField]}
          IconComponent={IconComponent}
          MenuProps={{
            classes: {
              paper: 'bg-black !transition-none',
              list: 'flex flex-col gap-0.5 p-0.5 [&_li]:bg-col-1 [&_li:hover]:bg-col-2 [&_li]:text-col-2 [&_li:hover]:text-col-4 [&_li]:font-bold'
            }
          }}
          onOpen={handleOpen}
          onClose={handleClose}
          onChange={onChange}
          {...rest}
        >
          {options?.map(option => (
            <MenuItem key={option[labelField]} value={option}>{option[labelField]}</MenuItem>
          ))}
        </MuiSelect>
      </div>
    </div>
  );
};

export default Select;

const IconComponent = (props) => {
  const { className, ...rest } = props;

  return (
    <Image
      src={ArrowLeft}
      alt={''}
      className={'absolute -rotate-90 w-[60px] right-[70px] group-hover:brightness-200 cursor-pointer z-20 ' +
        'pointer-events-none'}
      {...rest}
    />
  )
}