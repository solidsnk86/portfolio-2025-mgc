import { ReactNode } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["100", "200", "300"],
    subsets: ["latin"],
  });

export const Card = ({
  title,
  children,
  text,
}: {
  title: string;
  children: ReactNode
  text: string;
}) => {
  return (
    <div className={`xl:p-16 md:p-10 p-8 mx-2 rounded-xl colder text-center flex flex-col justify-center relative text-zinc-100 ${poppins.className} overflow-x-hidden`}>
      <h2 className="xl:text-4xl text-2xl font-semibold xl:flex flex flex-col mx-auto gap-2 items-center justify-center">
        {children}
        {title}
      </h2>
      <h3 className="font-semibold text-lg mt-2">{text}</h3>
    </div>
  );
};
