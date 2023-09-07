"use client";

import React, { useState } from "react";

import "./responsive.css";
import "./style.scss";
import { Routes } from "@/app/constants/routes";
interface IProps { }

const FloatingButtons: React.FC<IProps> = () => {
  const [open, setOpen] = useState(true);

  const boxClass = "floating-buttons-box z-30 xl:w-fit " + (open ? "show" : "");

  return (
    <div className={boxClass}>
      <div className="xl:relative xl:flex xl:w-fit xl:flex-col-reverse xl:items-end">
        <button
          onClick={() => setOpen((o) => !o)}
          className="collapse-floating-buttons xl:mt-10"
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
