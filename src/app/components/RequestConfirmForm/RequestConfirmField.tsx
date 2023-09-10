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
  console.debug(content)
  return (
    <div className={clsx("block xl:table-row", className)}>
      <div
        className={clsx(
          "border-black pr-10 text-left font-noto-sans text-lg font-bold leading-normal xl:table-cell xl:w-[277px] xl:border-b xl:text-1.5xl",
          {
            "align-middle": !multiline,
            "align-top": multiline,
          }
        )}
        dangerouslySetInnerHTML={{ __html: label }}
      />

      <div
        className={clsx(
          "break-all border-b border-black pb-3 pt-5 text-left font-noto-sans text-1.5xl font-medium leading-normal xl:table-cell xl:pt-0 whitespace-pre-wrap"
        )}
      >
        {content}
      </div>
    </div>
  );
};
