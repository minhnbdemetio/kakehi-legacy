"use client";

import React, { useCallback, useMemo } from "react";
import "./styles.scss";

import menuItems from "../../configs/menuItems";
import Link from "next/link";

interface IProps {}

const MobileSidebar: React.FC<IProps> = () => {
  const closeSidebar = useCallback((e: React.MouseEvent) => {
    const targetId = e.currentTarget.getAttribute("data-close");

    if (targetId) {
      const element = document.querySelector(targetId);

      if (element) {
        setTimeout(() => element.classList.remove("show"), 100);
      }
    }
  }, []);

  const renderMenuItems = useMemo(() => {
    return menuItems.map((item) => {
      return (
        <li
          key={item.label}
          onClick={closeSidebar}
          data-close={"#main-mobile-sidebar"}
          className="btn-primary btn rounded"
        >
          <Link href={item.link}>
            <p className="text-lg">{item.label}</p>
          </Link>
        </li>
      );
    });
  }, [closeSidebar]);

  return (
    <div
      id="main-mobile-sidebar"
      className="bg-primary right-sidebar fixed right-0 top-0 z-50 h-full w-full p-5"
    >
      <div className="mb-5 flex justify-end">
        <button
          data-close="#main-mobile-sidebar"
          onClick={closeSidebar}
          className="btn btn-icon p-0"
        >
          <img alt="close menu sidebar" src="/icons/close-icon.png" />
        </button>
      </div>

      <ul className="grid grid-cols-1 gap-3">{renderMenuItems}</ul>
    </div>
  );
};

export default MobileSidebar;
