"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";

interface Props extends PropsWithChildren {
  summary: string;
  type?: "section" | "question";
  open: boolean;
  toggle: () => void;
}

export const Accordion: FC<Props> = ({
  children,
  summary,
  type = "section",
  open,
  toggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contentEl = contentRef.current;

    if (open && contentEl) {
      contentEl.style.maxHeight = contentEl.scrollHeight + "px";
    } else if (contentEl) {
      contentEl.style.maxHeight = "0px";
    }
  }, [open]);

  return (
    <div>
      <button
        className={clsx(
          "flex w-full items-center justify-between gap-5 py-8 text-left md:gap-10 xxl:gap-8",
          {
            // Section
            [clsx(
              "bg-card-background-primary pl-14 pr-7 text-[15px] font-bold leading-[22px]",
              "md:px-23 md:py-10 md:text-xl md:leading-xl",
              "xxl:pl-33 xxl:pr-16.2/3 xxl:text-1.5xl"
            )]: type === "section",

            // Question
            [clsx(
              "leading-8 px-7 text-md font-medium transition-colors duration-300",
              "md:pl-15 md:pr-17 md:text-md2",
              "xxl:px-18 xxl:text-xl xxl:font-bold",
              {
                "bg-white": !open,
                "bg-hover-primary/40": open,
              }
            )]: type === "question",
          }
        )}
        onClick={toggle}
      >
        <span
          className={clsx({
            accordion__question: type === "question",
          })}
        >
          {summary}
        </span>

        <picture className="shrink-0 xxl:p-4">
          <img
            src="/icons/chevron-icon.png"
            alt=""
            width={15}
            height={8}
            className={clsx({
              "rotate-180 transform": !open,
              "w-7 xxl:w-8": type === "section",
              "w-5 xxl:w-7": type === "question",
            })}
          />
        </picture>
      </button>

      <div
        className={clsx("overflow-hidden transition-all duration-300", {
          "max-h-0": !open,
          "max-h-[200vh]": open,
          "bg-card-background-primary": type === "section",
          "bg-white": type === "question",
        })}
      >
        <div
          className={clsx(
            "space-y-7 text-md font-[400] leading-[24px]",
            "md:text-md2 md:leading-sm",
            "xxl:text-xl xxl:font-bold xxl:leading-xl",
            {
              "px-8 pb-[50px] xxl:px-17 xxl:pb-24": type === "section",
              "accordion__answer px-7 py-7 md:py-8 md:pl-15 md:pr-17 xxl:px-18 xxl:pb-12 xxl:pt-9":
                type === "question",
            }
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
