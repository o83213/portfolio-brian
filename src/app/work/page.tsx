"use client";
// components
import WorkSlider from "@/components/WorkSlider";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/variants";
import AnimationWrapper from "@/components/AnimationWrapper";
//
function Page() {
  return (
    <AnimationWrapper>
      <div className="h-full bg-primary/30 py-36 flex items-center ">
        <Circles />
        <div className="container mx-auto h-full ">
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full"
          >
            <WorkSlider />
          </motion.div>
        </div>
        <Bulb />
      </div>
    </AnimationWrapper>
  );
}
export default Page;
