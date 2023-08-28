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
          "flex items-center justify-between w-full py-9 font-bold",
          {
            // Section
            [clsx(
              "text-1.5xl leading-8",
              "bg-card-background-primary pl-14 pr-7",
              "desktop:pl-33 desktop:pr-16.2/3"
            )]: type === "section",

            // Question
            [clsx(
              "text-xl leading-8",
              "px-7 desktop:px-18 transition-colors duration-300",
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
          <Image
            src="/icons/chevron-icon.png"
            alt=""
            width={20}
            height={12}
            className={clsx({
              "transform rotate-180": isOpen,
            })}
          />
        </div>
      </button>

      <div
        className={clsx("transition-all duration-300 overflow-hidden", {
          "max-h-0": !isOpen,
          "max-h-[200vh]": isOpen,
          "bg-card-background-primary": type === "section",
          "bg-white": type === "question",
        })}
      >
        <div
          className={clsx("space-y-7 font-bold text-xl leading-8", {
            "px-8 pb-24 desktop:px-17": type === "section",
            "px-7 pt-9 pb-13 desktop:px-18 accordion__answer":
              type === "question",
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
