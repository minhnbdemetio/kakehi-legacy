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
          "leading-normal whitespace-nowrap border-black pr-10 text-left font-noto-sans-jp text-[15px] font-bold  xxl:table-cell xxl:w-[277px] xxl:whitespace-pre xxl:border-b xxl:text-1.5xl",
          {
            "align-middle": !multiline,
            "align-top": multiline,
          }
        )}
        dangerouslySetInnerHTML={{ __html: label }}
      />

      <div
        className={clsx(
          "leading-normal whitespace-pre-wrap break-all border-b border-black pb-[10px] pt-[10px] text-left font-noto-sans-jp text-[20px] font-medium xxl:table-cell xxl:pt-0 xxl:text-1.5xl"
        )}
      >
        {content}
      </div>
    </div>
  );
};
