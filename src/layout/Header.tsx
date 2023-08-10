// next link
import Link from "next/link";
// components
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <div className="text-3xl relative ">
              <span className="font-bold">Brian</span> <span>Dev</span>
              <div className="absolute bottom-1 -right-2 w-1.5 h-1.5 rounded-full bg-red-700" />
            </div>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
