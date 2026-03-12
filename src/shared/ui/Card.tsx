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
  button
}: {
  title: string;
  children: ReactNode
  text: string;
  button?: ReactNode
}) => {
  return (
    <div className={`md:p-10 p-8 mx-2 text-center flex flex-col justify-center text-[var(--text-primary-color)] ${poppins.className} relative`}>
      <h2 className="xl:text-4xl text-2xl font-semibold xl:flex flex flex-col mx-auto gap-2 items-center justify-center z-50">
        {children}
        {title}
      </h2>
      <h3 className="text-lg mt-2 z-50">{text}</h3>
      {button}
    </div>
  );
};
