"use client";
import React from "react";
import Image from "next/image";
import TechnologyTag from "@/components/TechnologyTag";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";
import LiveProjectPop from "./LiveProjectPop";
import Link from "next/link";

interface Project_data {
  id: string;
  image: string;
  title: string;
  description: string;
  url: string;
  codeStack: string[];
}

interface Props {
  data: Project_data;
}

function Projectcard({ data }: Props) {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-4 cursor-pointer  w-full h-4/5">
      <div>
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 xl:mt-12"
        >
          {data.title}
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-4 max-w-[400px] mx-auto lg:mx-0"
        >
          {data.description}
        </motion.p>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-4 max-w-[400px] mx-auto lg:mx-0"
        >
          <TechnologyTag technologyFeatures={data.codeStack} />
        </motion.p>
      </div>
      <Link
        href={data.url}
        target={"_blank"}
        className="relative rounded-lg overflow-hidden flex items-center justify-center group"
      >
        <Image src={data.image} fill alt="" />
        <LiveProjectPop />
      </Link>
    </div>
  );
}

export default Projectcard;
