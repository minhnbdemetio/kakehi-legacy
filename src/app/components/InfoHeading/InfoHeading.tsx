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
        "text-primary text-center uppercase space-y-2",
        className
      )}
    >
      <h2
        className={clsx(
          "text-xl font-noto-sans",
          "underline underline-offset-4 decoration-hover-primary/60 decoration-width decoration-2"
        )}
      >
        {subtitle}
      </h2>
      <h1 className="text-inherit font-bold text-2xl xl:text-3xl font-noto-sans-jp">
        {title}
      </h1>
    </div>
  );
};
