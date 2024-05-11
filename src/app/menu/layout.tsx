'use client'
import React, {useEffect} from 'react';
import {AppMultimediaCenter} from "@/features/app-multimedia-center/app-multimedia-center";
import {usePathname, useRouter} from "next/navigation";
import {AnimatePresence} from "framer-motion";
import Link from "next/link";
import Button from "@/ui/Button/Button";
import AppBar from "@/app/menu/app-bar/app-bar";
import {AppOptionsProvider} from "@/features/app-options/app-options.context";
import {StyledEngineProvider} from "@mui/material/StyledEngineProvider";

export type MenuLayoutProps = {}

const MenuLayout = (props: any) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    AppMultimediaCenter.startPresetLoop();
  }, []);

  const handleExit = () => {
    router.push('/');
    AppMultimediaCenter.stopCurrentLoop();
  }

  return (
    <StyledEngineProvider injectFirst>
      <AppOptionsProvider>
        <div className={'flex flex-col py-[200px] px-4 grow bg-[url("/crytek-assets/WebPageBackgrounds/Home-page-background.jpg")]'}>
          <div className={'grid grid-cols-[auto_1fr] gap-8 text-2xl text-col-2 max-w-[1500px] w-full mx-auto grow'}>
            {/* App bar */}
            <AppBar />

            {/* Меню */}
            <div className={'flex flex-col gap-4 py-2'}>
              <Link href={'/menu/loadout-creator'}>
                <Button variant={'stroke'} selected={pathname === '/menu/loadout-creator'} className={'!text-base w-full'}>
                  Loadout creator
                </Button>
              </Link>
              <Link href={'/menu/options'}>
                <Button variant={'stroke'} selected={pathname === '/menu/options'} className={'!text-base w-full'}>Options</Button>
              </Link>
              <Button variant={'stroke'} className={'!text-base'} onClick={handleExit}>Exit</Button>
            </div>

            <AnimatePresence>
              {props.children}
            </AnimatePresence>
          </div>
        </div>
      </AppOptionsProvider>
    </StyledEngineProvider>
  );
};

export default MenuLayout;