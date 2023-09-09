import clsx from "clsx";
import React, { FC, InputHTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>;

export const Checkbox: FC<Props & { error?: string }> = ({
  name,
  children,
  className,
  error,
  ...props
}) => {
  return (
    <div>
      <div
        className={clsx(
          "flex items-center flex-col text-xl ",
          className
        )}
      >
        <div className="flex  gap-5 leading-loose ">
          <input type="checkbox" name={name} {...props} />
          <label>{children}</label>
        </div>
        {error && <p className=" text-lg  text-red-700">{error}</p>}

      </div>
    </div>
  );
};
