import { Routes } from "@/app/constants/routes";
import BackgroundSection from "../BackgroundSection";
import { Button } from "../Button";
import "./style.scss";
import "./responsive.css";
import React from "react";
import Link from "next/link";
import clsx from "clsx";

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
            tabletSrc="/kakehi_contact_tablet.jpg"
            height={500}
          >
            <div className="z-2 px-7 pt-33 md:px-[11.6306%] md:pt-[100px] xxl:pt-[121px]">
              <p
                className={clsx(
                  "greeting whitespace-pre-wrap text-[15px] font-medium leading-lg ",
                  "md:w-full md:text-center md:text-[20px] md:leading-[36px]",
                  " xxl:text-center xxl:text-[21px] xxl:font-normal"
                )}
              >
                工場・倉庫建設に関するあらゆるお悩みに対応いたします。
                <br className="hidden md:block" />
                資料請求・お見積りはフォームより、お気軽にお問い合わせください。
              </p>
            </div>

            <div className="mt-25 flex justify-center md:mt-[50px] xxl:mt-[86px]">
              <Button
                href={Routes.CONTACT}
                className="font-noto-sans-jp text-1.5xl font-medium md:text-[22px] xxl:text-2xl"
              >
                <span className="font-noto-sans-jp">お問い合わせ</span>
              </Button>
            </div>
          </BackgroundSection>
        </div>
      )}
      <div className="footer flex flex-col items-center pb-[43px] md:pb-[20px] xxl:pb-[25px]">
        <div className="mt-[43px] md:mt-[41px] xxl:mt-[50px]">
          <img
            className="footer-logo "
            src="/kakehi_logo_white_rectangle.png"
            alt="Kakehi footer logo"
          />
        </div>
        <p
          className={clsx(
            "mt-[9.99px] text-center  text-md",
            "md:mt-[30px] md:text-[13px] md:leading-[19px] xxl:leading-[22px]",
            " xxl:mt-[33.16px] xxl:text-[15px]"
          )}
        >
          〒680-1417 鳥取県鳥取市桂見573番地
        </p>
        <div className="font-base mt-[5px] flex text-center font-noto-sans text-md text-white !no-underline md:mt-[6px] md:text-[13px] md:leading-[18px] xxl:text-[15px] xxl:leading-[20px]">
          <div>TEL </div> &nbsp;<div>0857-28-</div>
          <div>4788</div>
        </div>

        <div className="footer-link mt-[25px] md:mt-[20px] md:h-[19px] md:leading-[19px]  xxl:mt-[31px] xxl:h-[22px] xxl:leading-[22px]">
          <a
            className="text-md  md:text-[13px]  xxl:text-[15px]"
            href={Routes.PROFILE}
          >
            <span className="md:px-[25px] xxl:px-[22px]">会社概要</span>
          </a>
          <a
            className="text-md  md:text-[13px]  xxl:text-[15px]"
            href={Routes.PRIVACY_POLICY}
          >
            <span className="md:px-[25px] xxl:px-[22px]">個人情報保護方針</span>
          </a>
          <a
            className="text-md md:text-[13px]   xxl:text-[15px]"
            href={Routes.TERMS_OF_SERVICE}
          >
            <span className="md:px-[25px] xxl:px-[22px]">利用規約</span>
          </a>
        </div>

        <p className="mt-[15px] text-center font-noto-sans text-sm md:mt-[20px] md:text-[13px] md:leading-[18px] xxl:mt-[33px] xxl:text-[15px] xxl:leading-[20px]">
          Copyright © Kakehi Builder. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
