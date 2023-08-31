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
    <div className={clsx("block xl:table-row", className)}>
      <div
        className={clsx(
          "xl:table-cell xl:w-[277px] xl:border-b border-black text-left font-noto-sans text-lg leading-normal font-bold pr-10 xl:text-1.5xl",
          {
            "align-middle": !multiline,
            "align-top": multiline,
          }
        )}
        dangerouslySetInnerHTML={{ __html: label }}
      />

      <div
        className={clsx(
          "xl:table-cell xl:pt-0 border-b border-black font-noto-sans text-left text-1.5xl leading-normal font-medium pt-5 pb-3"
        )}
      >
        {content}
      </div>
    </div>
  );
};
