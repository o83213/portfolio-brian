"use client";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import Image from "next/image";
import ProjectsBtn from "@/components/ProjectsBtn";
import HomeImage from "@/components/HomeImage";
import AnimationWrapper from "@/components/AnimationWrapper";
export default function Home() {
  return (
    <AnimationWrapper>
      {/* <div className="bg-primary/60 h-full">
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10"> */}
      <div className="h-full">
        <div className="w-full h-full">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 xl:mb-8"
            >
              Transforming Ideas <br /> Into{" "}
              <span className="text-accent">Digital Reality</span>
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 lg:mb-10 xl:mb-16"
            >
              {
                "Hello, I'm Brian, a passionate software developer. I am going to transform your great idea into an elegant, eye-catching, and efficient web app!"
              }
            </motion.p>
            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        <div className="w-[800px] xl:w-[1200px] h-full absolute right-0 bottom-0 -z-10">
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
          >
            <HomeImage />
          </motion.div>
        </div>
      </div>
    </AnimationWrapper>
  );
}
