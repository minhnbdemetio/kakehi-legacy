import clsx from "clsx";
import React, { FC, InputHTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>;

export const Checkbox: FC<Props> = ({
  name,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "flex gap-5 items-center text-xl leading-loose",
        className
      )}
    >
      <input type="checkbox" name={name} {...props} />
      <label>{children}</label>
    </div>
  );
};
