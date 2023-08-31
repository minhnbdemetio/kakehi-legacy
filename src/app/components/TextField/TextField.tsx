import clsx from "clsx";
import React, { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputType = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

interface Props extends InputType {
  label?: string;
  name?: string;
  rows?: number;
  className?: string;
  wrapperClassName?: string;
}

export const TextField: FC<Props> = ({
  label,
  name,
  className,
  wrapperClassName,
  ...props
}) => {
  const InputElement = props.rows ? "textarea" : "input";

  return (
    <div className={clsx("block xl:table-row", wrapperClassName)}>
      {label ? (
        <label
          className={clsx(
            "table-cell box-content text-left font-noto-sans text-lg leading-normal font-bold pr-10 xl:text-1.5xl xl:w-[168px]",
            {
              "align-middle": !props.rows,
              "align-top xl:pt-10": props.rows,
            }
          )}
          htmlFor={name}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      ) : null}

      <InputElement
        className={clsx(
          "table-cell w-full min-h-[100px] font-noto-sans text-1.5xl leading-normal font-medium py-3 px-7",
          className
        )}
        name={name}
        id={name}
        {...props}
      />
    </div>
  );
};
