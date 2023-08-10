// links
import Link from "next/link";
// icons
import {
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine,
  RiPinterestLine
} from "react-icons/ri";

const links = [
  {
    title: "linkedIn",
    path: "https://www.linkedin.com/in/3806b8111/",
    icon: <RiLinkedinLine />
  },
  {
    title: "github",
    path: "https://github.com/o83213",
    icon: <RiGithubLine />
  }
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-6 text-lg">
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.path}
          target={"_blank"}
          className="text-xl hover:text-accent hover:scale-125 transition-all duration-300"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
