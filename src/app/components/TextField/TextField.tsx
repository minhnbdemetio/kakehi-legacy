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
  error?: string;
}

export const TextField: FC<Props> = ({
  label,
  name,
  className,
  wrapperClassName,
  error,
  ...props
}) => {
  const InputElement = props.rows ? "textarea" : "input";

  return (
    <>
      <div className={clsx("block xl:table-row", wrapperClassName)}>
        {label ? (
          <label
            className={clsx(
              "leading-normal box-content table-cell whitespace-pre pr-10 text-left font-noto-sans text-lg font-bold xl:w-[168px] xl:text-1.5xl",
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
            "leading-normal table-cell min-h-[100px] w-full px-7 py-3 font-noto-sans text-1.5xl font-medium",
            {
              "border-2 border-red-700": error,
            },
            className
          )}
          name={name}
          id={name}
          {...props}
        />
        {error && <p className="mt-3 text-lg text-red-700">{error}</p>}
      </div>
    </>
  );
};
