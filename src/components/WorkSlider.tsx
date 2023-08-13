import LiveProjectPop from "./LiveProjectPop";
// work slider data
export const workSliders = [
  {
    id: "1",
    image: "/thumb1.jpg",
    title: "Cat Book",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url: "https://google.com",
    codeStack: [
      "typescript",
      "react",
      "nextjs",
      "nodejs",
      "expressjs",
      "graphql",
      "postgresql",
      "prisma"
    ]
  },
  {
    id: "2",
    image: "/thumb2.jpg",
    title: "PDF Editor",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url: "https://google.com",
    codeStack: [
      "typescript",
      "react",
      "nextjs",
      "pdfjsdist",
      "reactdraggable",
      "nodejs",
      "expressjs",
      "pdflib",
      "mongodb"
    ]
  },
  {
    id: "3",
    image: "/thumb3.jpg",
    title: "Rich Text Editor",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url: "https://google.com",
    codeStack: ["typescript", "react", "nextjs", "slatejs"]
  }
];

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Pagination, Navigation, Mousewheel } from "swiper";
import Projectcard from "./Projectcard";
function WorkSlider() {
  return (
    <Swiper
      pagination={{
        clickable: true
      }}
      navigation={true}
      mousewheel={true}
      loop={true}
      modules={[Pagination, Navigation, Mousewheel]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSliders.map((slide) => {
        return (
          <SwiperSlide key={slide.id}>
            <Projectcard data={slide} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default WorkSlider;
