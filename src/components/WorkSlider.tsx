// work slider data
export const workSliders = [
  {
    id: "1",
    image: "/gptclone.png",
    title: "ChatGpt Clone",
    description:
      "This is a chat app clone with the NextJs. User will use o-auth login and send their message and get the response from the GPT model. And the response will be streamed and chat history will be saved as history for future reply!",
    url: "https://chatgpt-brian.vercel.app",
    repo: "https://github.com/o83213/chatgpt-clone",
    codeStack: [
      "typescript",
      "nextjs",
      "nodejs",
      "openai",
      "langchain",
      "mongodb",
      "nextauth",
      "tailwindcss"
    ]
  },
  {
    id: "2",
    image: "/catbook.jpg",
    blurImage: "/blur-catbook.jpg",
    title: "Cat Book",
    description:
      "This is a social media app clone with the Next front-end, GraphQL and Web-Socket server, and PostgreSQL database. There are the several main features in this project: Writing Post, Deleting their own post, Leaving common, Liking the post, Adding friends, Have live conversation.",
    url: "https://chat-project-client.vercel.app",
    repo: "https://github.com/o83213/catbook-fullstack",
    codeStack: [
      "typescript",
      "react",
      "nextjs",
      "nodejs",
      "expressjs",
      "graphql",
      "postgresql",
      "prisma",
      "jwt"
    ]
  },
  {
    id: "3",
    image: "/richTextEditor.png",
    blurImage: "/blur-richTextEditor.jpg",
    title: "Rich Text Editor",
    description:
      "This is a rich text editor create with SlateJs library. The user can write the text in bold, italic, ...etc and add online picture, link, and code block. After that, you can output the html into serialized string format!",
    url: "https://rich-editor-brian.vercel.app/",
    repo: "https://github.com/o83213/rich-editor",
    codeStack: ["typescript", "react", "nextjs", "slatejs", "webpack"]
  },
  {
    id: "4",
    image: "/pdf-editor.png",
    blurImage: "/blur-pdf-editor.jpg",
    title: "PDF Editor",
    description:
      "This is a PDF Editor with the Next front-end, Node back-end, and MongoDB database. The user can upload their pdf file and add block to writing their signature and typing the text. After that, they can download the modified version pdf file!",
    url: "https://pdf-sign-editor.vercel.app/",
    repo: "https://github.com/o83213/PDF-Sign-Editor",
    codeStack: [
      "javascript",
      "react",
      "nextjs",
      "pdfjsdist",
      "reactdraggable",
      "pdflib"
    ]
  }
];

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
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
      className="h-[65vh] sm:h-[480px] "
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
