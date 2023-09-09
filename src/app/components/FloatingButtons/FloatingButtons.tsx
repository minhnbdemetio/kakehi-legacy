"use client";

import React, { useCallback, useEffect, useState } from "react";

import "./responsive.css";
import "./style.scss";
import { Routes } from "@/app/constants/routes";
import clsx from "clsx";
interface IProps { }

const FloatingButtons: React.FC<IProps> = () => {

  const [visible, setVisible] = useState(false)


  const scrollToTop = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {

      const onScroll = (ev: any) => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 350) {
          setVisible(true)
        }
        else if (scrolled <= 350) {
          setVisible(false)
        }
      }

      window.addEventListener('scroll', onScroll)


      return () => window.removeEventListener('scroll', onScroll)
    }
  })

  return (
    <div className="floating-buttons-box z-30 xl:w-fit">
      <div className="xl:relative xl:flex xl:w-fit xl:flex-col-reverse xl:items-end">
        <button
          onClick={scrollToTop}
          className={clsx({ ["scroll-to-top-buttons xl:mt-10 sticky"]: true, visible: visible })}
        >
          <img
            src="/icons/chevron-circle-icon.png"
            alt="Chevron up circle icon"
          />
        </button>
        <div className="floating-buttons grid w-full grid-cols-2">
          <a className="email-button flex w-full flex-col items-center justify-around xl:mb-12">
            <img
              src="/icons/email-icon.png "
              className="btn-icon inline"
              alt="Email icon"
            />
            <p className="text-secondary">お問い合わせ</p>
          </a>
          <a
            className="document-button flex w-full flex-col items-center justify-around"
            href={Routes.REQUEST}
          >
            <img
              src="/icons/document-icon.png"
              className="btn-icon inline"
              alt="Document icon"
            />
            <p className="text-secondary">資料請求</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingButtons;
