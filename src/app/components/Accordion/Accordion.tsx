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
          "flex w-full items-center justify-between gap-5 py-9 text-left ",
          {
            // Section
            [clsx(
              "leading-8 text-[15px] font-bold md:text-1.5xl",
              "bg-card-background-primary pl-14 pr-7",
              "xl:pl-33 xl:pr-16.2/3"
            )]: type === "section",

            // Question
            [clsx(
              "leading-8 text-md font-[500] xl:text-xl",
              "px-7 transition-colors duration-300 xl:px-18  xl:font-bold",
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

        <div
          className={clsx("w-full max-w-[15px]", { "p-5": type === "section" })}
        >
          <img
            src="/icons/chevron-icon.png"
            alt=""
            width={15}
            height={8}
            className={clsx({
              "rotate-180 transform": !open,
            })}
          />
        </div>
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
            "xl:leading-8 space-y-7 text-md font-[400] leading-[24px] xl:font-bold",
            {
              "px-8 pb-[50px] xl:px-17 xl:pb-24": type === "section",
              "accordion__answer px-7 pb-13 pt-9  xl:px-18":
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
