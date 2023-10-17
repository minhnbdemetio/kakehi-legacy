"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";

interface Props extends PropsWithChildren {
  summary: string;
  type?: "section" | "question";
}

export const Accordion: FC<Props> = ({
  children,
  summary,
  type = "section",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contentEl = contentRef.current;

    if (isOpen && contentEl) {
      contentEl.style.maxHeight = contentEl.scrollHeight + "px";
    } else if (contentEl) {
      contentEl.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div>
      <button
        className={clsx(
          "flex w-full items-center justify-between py-9 text-left font-bold",
          {
            // Section
            [clsx(
              "leading-8 text-1.5xl",
              "bg-card-background-primary pl-14 pr-7",
              "xl:pl-33 xl:pr-16.2/3"
            )]: type === "section",

            // Question
            [clsx(
              "leading-8 text-xl",
              "px-7 transition-colors duration-300 xl:px-18",
              {
                "bg-white": !isOpen,
                "bg-hover-primary/40": isOpen,
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

        <div className={clsx({ "p-5": type === "section" })}>
          <img
            src="/icons/chevron-icon.png"
            alt=""
            width={20}
            height={12}
            className={clsx({
              "rotate-180 transform": !isOpen,
            })}
          />
        </div>
      </button>

      <div
        className={clsx("overflow-hidden transition-all duration-300", {
          "max-h-0": !isOpen,
          "max-h-[200vh]": isOpen,
          "bg-card-background-primary": type === "section",
          "bg-white": type === "question",
        })}
      >
        <div
          className={clsx("leading-8 space-y-7 text-xl font-bold", {
            "px-8 pb-24 xl:px-17": type === "section",
            "accordion__answer px-7 pb-13 pt-9 xl:px-18": type === "question",
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
