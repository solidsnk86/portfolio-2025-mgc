import Image from "next/image";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="rounded-full max-w-3xl mt-6 bg-zinc-100/30 backdrop-blur-xl dark:bg-zinc-800/50 h-[74px]">
      <div className="flex items-center justify-between h-full px-5">
        <Image
          src="/assets/solidSnk86-bg.png"
          width={115}
          height={65}
          alt="SolidSnk86"
        />
        <Navbar />
      </div>
    </header>
  );
};
