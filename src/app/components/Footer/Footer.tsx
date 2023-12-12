import { Routes } from "@/app/constants/routes";
import BackgroundSection from "../BackgroundSection";
import { Button } from "../Button";
import "./style.scss";
import "./responsive.css";
import React from "react";
import Link from "next/link";

interface IProps {
  showPreFooter?: boolean;
}

const Footer: React.FC<IProps> = ({ showPreFooter = true }) => {
  return (
    <div className="footer-container">
      {showPreFooter && (
        <div className="pre-footer">
          <BackgroundSection
            className="footer-background"
            src="/footer.jpg"
            mobileSrc="/kakehi_contact_sp.png"
            height={500}
          >
            <div className="z-2 px-7 pt-33 xl:pt-[121px]">
              <p className="greeting whitespace-pre-wrap text-[15px] font-medium leading-lg md:w-full md:text-center xl:text-center xl:text-[21px] xl:font-normal">
                工場・倉庫建設に関するあらゆるお悩みに対応いたします。
                <br className="hidden xl:block" />
                資料請求・お見積りはフォームより、お気軽にお問い合わせください。
              </p>
            </div>

            <div className="mt-25 flex justify-center xl:mt-[86px]">
              <Button
                href={Routes.CONTACT}
                className="font-noto-sans-jp text-1.5xl font-medium xl:text-2xl"
              >
                <span className="font-noto-sans-jp">お問い合わせ</span>
              </Button>
            </div>
          </BackgroundSection>
        </div>
      )}
      <div className="footer flex flex-col items-center pb-[43px] xl:pb-[25px]">
        <div className="mt-[43px] xl:mt-[50px]">
          <img
            className="footer-logo "
            src="/kakehi_logo_white_rectangle.png"
            alt="Kakehi footer logo"
          />
        </div>
        <p className="mt-[9.99px] text-center  text-md xl:mt-[33.16px] xl:text-[15px]">
          〒680-1417 鳥取県鳥取市桂見573番地
        </p>
        <div className="font-base mt-[5px] flex text-center font-noto-sans text-md text-white !no-underline xl:text-[15px]">
          <div>TEL </div> &nbsp;<div>0857-28-</div>
          <div>4788</div>
        </div>

        <div className="footer-link mt-[25px]  xl:mt-[31px]">
          <a href={Routes.PROFILE}>
            <span className="text-md xl:px-[22px] xl:text-[15px]">
              会社概要
            </span>
          </a>
          <a href={Routes.PRIVACY_POLICY}>
            <span className="text-md xl:px-[22px] xl:text-[15px]">
              個人情報保護方針
            </span>
          </a>
          <a href={Routes.TERMS_OF_SERVICE}>
            <span className="text-md xl:px-[22px] xl:text-[15px]">
              利用規約
            </span>
          </a>
        </div>

        <p className="mt-[15px] text-center font-noto-sans text-sm xl:mt-[33px] xl:text-[15px]">
          Copyright © Kakehi Builder. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
