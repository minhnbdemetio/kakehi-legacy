import React from "react";
import items from "./items";
import "./style.scss";
import DescriptionSection from "../DescriptionSection";

interface IProps {}

const AspectsOfCompany: React.FC<IProps> = () => {
  return (
    <ul className="aspects mt-5 grid grid-cols-1 xl:gap-10">
      {items.map((item) => (
        <li key={item.firstTitle}>
          <DescriptionSection
            type="single-image"
            img={item.img}
            items={item.items}
            subtitle={item.subtitle}
            firstTitle={item.firstTitle}
            secondTitle={item.secondTitle}
            titlePosition={item.titlePosition}
          />
        </li>
      ))}
    </ul>
  );
};

export default AspectsOfCompany;
