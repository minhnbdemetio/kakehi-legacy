import BackgroundSection from "../BackgroundSection";
import { Button } from "../Button";
import "./responsive.css";
import "./style.scss";
import React from "react";

interface IProps {
  showPreFooter?: boolean;
}

const Footer: React.FC<IProps> = ({ showPreFooter }) => {
  return (
    <div className="footer-container ">
      {showPreFooter ? (
        <div className="pre-footer">
          <BackgroundSection
            className="footer-background"
            src="/footer.jpg"
            height={600}
            style={{
              background:
                "linear-gradient(180deg, #F2F2F2 29.20%, rgba(206, 236, 245, 0.00) 100%)",
            }}
          >
            <div className="px-7 pt-41.2/3 ">
              <p className="text-xl whitespace-pre-wrap xl:text-center xl:w-full greeting">{`工場・倉庫建設に関するあらゆるお悩みに対応いたします。\n資料請求・お見積りはフォームより、お気軽にお問い合わせください。`}</p>
            </div>

            <div className="flex justify-center mt-35">
              <Button>お問い合わせ</Button>
            </div>
          </BackgroundSection>
        </div>
      ) : null}

      <div className="footer flex flex-col items-center pb-14">
        <div className="mx-36 mt-14">
          <picture>
            <img
              className="footer-logo "
              src="/kakehi_logo_white_rectangle.png"
              alt="Kakehi footer logo"
            />
          </picture>
        </div>
        <p className="text-md text-center mt-3 ">
          〒680-1417 鳥取県鳥取市桂見573番地
        </p>
        <p className="text-md text-center font-base">TEL 0857-28-4788</p>

        <div className="footer-link mt-8">
          <a>
            <span className="text-md">会社概要</span>
          </a>
          <a>
            <span className="text-md">個人情報保護方針</span>
          </a>
          <a>
            <span className="text-md">利用規約</span>
          </a>
        </div>

        <p className="text-sm text-center mt-5">
          Copyright © Kakehi Builder. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
