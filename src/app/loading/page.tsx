'use client';
import React, {useEffect, useState} from 'react';
import {
  LOADING_PAGE_BACKEND_CONNECTION_STAGES,
  LOADING_PAGE_COPYRIGHT_PARAGRAPH_TRANSITION_THRESHOLDS,
  LOADING_PAGE_COPYRIGHT_PARAGRAPHS
} from "@/app/loading/loading.const";
import {AnimatePresence, motion} from "framer-motion";
import CircleButton from '/public/crytek-assets/button.svg';
import {useRouter} from "next/navigation";
import Image from "next/image";

export type PageProps = {}

const Page = (props: PageProps) => {
  const [state, setState] = useState({
    timer: 0,
    backgroundAudio: null as unknown as HTMLAudioElement,
    backgroundAudioTimeout: 0 as NodeJS.Timeout,
    copyrightSliderInterval: 0 as NodeJS.Timeout,
    currentCopyrightParagraphIndex: 0,
    currentConnectivityParagraphIndex: 0
  });
  const {currentCopyrightParagraphIndex, currentConnectivityParagraphIndex} = state;

  const router = useRouter();

  useEffect(() => {
    // Итерация по сообщениям копирайта
    const audio = new Audio('crytek-assets/Hunt Showdown Intro.mp3');

    const timeoutId = setTimeout(() => {
      audio.play();
    }, 15000);

    const intervalId = setInterval(() => {
      setState(p => ({
        ...p,
        timer: p.timer + 100,
        currentCopyrightParagraphIndex: p.timer > LOADING_PAGE_COPYRIGHT_PARAGRAPH_TRANSITION_THRESHOLDS[p.currentCopyrightParagraphIndex] * 1000 ?
          p.currentCopyrightParagraphIndex + 1 : p.currentCopyrightParagraphIndex
      }));
    }, 100);

    setState(p => ({
      ...p,
      backgroundAudio: audio,
      backgroundAudioTimeout: timeoutId,
      copyrightSliderInterval: intervalId
    }));
  }, []);

  useEffect(() => {
    // Переход к сообщениям проверки связи с беком
    if (currentCopyrightParagraphIndex + 1 > LOADING_PAGE_COPYRIGHT_PARAGRAPHS.length) {
      setIrregularBackendLoadingInterval();
    }
  }, [currentCopyrightParagraphIndex]);

  useEffect(() => {
    if (currentConnectivityParagraphIndex + 1 === LOADING_PAGE_BACKEND_CONNECTION_STAGES.length) {
      setTimeout(() => {
        router.push('/menu');
      }, 2000);
    }
  }, [currentConnectivityParagraphIndex])

  const setIrregularBackendLoadingInterval = () => {
    setTimeout(() => {
      setState(p => ({
        ...p,
        currentConnectivityParagraphIndex:
          Math.min(p.currentConnectivityParagraphIndex + 1, LOADING_PAGE_BACKEND_CONNECTION_STAGES.length - 1)
      }));
      setIrregularBackendLoadingInterval();
    }, Math.min(Math.random() / 2 + 0.2, 0.6)*1000);
  }

  useEffect(() => {
    const listener = (e) => {
      if (e.which === 70) {
        setState(p => {
          if (p.backgroundAudio) {
            p.backgroundAudio.pause();
          }
          clearTimeout(p.backgroundAudioTimeout);
          clearInterval(p.copyrightSliderInterval);

          return {
            ...p,
            currentCopyrightParagraphIndex: LOADING_PAGE_COPYRIGHT_PARAGRAPHS.length
          }
        })
      }
    }

    document.addEventListener('keyup', listener);

    return () => {
      document.removeEventListener('keyup', listener);
    }
  }, [])

  return (
    <motion.div
      className={'flex flex-col items-center justify-center text-center bg-black grow text-col-2 text-3xl'}
      initial={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className={'max-w-[1150px]'}>
        <AnimatePresence mode={'wait'}>
          {currentCopyrightParagraphIndex === 0 && (
            <MotionComponent key={0}>
              {LOADING_PAGE_COPYRIGHT_PARAGRAPHS[0]}
            </MotionComponent>
          )}
          {currentCopyrightParagraphIndex === 1 && (
            <MotionComponent key={1}>
              {LOADING_PAGE_COPYRIGHT_PARAGRAPHS[1]}
            </MotionComponent>
          )}
          {currentCopyrightParagraphIndex === 2 && (
            <MotionComponent key={2}>
              {LOADING_PAGE_COPYRIGHT_PARAGRAPHS[2]}
            </MotionComponent>
          )}
          {currentCopyrightParagraphIndex === 3 && (
            <MotionComponent key={3}>
              {LOADING_PAGE_COPYRIGHT_PARAGRAPHS[3]}
            </MotionComponent>
          )}
          {currentCopyrightParagraphIndex === 4 && (
            <MotionComponent key={4}>
              {LOADING_PAGE_COPYRIGHT_PARAGRAPHS[4]}
            </MotionComponent>
          )}
          {currentCopyrightParagraphIndex === 5 && (
            <MotionComponent key={5}>
              {LOADING_PAGE_COPYRIGHT_PARAGRAPHS[5]}
            </MotionComponent>
          )}
          {currentCopyrightParagraphIndex === 6 && (
            <MotionComponent key={6}>
              {LOADING_PAGE_COPYRIGHT_PARAGRAPHS[6]}
            </MotionComponent>
          )}
          {currentCopyrightParagraphIndex === 7 && (
            <MotionComponent key={7}>
              {LOADING_PAGE_COPYRIGHT_PARAGRAPHS[7]}
            </MotionComponent>
          )}
          {currentCopyrightParagraphIndex === 8 && currentConnectivityParagraphIndex + 1 < LOADING_PAGE_BACKEND_CONNECTION_STAGES.length && (
            <MotionComponent className={'flex flex-col items-center gap-10 text-2xl'} transition={{duration: 2}}>
              <Image alt={''} src={CircleButton} className={'w-[200px] h-[200px] animate-spin'} style={{animationDuration: '15s'}} />
              <span className={'opacity-30'}>{LOADING_PAGE_BACKEND_CONNECTION_STAGES[currentConnectivityParagraphIndex]}</span>
            </MotionComponent>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {currentCopyrightParagraphIndex < 8 && (
            <motion.span
              className={'absolute right-[100px] bottom-[40px] text-col-3'}
              initial={{opacity: 0}}
              animate={{opacity: .5}}
              exit={{opacity: 0}}
              transition={{duration: 1}}
            >
              [F] Skip
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Page;

const MotionComponent = (props: any) => (
  <motion.div transition={{duration: 1}} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} {...props} />
)