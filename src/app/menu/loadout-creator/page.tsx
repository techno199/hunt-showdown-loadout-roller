'use client'
import React from 'react';
import LoadoutCreator from "@/features/loadout-creator/loadout-creator";
import {motion} from "framer-motion";

export type PageProps = {}

const Page = (props: PageProps) => {
  return (
    <motion.div className={'grid'} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
      <LoadoutCreator />
    </motion.div>
  );
};

export default Page;