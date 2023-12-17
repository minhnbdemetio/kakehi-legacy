import PageTitle from "@/app/components/PageTitle";
import React from "react";
import privacies from "./privacy-items";

import "./style.scss";

interface IProps {}

const PrivacyPolicy: React.FC<IProps> = () => {
  return (
    <div className="privacy-policy mx-7 pb-33.1/3 md:m-auto md:pb-[150px] xxl:pb-[200px]">
      <div id="privacies" className="mt-[75px] xxl:mt-39.1/3">
        <PageTitle title="個人情報保護方針" subTitle="PRIVACY POLICY" />
      </div>
      <div className=" mt-[50px] xxl:mt-21.2/3">
        <p className="leading text-lg font-[500] leading-[36px] md:text-[18px] md:font-normal xxl:text-[16px] xxl:leading-lg">
          懸樋工務店は、お客さまの氏名や生年月日、住所、メールアドレスなど、特定の個人を識別できる情報（以下｢個人情報｣といいます）を適切に取り扱い、保護することが企業の責務であると認識し、次の取り組みを実施します。
        </p>
      </div>
      <div className="mt-[50px] xxl:mt-[100px]">
        <ul className="grid grid-cols-1 gap-10 md:gap-[50px]">
          {privacies.map((item, index) => (
            <li key={index} className="">
              <p className="title pb-[10px] text-[15px] font-bold leading-md md:pb-[5px] md:text-[16px] xxl:text-[18px] xxl:leading-lg">
                {index + 1}. {item.title}
              </p>
              <p className="mt-[10px] text-md leading-[24px] md:mt-[5px] xxl:text-lg xxl:leading-lg">
                {item.content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
