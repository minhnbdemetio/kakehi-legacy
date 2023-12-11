import React from "react";

import "./style.scss";
import items from "./items";
import BackgroundWithSlogan from "@/app/components/BackgroundWithSlogan";
import CardDescription from "@/app/components/CardDescription";
import clsx from "clsx";

interface IProps {}

const Profile: React.FC<IProps> = () => {
  return (
    <div className="profile pb-[100px] xl:pb-38.1/3">
      <div className="hidden xl:block">
        <BackgroundWithSlogan src="/company-profile-background.jpg">
          <h1
            style={{ textShadow: " 5px 5px 10px rgba(0, 0, 0, 0.75)" }}
            className="leading-snug text-3xl font-bold xl:text-3.5xl"
          >
            会社概要
          </h1>
        </BackgroundWithSlogan>
      </div>
      <div className="block xl:hidden">
        <BackgroundWithSlogan bgTrueSize src="/profile_background_sp.png">
          <h1
            style={{ textShadow: " 5px 5px 10px rgba(0, 0, 0, 0.75)" }}
            className="leading-snug !h-auto text-[24px] font-bold xl:text-3.5xl "
          >
            会社概要
          </h1>
        </BackgroundWithSlogan>
      </div>

      <ul className="mx-auto mt-[75px] box-content grid max-w-[994px] grid-cols-1 gap-[20px] px-7 xl:mt-33.1/3 xl:gap-7 xl:px-pc-container">
        {items.map((item, index) => (
          <li key={index}>
            <div className={clsx({ "hidden xl:block": !!item.mobileDesc })}>
              <CardDescription
                size="small"
                background="card-primary"
                label={item.label}
                description={item.description}
                link={item.link}
                descriptionClassName={`${
                  item.link ? "!leading-[36px]" : "!leading-[32px]"
                } !py-[9px] xl:!px-9 !font-[500] xl:!px-7 xl:!text-xl xl:!font-normal xl:!leading-[2] xl:!justify-start`}
                labelClassName="font-noto-sans-jp-gg !px-[12px]  !py-[20px] !leading-[120%] !text-[15px]  xl:!text-xl xl:!font-bold xl:!leading-[1.44]"
              />
            </div>
            {!!item.mobileDesc && (
              <div className={"block xl:hidden"}>
                <CardDescription
                  size="small"
                  background="card-primary"
                  label={item.label}
                  description={item.mobileDesc}
                  link={item.link}
                  descriptionClassName="!leading-[24px] !py-[9px] !px-9 xl:!px-7 xl:!text-xl xl:!font-normal xl:!leading-[2] xl:!justify-start"
                  labelClassName="font-noto-sans-jp-gg !px-[12px] !py-[20px] !leading-[120%] xl:!text-xl xl:!font-bold xl:!leading-[1.44]"
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
