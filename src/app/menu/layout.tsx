'use client'
import React, {useEffect} from 'react';
import Button from "@/ui/Button/Button";
import {AppMultimediaCenter} from "@/features/app-multimedia-center/app-multimedia-center";
import {useRouter} from "next/navigation";

export type MenuLayoutProps = {}

const MenuLayout = (props: any) => {
  const router = useRouter();

  useEffect(() => {
    AppMultimediaCenter.startPresetLoop();
  }, []);

  const handleExit = () => {
    router.push('/');
  }

  return (
    <div className={'flex flex-col py-[200px] px-4 grow bg-[url("/crytek-assets/WebPageBackgrounds/Home-page-background.jpg")]'}>
      <div className={'grid grid-cols-[auto_1fr] gap-8 text-2xl text-white max-w-[1500px] w-full mx-auto grow'}>
        {/* Меню */}
        <div className={'flex flex-col gap-4 py-4'}>
          <Button variant={'stroke'} selected className={'!text-base'}>Loadout creator</Button>
          <Button variant={'stroke'} className={'!text-base'} disabled>Options</Button>
          <Button variant={'stroke'} className={'!text-base'} onClick={handleExit}>Exit</Button>
        </div>

        {props.children}
      </div>
    </div>
  );
};

export default MenuLayout;