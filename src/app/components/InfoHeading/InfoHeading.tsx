import clsx from "clsx";
import React, { FC } from "react";

type Props = {
  title: string;
  subtitle: string;
  className?: string;
};

export const InfoHeading: FC<Props> = ({ subtitle, title, className }) => {
  return (
    <div
      className={clsx(
        "space-y-2 text-center uppercase text-primary",
        className
      )}
    >
      <h2
        className={clsx(
          "mx-auto w-fit border-b-[2px] border-b-hover-primary pb-[4px] font-noto-sans text-[13px] md:text-[15px] xxl:text-xl",
          ""
        )}
      >
        {subtitle}
      </h2>
      <h1 className="text-[20px] font-bold text-inherit md:text-2xl xxl:text-3xl">
        {title}
      </h1>
    </div>
  );
};
