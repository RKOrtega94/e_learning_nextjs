import Image from "next/image";
import PlaceHolder from "./placeholder.svg";

export default function SplashComponent() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#ffffff]">
      <div
        className="w-full h-full absolute z-10 bg-cover bg-center opacity-0 animate-fade-in-slow"
        style={{
          backgroundImage: "url('/placeholder.svg')",
        }}
      />
      <div className="z-20 flex flex-col items-center justify-center space-y-4">
        <Image src={PlaceHolder} alt="placeholder" />
        <div className="relative w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="absolute h-full bg-blue-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
