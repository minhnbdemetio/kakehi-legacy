import React from "react";
import "./style.scss";
import BackgroundSection from "@/app/components/BackgroundSectionCopy";
import ListFeatures from "../ListFeatures";
import "./responsive.css";

interface IProps {}

const TopPageInformation: React.FC<IProps> = () => {
  return (
    <BackgroundSection
      className="toppage-information-background"
      height={1662}
      src="/steel-self-background.jpg"
    >
      <div className="toppage-information-container">
        <div className="flex flex-col  items-center justify-center" id="About">
          <div className="mb-[5px] w-max border-b-2 border-color-custom px-[22px] pb-[3px] text-center font-noto-sans text-xl uppercase text-primary xl:px-0">
            ABOUT
          </div>

          <div className="mb-[90px] px-[22px] font-noto-sans-jp text-2xl font-bold xl:mb-[40px] xl:px-0 xl:text-3xl">
            システム建築とは
          </div>

          <div className="mb-[100px] px-[22px] font-noto-sans-jp text-[21px] font-[300] leading-lg xl:mb-[45px] xl:w-[800px] xl:px-0">
            システム建築は、規格化された部材と工法を用いた建築手法です。在来工法に比べて、設計と工事の期間が短く、コストも抑制できます。規模に応じた部材の寸法、形状などの規格化により、品質の安定性も確保されており、高い信頼性を誇ります。
          </div>
        </div>

        <ListFeatures />
      </div>
    </BackgroundSection>
  );
};

export default TopPageInformation;
