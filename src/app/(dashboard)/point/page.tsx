import items from "./items";
import "./style.scss";
import React from "react";
import "./responsive.css";
import BackgroundWithSlogan from "@/app/components/BackgroundWithSlogan";
import CardDescription from "@/app/components/CardDescription";
import DescriptionSection from "@/app/organisms/DescriptionSection";

interface IProps {}

const PointScreen: React.FC<IProps> = () => {
  return (
    <div className="point-screen xl:mb-33.1/3">
      <div className="page-header">
        <BackgroundWithSlogan
          className="xl:h-[543px]"
          src="/points/point-banner.jpg"
        >
          <h1 className="whitespace-pre text-center text-[40px] font-bold leading-[normal] xl:whitespace-nowrap">{`工場・倉庫\n建築のポイント`}</h1>
        </BackgroundWithSlogan>

        <div className="mx-7 mt-33 xl:mx-pc-container xl:mt-16.2/3">
          <p className="text-1.5xl font-[400] leading-lg">
            用途に応じた高い専門性が求められる工場・倉庫の建築においては、多くの考慮すべきポイントが存在します。運用開始後の改築が難しい点については、基本計画の段階から考慮する必要があります。
          </p>
        </div>

        <div className="card-list mx-7 mt-33 pb-33 xl:mx-pc-container xl:mt-16.2/3">
          <ul className="point-lists grid grid-cols-1 gap-3 pb-25 xl:grid-cols-2 xl:gap-7 xl:gap-x-14">
            {items.map((item) => (
              <li key={item.firstTitle}>
                <CardDescription
                  size="small"
                  descriptionAlign="left"
                  background="card-primary"
                  description={item.secondTitle}
                  label={item.label}
                  labelClassName="!text-[21px] "
                  descriptionClassName="!text-[24px] font-bold"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="list-points mt-15">
        <ul className="grid grid-cols-1 gap-15 xl:gap-33.1/3">
          {items.map((item) => (
            <li key={item.firstTitle}>
              <DescriptionSection
                type="single-image"
                secondTitle={item.secondTitle}
                subtitle={item.label}
                titlePosition={item.position}
                firstTitle={item.firstTitle}
                img={item.img}
                items={item.descriptions}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PointScreen;
