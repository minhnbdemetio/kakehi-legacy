import React from "react";

import "./style.scss";
import items from "./items";
import BackgroundWithSlogan from "@/app/components/BackgroundWithSlogan";
import CardDescription from "@/app/components/CardDescription";
import clsx from "clsx";
import { Metadata } from "next";

interface IProps {}

export const metadata: Metadata = {
  title: "懸樋工務店とは｜1954年から鳥取を彩り続ける建築のパイオニア",
  description:
    "70年以上の歴史を持つ懸樋工務店では、設計から施工までの一貫したサービスを提供しています。住宅・ビル・工場・商業施設など、あらゆる建物の建設で培われた豊富な経験と実績を基に、お客様に安心と信頼をお届けいたします。",
  keywords:
    "鳥取,システム建築,オフィス,商業施設,ビル,建物,建築,建設,建てる,新築,増築,改築,土地探し,設計,施工,土木,工事,土木工事,依頼先,アフターメンテナンス,メンテナンス,保守,保守管理,相談,問い合わせ,大手,老舗",
  authors: { name: "株式会社 懸樋工務店" },
  openGraph: {
    title: "懸樋工務店とは｜1954年から鳥取を彩り続ける建築のパイオニア",
    description:
      "70年以上の歴史を持つ懸樋工務店では、設計から施工までの一貫したサービスを提供しています。住宅・ビル・工場・商業施設など、あらゆる建物の建設で培われた豊富な経験と実績を基に、お客様に安心と信頼をお届けいたします。",
    images: {
      url: "/kakehi_construction.jpg",
    },
  },
  twitter: {
    title: "懸樋工務店とは｜1954年から鳥取を彩り続ける建築のパイオニア",
    description:
      "70年以上の歴史を持つ懸樋工務店では、設計から施工までの一貫したサービスを提供しています。住宅・ビル・工場・商業施設など、あらゆる建物の建設で培われた豊富な経験と実績を基に、お客様に安心と信頼をお届けいたします。",
    images: {
      url: "/kakehi_construction.jpg",
    },
  },
};

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
                  "!leading-[24px] !font-medium",
                  "md:!text-md2 md:!px-10 md:!py-7 md:!leading-lg md:!font-normal",
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
                    "!px-9 !leading-[24px] !font-medium",
                    "md:!text-md2 md:!px-10 md:!py-7 md:!leading-lg md:!font-normal",
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
