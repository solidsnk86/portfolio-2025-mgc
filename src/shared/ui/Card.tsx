import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import styles from "../styles/card.module.css"

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
    <div className={`md:p-10 p-8 mx-2 text-center flex flex-col justify-center text-zinc-950 ${styles.gradient} ${poppins.className} relative`}>
      <h2 className="xl:text-4xl text-2xl font-semibold xl:flex flex flex-col mx-auto gap-2 items-center justify-center">
        {children}
        {title}
      </h2>
      <h3 className="font-semibold text-lg mt-2">{text}</h3>
      {button}
    </div>
  );
};
