"use client";

import React, { useCallback, useEffect, useState } from "react";
import "./style.scss";
import "./responsive.css";
import { Routes } from "@/app/constants/routes";
import clsx from "clsx";
interface IProps {}

const FloatingButtons: React.FC<IProps> = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const onScroll = (ev: any) => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 350) {
          setVisible(true);
        } else if (scrolled <= 350) {
          setVisible(false);
        }
      };

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }
  });

  return (
    <div className="floating-buttons-box z-30 xxl:w-fit">
      <div className="xxl:relative xxl:flex xxl:w-fit xxl:flex-col-reverse xxl:items-end">
        <button
          onClick={scrollToTop}
          className={clsx({
            ["scroll-to-top-buttons sticky xxl:mt-10"]: true,
            visible: visible,
          })}
        >
          <img
            src="/icons/chevron-circle-icon.png"
            alt="Chevron up circle icon"
          />
        </button>
        <div className="floating-buttons grid w-full grid-cols-2 ">
          <a
            className={clsx(
              "email-button flex w-full flex-col items-center justify-around pb-[5px] pt-[11px] ",
              "md:flex-row md:justify-center md:gap-[30px]",
              "xxl:mb-[20px] xxl:flex-col xxl:gap-[8px]"
            )}
            href={Routes.CONTACT}
          >
            <img
              src="/icons/email-icon.png "
              className="btn-icon inline"
              alt="Email icon"
            />
            <p className="font-noto-sans text-secondary md:text-[15px]">
              お問い合わせ
            </p>
          </a>
          <a
            className={clsx(
              "document-button flex w-full flex-col items-center justify-around pb-[5px] pt-[8px]",
              "md:flex-row md:justify-center md:gap-[30px]",
              "xxl:flex-col xxl:gap-[8px]"
            )}
            href={Routes.REQUEST}
          >
            <img
              src="/icons/document-icon.png"
              className="btn-icon inline"
              alt="Document icon"
            />
            <p className="font-noto-sans text-secondary md:text-[15px]">
              資料請求
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingButtons;
