import clsx from "clsx";
import React, { ElementType, FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  as?: ElementType;
  className?: string;
}

export const Container: FC<Props> = ({ as = "div", className, children }) => {
  const Component = as;

  return (
    <Component
      className={clsx(
        "mx-auto px-7 max-w-screen-desktop box-border",
        className
      )}
    >
      {children}
    </Component>
  );
};
