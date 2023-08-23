"use client";
import React, { useState } from "react";
// icons
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiApollographql,
  SiPostgresql,
  SiPrisma,
  SiLinux
} from "react-icons/si";
// components
import HomeImage from "../../components/HomeImage";
import Circles from "../../components/Circles";
import Avatar from "@/components/Avatar";
// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/variants";
// counter
import AnimationWrapper from "@/components/AnimationWrapper";
// about data
const aboutData: Array<{
  title: string;
  info: Array<{
    title: string;
    icons?: Array<React.ReactNode>;
    stage?: string;
  }>;
}> = [
  {
    title: "Skill Sets",
    info: [
      {
        title: "Front-End Development",
        icons: [
          <SiHtml5 key={1} />,
          <SiCss3 key={2} />,
          <SiJavascript key={3} />,
          <SiTypescript key={4} />,
          <SiReact key={5} />,
          <SiNextdotjs key={6} />
        ]
      },
      {
        title: "Back-End Development",
        icons: [
          <SiNodedotjs key={1} />,
          <SiExpress key={2} />,
          <SiGraphql key={3} />,
          <SiApollographql key={4} />
        ]
      },
      {
        title: "Other Skills",
        icons: [
          <SiPostgresql key={1} />,
          <SiPrisma key={2} />,
          <SiLinux key={3} />
        ]
      }
    ]
  },
  {
    title: "Experience",
    info: [
      {
        title: "2022 - 2023",
        stage: "Front-End Developer - Lion Travel"
      },
      {
        title: "2020 - 2021",
        stage: "Mechanical Engineer - Lagis"
      }
    ]
  }
];
//
export default function Page() {
  const [index, setIndex] = useState(0);
  return (
    <AnimationWrapper>
      <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
        <Circles />
        <Avatar />
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex absolute bottom-0 -left-[370px]"
        >
          <HomeImage />
        </motion.div>
        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
          <div className="flex-1 flex flex-col justify-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-2xl xl:text-3xl font-bold"
            >
              {"Developer with "}
              <span className="text-accent">passion</span>
              {" and "}
              <span className="text-accent">talent</span>
            </motion.div>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            >
              {
                "I'm currently a front-end software developer with 2 years of hands-on experience."
              }
              <br />
              {
                "I am also a self-taught and motivated person who is fascinated by up-to-date technology and lower-detail background knowledge of web-developing."
              }
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 mt-4">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={item.title}
                    className={`${
                      index === itemIndex &&
                      "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  >
                    <div className="hidden md:block font-light mb-2 md:mb-0">
                      {item.title}
                    </div>
                    <div className="hidden md:flex">-</div>
                    <div>{item?.stage}</div>
                    <div className="flex gap-x-4">
                      {item.icons?.map((icon, itemIndex) => {
                        return (
                          <div className="text-2xl text-white" key={itemIndex}>
                            {icon}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimationWrapper>
  );
}
