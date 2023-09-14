"use client";

import React, { useCallback } from "react";
import menuItems from "../../configs/menuItems";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import MenuIcon from "../svg/MenuIcon";
import { usePathname } from "next/navigation";

interface IProps {}

const Header: React.FC<IProps> = () => {
  const pathname = usePathname();

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
      <div className="flex flex-row items-center justify-between gap-[50px] p-[10px] xl:justify-start xl:px-[50px] xl:py-[20px]">
        <div className="relative h-[29.369px] w-[150px] min-w-[150px] xl:h-[34.264px] xl:w-[175px] xl:min-w-[175px]">
          <Image src="/logo.png" alt="logo" layout="fill" objectFit="cover" />
        </div>
        <div className="hidden w-full justify-end text-primary xl:flex">
          {menuItems.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === menuItems.length - 1;
            const hasBorderRight = !isFirst && !isLast;
            const hasBorderLeft = isFirst;
            const isActive = item.link === pathname;

            return (
              <div
                className={clsx(
                  "text-center",
                  hasBorderRight && "border-r border-black px-[37px]",
                  hasBorderLeft && "border-r border-black pr-[37px]",
                  isLast && "pl-[37px]",
                  isActive && "text-hover-nav"
                )}
                key={index}
              >
                <Link href={item.link} className="hover:text-hover-nav">
                  <span className="font-medium">{item.label}</span>
                </Link>
              </div>
            );
          })}
        </div>
        <button
          className="menu-btn xl:hidden"
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
