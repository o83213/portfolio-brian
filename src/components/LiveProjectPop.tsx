import { BsArrowRight } from "react-icons/bs";

export default function LiveProjectPop() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-28 transition-all duration-300">
        <div className="flex items-center gap-x-2 text-[16px] tracking-[0.2em]">
          <div className="delay-100">LIVE</div>
          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
            PROJECT
          </div>
          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
            <BsArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}
