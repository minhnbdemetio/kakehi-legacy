import React from "react";
import "./style.scss";
import BackgroundSection from "@/app/components/BackgroundSectionCopy";
import ListFeatures from "../ListFeatures";
import "./responsive.css";
import clsx from "clsx";
import { ScrollToHash } from "@/app/components/ScrollToHash";

interface IProps {}

const TopPageInformation: React.FC<IProps> = () => {
  const ABOUT = (
    <div className="flex flex-col  items-center justify-center">
      <div
        className={clsx(
          "mb-3 w-max border-b-2 border-color-custom pb-[3px] text-center font-noto-sans text-[13px]  uppercase text-primary",
          "md:mb-[7px] md:text-[15px]",
          "xxl:mb-2 xxl:text-xl"
        )}
      >
        ABOUT
      </div>

      <div
        className={clsx(
          "mb-20 px-[22px] text-[20px] font-bold",
          "md:mb-[50px] md:text-2xl",
          "xxl:mb-[40px] xxl:px-0 xxl:text-3xl"
        )}
      >
        システム建築とは
      </div>

      <div
        className={clsx(
          "mb-17 px-7 text-lg  font-[500] leading-lg",
          "md:mb-0 md:w-[700px] md:px-0 md:text-[20px]",
          "xxl:mb-11 xxl:w-[800px] xxl:px-0 xxl:text-1.5xl"
        )}
      >
        システム建築は、建物を構成する材料と建築生産プロセスの標準化により、効率性を実現した建築手法です。在来工法に比べて工期が短く、コストの抑制が可能です。
        <br />
        <br />
        高い汎用性を誇るシステム建築ですが、重要なのは「働く建物」としての価値です。懸樋工務店は、お客様が大切にされているものを尊重し、本当にお役立ていただける建物を提供いたします。
      </div>
    </div>
  );

  return (
    <div>
      <ScrollToHash hash="#About" />

      <div className="block xxl:hidden">
        {/* mobile and tablet */}
        <div className="toppage-information-container  pt-[80px] md:pt-[120px] xxl:pt-[101px]">
          {ABOUT}
          <BackgroundSection
            className="toppage-information-background"
            height={1454}
            src="/steel-self-background.jpg"
            mobileSrc="/top/about_background.jpg"
            tabletSrc="/top/about_background_tablet.jpg"
          >
            <ListFeatures />
          </BackgroundSection>
        </div>
      </div>
      <div className="hidden xxl:block">
        <BackgroundSection
          className="toppage-information-background"
          height={1662}
          src="/steel-self-background.jpg"
          mobileSrc="/top/about_background.jpg"
        >
          <div className="toppage-information-container pt-[80px] xxl:pt-[101px]">
            {ABOUT}
            <ListFeatures />
          </div>
        </BackgroundSection>
      </div>
    </div>
  );
};

export default TopPageInformation;
