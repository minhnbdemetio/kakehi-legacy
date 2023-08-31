import BackgroundWithSlogan from "../components/BackgroundWithSlogan";
import CardDescription from "../components/CardDescription";
import DescriptionSection from "../organisms/DescriptionSection";
import items from "./items";
import "./style.scss";
import React from "react";

interface IProps {}

const PointScreen: React.FC<IProps> = () => {
  return (
    <div className="point-screen">
      <div className="page-header ">
        <BackgroundWithSlogan src="/points/point-1.jpg">
          <h1 className="text-3xl whitespace-pre text-center font-bold">{`工場・倉庫\n建築のポイント`}</h1>
        </BackgroundWithSlogan>

        <div className="mx-7 xl:mx-pc-container mt-33 xl:mt-16.2/3">
          <p className="text-xl ">
            通常の建物とは異なる工場・倉庫の建設では、たくさんの考慮すべきポイントがあります。使い勝手やメンテナンス性など、後から容易に変更ができない点は、計画段階から考慮しておく必要があります。また、取り扱う商材によって考慮すべき点が異なります。
          </p>
        </div>
        <div className="mt-33 mx-7 xl:mx-pc-container list-points pb-33 xl:mt-16.2/3">
          <ul className=" grid grid-cols-1 gap-3 xl:grid-cols-2 xl:gap-7 xl:gap-x-14">
            {items.map((item) => (
              <li key={item.firstTitle}>
                <CardDescription
                  size="small"
                  descriptionAlign="center"
                  descriptionBold
                  background="card-primary"
                  description={item.secondTitle}
                  label={item.label}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-18">
        <ul>
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
