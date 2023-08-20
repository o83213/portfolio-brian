import Image from "next/image";
function Avatar() {
  return (
    <div className="w-[100px] h-[100px] rounded-[50%] overflow-hidden flex justify-center absolute xl:bottom-10 bottom-20 xl:right-[20%] right-[5%] xl:w-[250px] xl:h-[250px] lg:w-[200px] lg:h-[200px] sm:w-[150px] sm:h-[150px] z-10">
      <Image
        src={"/avatar.jpg"}
        fill
        style={{ objectFit: "cover" }}
        alt=""
        quality={100}
      />
    </div>
  );
}
export default Avatar;
