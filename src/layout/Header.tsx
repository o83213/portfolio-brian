// next link
import Link from "next/link";
// components
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 pt-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-2">
          <Link href={"/"}>
            <div className="text-2xl md:text-3xl relative">
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
