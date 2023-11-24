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

          <div className="mb-[90px] px-[22px]  text-2xl font-bold xl:mb-[40px] xl:px-0 xl:text-3xl">
            システム建築とは
          </div>

          <div className="mb-[100px] px-[22px]  text-[21px]  font-[400] leading-lg xl:mb-[45px] xl:w-[800px] xl:px-0">
            システム建築は、建物を構成する材料と建築生産プロセスの標準化により、効率性を実現した建築手法です。在来工法に比べて工期が短く、コストの抑制が可能です。
            <br />
            <br />
            高い汎用性を誇るシステム建築ですが、重要なのは「働く建物」としての価値です。懸樋工務店は、お客様が大切にされているものを尊重し、本当にお役立ていただける建物を提供いたします。
          </div>
        </div>

        <ListFeatures />
      </div>
    </BackgroundSection>
  );
};

export default TopPageInformation;
