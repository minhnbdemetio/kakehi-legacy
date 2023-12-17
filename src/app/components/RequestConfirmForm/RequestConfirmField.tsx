import clsx from "clsx";
import React, { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  label: string;
  content?: string;
  multiline?: boolean;
  className?: string;
}

export const RequestConfirmField: FC<Props> = ({
  label,
  content = "",
  className,
  multiline,
}) => {
  return (
    <div className={clsx("block xxl:table-row", className)}>
      <div
        className={clsx(
          "leading-normal whitespace-nowrap border-black pr-10 text-left font-noto-sans-jp text-[15px] font-bold",
          "leading-md md:text-lg",
          "xxl:table-cell xxl:w-[277px] xxl:max-w-full xxl:whitespace-pre xxl:border-b xxl:text-1.5xl",
          {
            "align-middle": !multiline,
            "align-top": multiline,
          }
        )}
        dangerouslySetInnerHTML={{ __html: label }}
      />

      <div
        className={clsx(
          "leading-normal whitespace-pre-wrap break-all border-b border-black py-3 text-left font-noto-sans-jp text-1.5xl font-medium",
          "md:pb-2 md:pt-4 md:text-lg md:leading-xl",
          "xxl:table-cell xxl:pb-3 xxl:pt-0 xxl:text-1.5xl"
        )}
      >
        {content}
      </div>
    </div>
  );
};
