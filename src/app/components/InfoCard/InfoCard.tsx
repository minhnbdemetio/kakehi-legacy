import clsx from "clsx";
import Image from "next/image";
import React, { FC } from "react";

type Props = {
  title: string;
};

export const InfoCard: FC<Props> = ({ title }) => {
  return (
    <div
      className={clsx(
        "flex justify-center items-center relative mx-auto",
        "w-60 max-w-full aspect-[240/300] bg-hover-primary/40",
        "text-white text-xl"
      )}
    >
      <span>{title}</span>

      <Image
        src="/logo.png"
        width={100}
        height={20}
        alt="logo"
        className="absolute bottom-13 left-1/2 -translate-x-1/2"
      />
    </div>
  );
};
