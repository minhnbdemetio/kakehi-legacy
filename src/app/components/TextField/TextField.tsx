import clsx from "clsx";
import React, {
  InputHTMLAttributes,
  LegacyRef,
  TextareaHTMLAttributes,
  forwardRef,
} from "react";

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

export const TextField = forwardRef<
  HTMLTextAreaElement | HTMLInputElement,
  Props
>(({ wrapperClassName, label, className, error, name, ...props }, ref) => {
  return (
    <>
      <div className={clsx("block xxl:table-row", wrapperClassName)}>
        {label ? (
          <label
            className={clsx(
              "leading-normal box-content table-cell whitespace-nowrap pr-10 text-left font-noto-sans-jp text-[15px] font-bold",
              "md:text-[16px] md:leading-xl",
              "xxl:w-[168px] xxl:whitespace-pre xxl:text-1.5xl",
              {
                "align-middle": !props.rows,
                "align-top xxl:pt-10": props.rows,
              }
            )}
            htmlFor={name}
            dangerouslySetInnerHTML={{ __html: label }}
          />
        ) : null}
        {props.rows ? (
          <textarea
            ref={ref as LegacyRef<HTMLTextAreaElement>}
            className={clsx(
              "mt-[20px] table-cell min-h-[70px] w-full px-7 py-3 font-noto-sans text-1.5xl font-medium leading-xl",
              "md:mt-5 md:text-lg",
              "xxl:mt-0 xxl:min-h-[100px] xxl:text-1.5xl",
              {
                "border-2 border-red-700": error,
              },
              className
            )}
            name={name}
            id={name}
            {...props}
          />
        ) : (
          <input
            ref={ref as LegacyRef<HTMLInputElement>}
            className={clsx(
              "mt-[20px] table-cell min-h-[70px] w-full px-7 py-3 font-noto-sans text-1.5xl font-medium leading-xl",
              "md:mt-5 md:text-lg",
              "xxl:mt-0 xxl:min-h-[100px] xxl:text-1.5xl",
              {
                "border-2 border-red-700": error,
              },
              className
            )}
            name={name}
            id={name}
            {...props}
          ></input>
        )}

        {error && <p className="mt-3 text-lg text-red-700">{error}</p>}
      </div>
    </>
  );
});

TextField.displayName = "TextField";
