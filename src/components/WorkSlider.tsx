import LiveProjectPop from "./LiveProjectPop";
// work slider data
export const workSliders = [
  {
    id: "1",
    image: "/thumb1.jpg",
    title: "Cat Book",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: "2",
    image: "/thumb2.jpg",
    title: "PDF Editor",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: "3",
    image: "/thumb3.jpg",
    title: "Rich Text Editor",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
];

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
// next image
import Image from "next/image";
// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/variants";
function WorkSlider() {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSliders.map((slide, index) => {
        return (
          <SwiperSlide key={slide.id}>
            <div className="grid grid-cols-2 grid-rows-1 gap-4 cursor-pointer">
              <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
                <motion.h2
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="h2 xl:mt-12"
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="mb-4 max-w-[400px] mx-auto lg:mx-0"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                  eveniet dignissimos distinctio tempore harum laudantium.
                </motion.p>
              </div>
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={index}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image src={slide.image} width={500} height={300} alt="" />
                  <LiveProjectPop />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default WorkSlider;
