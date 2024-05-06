'use client';
import React, {useEffect, useState} from 'react';
import easyACLogo from '/public/easy-ac-assets/easy-ac1.png'
import easyACLogoText from '/public/easy-ac-assets/easy-ac2.png'
import {EASY_AC_LOADING_STATE_STAGES} from "@/widgets/easy-ac-widget/easy-ac-widges.const";
import {motion} from "framer-motion";

export type EasyAcWidgetProps = {
  onLoadSuccess: () => any;
}

const EasyAcWidget = (props: EasyAcWidgetProps) => {
  const { onLoadSuccess, ...rest } = props;

  const [state, setState] = useState({
    loadingStateText: '',
    loadingProgress: 0,
    ellipsis: '',
  });

  useEffect(() => {
    setTimeout(() => {
      setState(p => ({...p, loadingStateText: EASY_AC_LOADING_STATE_STAGES[0]}));
      setInterval(() => setState(p => ({...p, ellipsis: p.ellipsis.length < 3 ? p.ellipsis + '.' : ''})), 888);
    }, 700);

    setTimeout(() => {
      setInterval(() => {
        setState(p => {
          const rnd = Math.random();
          let loadingProgress = Math.min(100, rnd < 0.2 ? p.loadingProgress + 6.5 : p.loadingProgress + rnd);
          if (loadingProgress > 80) loadingProgress = 100;
          return {...p, loadingProgress}
        });
      }, 100)
    }, 1500);
  }, []);

  useEffect(() => {
    if (state.loadingProgress > 45) {
      setState(() => ({...state, loadingStateText: EASY_AC_LOADING_STATE_STAGES[1]}));
    }

    if (state.loadingProgress === 100) {
      setTimeout(() => {
        onLoadSuccess?.();
      }, 2000)
    }
  }, [state.loadingProgress])

  return (
    <div className={'fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 flex flex-col justify-end text-white ' +
      'bg-[url("/crytek-assets/easy-ac-bg.jpg")] bg-cover w-[1000px] h-[550px]'}
    >
      <img className={'absolute w-[550px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'} src={'/crytek-assets/Logo/Hunt_Logo_Textured_White.png'} />

      <div className={'flex flex-col justify-end gap-10'}>
        <div className={'relative flex items-end gap-6 pl-[40px] pr-[60px]'}>
          <motion.div initial={{scale: 0, opacity: 0.2}} animate={{scale: 1, opacity: 1}} transition={{duration: 1.5}}>
            <img className={'h-[80px]'} src={easyACLogo.src} />
          </motion.div>

          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, delay: 1}}>
            <img className={'h-[80px]'} src={easyACLogoText.src}/>
          </motion.div>

          <div className={'relative ml-auto uppercase text-xl'}>
            <span>{state.loadingStateText}</span>
            <span className={'absolute'}>{state.ellipsis}</span>
          </div>
        </div>

        <div
          className={'h-[16px] bg-no-repeat'}
          style={{
            backgroundImage: 'linear-gradient(rgb(51 155 255), rgb(118 224 255))',
            backgroundSize: `${state.loadingProgress}%`
          }}
        />
      </div>
    </div>
  );
};

export default EasyAcWidget;