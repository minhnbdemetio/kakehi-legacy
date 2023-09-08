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
        "relative mx-auto flex items-center justify-center",
        "aspect-[240/300] w-60 max-w-full bg-hover-primary/40",
        "text-xl text-white"
      )}
    >
      <span>{title}</span>

      <img
        src="/logo.png"
        width={100}
        height={20}
        alt="logo"
        className="absolute bottom-13 left-1/2 -translate-x-1/2"
      />
    </div>
  );
};
