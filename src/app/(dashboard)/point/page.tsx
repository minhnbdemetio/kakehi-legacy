import items from "./items";
import "./style.scss";
import React from "react";
import "./responsive.css";
import BackgroundWithSlogan from "@/app/components/BackgroundWithSlogan";
import CardDescription from "@/app/components/CardDescription";
import DescriptionSection from "@/app/organisms/DescriptionSection";
import clsx from "clsx";

interface IProps {}

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

        <div className="mx-7 mt-25 md:mx-auto md:max-w-[700px] xxl:mx-pc-container xxl:mt-16.2/3 xxl:max-w-[1000px]">
          <p className="text-lg font-[500] leading-lg md:text-[21px] xxl:text-1.5xl">
            用途に応じた高い専門性が求められる工場・倉庫の建築では、多くの考慮すべきポイントがあります。運用開始後の改築が難しい点については、基本計画の段階から考慮する必要があります。事前の検討や確認が必要な4つのポイントを紹介いたしますので、お役立てください。
          </p>
        </div>

        <div
          className={clsx(
            "card-list mx-7 mt-25 pb-[64px] ",
            "md:mx-0 md:mt-[50px] md:pb-[100px]",
            "xxl:mx-pc-container xxl:mt-16.2/3 xxl:pb-33"
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

          <div className="divider mx-auto h-[2px] w-[71.942446043%] md:block xxl:hidden"></div>
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
