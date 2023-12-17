"use client";

import React, { useCallback } from "react";
import menuItems from "../../configs/menuItems";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import MenuIcon from "../svg/MenuIcon";
import { usePathname } from "next/navigation";
import { Routes } from "@/app/constants/routes";
import useHash from "@/app/hooks/useHash";

interface IProps {}

const Header: React.FC<IProps> = () => {
  const pathname = usePathname();
  const currentHash = useHash();

  const openMobileSidebar = useCallback((e: React.MouseEvent) => {
    const targetId = e.currentTarget.getAttribute("data-target");
    if (targetId) {
      const element = document.querySelector(targetId);
      if (element) {
        element.classList.add("show");
      }
    }
  }, []);

  return (
    <>
      <div
        className={clsx(
          "fixed top-0 z-[1000] flex w-full flex-row items-center justify-between gap-[50px] bg-white p-[10px] shadow-sm ",
          "md:px-[30px] md:py-[16px]",
          "xxl:justify-start xxl:gap-[30px] xxl:px-[50px] xxl:py-[20px]"
        )}
      >
        <Link href={Routes.TOP}>
          <div className=" relative h-[29.369px] w-[150px] min-w-[150px] md:h-[30px] md:w-[164px]  xxl:h-[34.264px]  xxl:w-[175px] xxl:min-w-[164px] xxl:min-w-[175px]">
            <Image src="/logo.png" alt="logo" layout="fill" objectFit="cover" />
          </div>
        </Link>
        <div className="hidden w-full justify-end text-primary xxl:flex">
          {menuItems.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === menuItems.length - 1;
            const hasBorderRight = !isFirst && !isLast;
            const hasBorderLeft = isFirst;
            const isActive =
              item.link === pathname || item.link === `/${currentHash}`;

            return (
              <div
                className={clsx(
                  "text-center",
                  hasBorderRight &&
                    "border-r border-black xxl:px-[15px] xxl:px-[37px]",
                  hasBorderLeft &&
                    "border-r border-black xxl:pr-[15px] xxl:pr-[37px]",
                  isLast && "xxl:pl-[15px] xxl:pl-[37px]",
                  isActive && "text-hover-nav"
                )}
                key={index}
              >
                <a href={item.link} className="hover:text-hover-nav">
                  <span className="xxl:text-lg xxl:font-medium">
                    {item.label}
                  </span>
                </a>
              </div>
            );
          })}
        </div>
        <button
          className="menu-btn xxl:hidden"
          onClick={openMobileSidebar}
          data-target="#main-mobile-sidebar"
          type="button"
        >
          <MenuIcon />
        </button>
      </div>
    </>
  );
};

export default Header;
