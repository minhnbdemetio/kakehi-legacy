import clsx from "clsx";
import React, { ElementType, FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  as?: ElementType;
  className?: string;
}

export const InfoContainer: FC<Props> = ({
  as = "div",
  className,
  children,
}) => {
  const Component = as;

  return (
    <Component
      className={clsx(
        "mx-auto box-content max-w-[994px] px-7 md:px-14",
        className
      )}
    >
      {children}
    </Component>
  );
};
