import items from "./items";
import "./style.scss";
import React from "react";
import "./responsive.css";
import BackgroundWithSlogan from "@/app/components/BackgroundWithSlogan";
import CardDescription from "@/app/components/CardDescription";
import DescriptionSection from "@/app/organisms/DescriptionSection";
import clsx from "clsx";
import { Metadata } from "next";

interface IProps {}

export const metadata: Metadata = {
  title: "建築のポイント｜生産性を向上させる工場と倉庫建築のために",
  description:
    "工場・倉庫の建築において、事前の検討や確認が必要なポイントをご紹介いたします。運用開始後の改築が難しい点については、基本計画の段階から考慮する必要があります。お客様が理想とされる建物の建築のためにお役立てください。",
  keywords:
    "鳥取,システム建築,工場,倉庫,物流,店舗,施設,商業施設,飲食店,スーパーマーケット,ドラッグストア,ホームセンター,スポーツ施設,体育館,室内練習場,オープンファクトリー,建物,建築,建設,建てる,新築,増築,改築,土地探し,設計,施工,依頼先,アフターメンテナンス,メンテナンス,保守,保守管理,相談,問い合わせ,見積もり,費用,コスト,低価格,ポイント,要点,重要,大切,大事,注意,注意点",
  authors: { name: "株式会社 懸樋工務店" },
  openGraph: {
    title: "建築のポイント｜生産性を向上させる工場と倉庫建築のために",
    description:
      "工場・倉庫の建築において、事前の検討や確認が必要なポイントをご紹介いたします。運用開始後の改築が難しい点については、基本計画の段階から考慮する必要があります。お客様が理想とされる建物の建築のためにお役立てください。",
    images: {
      url: "/kakehi_system_construction_point.jpg",
    },
  },
  twitter: {
    title: "建築のポイント｜生産性を向上させる工場と倉庫建築のために",
    description:
      "工場・倉庫の建築において、事前の検討や確認が必要なポイントをご紹介いたします。運用開始後の改築が難しい点については、基本計画の段階から考慮する必要があります。お客様が理想とされる建物の建築のためにお役立てください。",
    images: {
      url: "/kakehi_system_construction_point.jpg",
    },
  },
};

const PointScreen: React.FC<IProps> = () => {
  const BANNER_CONTENT = (
    <h1
      style={{ textShadow: "5px 5px 10px rgba(0, 0, 0, 0.75);" }}
      className={clsx(
        "whitespace-pre text-center text-[24px] font-bold leading-[normal] ",
        "md:whitespace-nowrap md:text-[30px]",
        " xxl:text-[40px]"
      )}
    >{`工場・倉庫\n建築のポイント`}</h1>
  );

  return (
    <div className="point-screen mb-33.1/3 md:mb-[150px] xxl:mb-33.1/3">
      <div className="page-header">
        <BackgroundWithSlogan
          className="!hidden xxl:!block xxl:h-[543px]"
          src="/points/point-banner.jpg"
        >
          {BANNER_CONTENT}
        </BackgroundWithSlogan>

        <div className="!block md:!hidden">
          <BackgroundWithSlogan src="/points/point-banner-sp.jpg" bgTrueSize>
            {BANNER_CONTENT}
          </BackgroundWithSlogan>
        </div>

        <div className="!hidden md:!block xxl:!hidden">
          <BackgroundWithSlogan
            src="/points/point-banner-tablet.jpg"
            bgTrueSize
          >
            {BANNER_CONTENT}
          </BackgroundWithSlogan>
        </div>

        <div className="xxl:auto mx-7 mt-25 md:mx-auto md:max-w-[700px] xxl:mt-16.2/3 xxl:max-w-[1000px]">
          <p className="text-lg font-[500] leading-lg md:text-[21px] xxl:text-1.5xl">
            用途に応じた高い専門性が求められる工場・倉庫の建築では、多くの考慮すべきポイントがあります。運用開始後の改築が難しい点については、基本計画の段階から考慮する必要があります。事前の検討や確認が必要な4つのポイントを紹介いたしますので、お役立てください。
          </p>
        </div>

        <div
          className={clsx(
            "card-list mx-7 mt-25 pb-[64px] ",
            "md:mx-0 md:mt-[50px] md:pb-[100px]",
            "md:max-w-[1000px] xxl:mx-auto xxl:mt-16.2/3 xxl:pb-33"
          )}
        >
          <ul
            className={clsx(
              "point-lists grid grid-cols-1 gap-3 pb-25 ",
              "md:mx-[20.023980815%] md:gap-[15px]",
              "xxl:mx-0 xxl:grid-cols-2 xxl:gap-7 xxl:gap-x-14"
            )}
          >
            {items.map((item) => (
              <li key={item.firstTitle}>
                <CardDescription
                  size="small"
                  descriptionAlign="left"
                  background="card-primary"
                  description={item.secondTitle}
                  label={item.label}
                  labelClassName="!text-[15px] xxl:!text-[21px] md:!text-[18px] md:!leading-[32px]"
                  descriptionClassName="xxl:!text-[24px] font-[500] md:font-bold !leading-[36px] md:!text-[20px] md:!leading-[32px] xxl:!leading-[36px] md:!justify-center"
                />
              </li>
            ))}
          </ul>

          <div className="divider mx-auto hidden h-[2px] w-[71.942446043%] md:block xxl:hidden"></div>
        </div>
      </div>

      <div className="list-points xxl:mt-15">
        <ul className="grid grid-cols-1  gap-[65px] md:gap-33.1/3">
          {items.map((item) => (
            <li key={item.firstTitle}>
              <DescriptionSection
                type="single-image"
                secondTitle={item.secondTitle}
                subtitle={item.label}
                titlePosition={item.position}
                firstTitle={item.firstTitle}
                img={item.img}
                imgSp={item.imgSp}
                items={item.descriptions}
                imgTablet={item.imgTablet}
                imageTrueSize
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PointScreen;
