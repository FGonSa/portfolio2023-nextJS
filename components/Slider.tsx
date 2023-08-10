"use client"
import React from "react";
import { motion } from "framer-motion";
import WorkCard from "./WorkCard";

type Props = {
  works: Work[];
};



function Slider({ works }: Props) {
  
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    //   viewport={{ once: true }}
    transition={{ duration: 1.5 }}
    className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full  mx-auto items-center"
  >

    <div className="w-full flex space-x-5 overflow-x-scroll py-4 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
    {/* Aquí van las Cards */}
    {works?.map((work) => (
          // <a href={work.url}>
          <WorkCard key={work.id} work={work} url={work.url} />
          // </a>
        ))}
    </div>
  </motion.div>
  );
}

export default Slider;