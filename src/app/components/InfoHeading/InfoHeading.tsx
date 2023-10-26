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
          "font-noto-sans text-xl",
          "decoration-width underline decoration-hover-primary/60 decoration-2 underline-offset-4"
        )}
      >
        {subtitle}
      </h2>
      <h1 className=" text-2xl font-bold text-inherit xl:text-3xl">{title}</h1>
    </div>
  );
};
