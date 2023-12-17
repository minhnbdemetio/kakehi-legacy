import React from "react";

import "./style.scss";
import items from "./items";
import BackgroundWithSlogan from "@/app/components/BackgroundWithSlogan";
import CardDescription from "@/app/components/CardDescription";
import clsx from "clsx";

interface IProps {}

const Profile: React.FC<IProps> = () => {
  return (
    <div className="profile pb-[100px] md:pb-[150px] xxl:pb-38.1/3">
      <div className="hidden xxl:block">
        <BackgroundWithSlogan src="/company-profile-background.jpg">
          <h1
            style={{ textShadow: " 5px 5px 10px rgba(0, 0, 0, 0.75)" }}
            className="leading-snug text-3xl font-bold xxl:text-3.5xl"
          >
            会社概要
          </h1>
        </BackgroundWithSlogan>
      </div>

      <div className="relative xxl:hidden">
        <picture>
          <source
            srcSet="/kakehi_lp_overview_tablet.jpg"
            media="(min-width: 768px)"
          />
          <img
            src="/profile_background_sp.jpg"
            className="w-full object-contain"
            alt="banner"
          />
        </picture>
        <h1
          style={{ textShadow: " 5px 5px 10px rgba(0, 0, 0, 0.75)" }}
          className={clsx(
            "leading-snug !h-auto text-[24px] font-bold md:text-2.8xl xxl:text-3.5xl",
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          )}
        >
          会社概要
        </h1>
      </div>

      <ul
        className={clsx(
          "mx-auto mt-[75px] box-content grid grid-cols-1 gap-[20px] px-7",
          "md:max-w-[600px] md:gap-5",
          "xxl:mt-33.1/3 xxl:max-w-[994px] xxl:gap-7 xxl:px-pc-container"
        )}
      >
        {items.map((item, index) => (
          <li key={index}>
            <div className={clsx({ "hidden xxl:block": !!item.mobileDesc })}>
              <CardDescription
                size="small"
                background="card-primary"
                label={item.label}
                description={item.description}
                link={item.link}
                descriptionClassName={clsx(
                  "!leading-[24px] !font-[500]",
                  "md:!text-md2 md:!px-10 md:!py-7 md:!leading-lg",
                  "xxl:!px-9 xxl:!px-7 xxl:!text-xl xxl:!font-normal xxl:!leading-[2] xxl:!justify-start"
                )}
                labelClassName="font-noto-sans-jp-gg !px-[12px]  !py-[20px] !leading-[120%] !text-[15px]  xxl:!text-xl xxl:!font-bold xxl:!leading-[1.44]"
              />
            </div>
            {!!item.mobileDesc && (
              <div className={"block xxl:hidden"}>
                <CardDescription
                  size="small"
                  background="card-primary"
                  label={item.label}
                  description={item.mobileDesc}
                  link={item.link}
                  descriptionClassName={clsx(
                    "!px-9 !leading-[24px]",
                    "md:!text-md2 md:!px-10 md:!py-7 md:!leading-lg",
                    "xxl:!justify-start xxl:!px-7 xxl:!text-xl xxl:!font-normal xxl:!leading-[2]"
                  )}
                  labelClassName="font-noto-sans-jp-gg !px-[12px] !py-[20px] !leading-[120%] xxl:!text-xl xxl:!font-bold xxl:!leading-[1.44]"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
