"use client";
import { usePathname } from "next/navigation";
// icons
import { HiHome, HiUser, HiViewColumns, HiEnvelope } from "react-icons/hi2";
import { motion } from "framer-motion";
// nav data
export const links = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />
  }
];

// next link
import Link from "next/link";

function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen group/navigation">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full transition-all duration-400 ease-in">
        {links.map((link, index) => {
          const isActive = link.path === pathname;
          return (
            <Link
              className={`${
                isActive && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
              prefetch={true}
            >
              <motion.div whileHover={{ scale: 1.1 }}>
                <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                  <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                    <div className="text-[12px] leading-none font-semibold capitalize">
                      {link.name}
                    </div>
                    <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                  </div>
                </div>
                <div className="text-2xl">{link.icon}</div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navigation;
