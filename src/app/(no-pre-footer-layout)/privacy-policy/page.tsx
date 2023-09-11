import PageTitle from "@/app/components/PageTitle";
import React from "react";
import items from "./items";

import "./style.scss";

interface IProps { }

const PrivacyPolicy: React.FC<IProps> = () => {
  return (
    <div className="privacy-policy mx-7 pb-7 md:m-auto md:pb-66.2/3">
      <div className="mt-15 xl:mt-39.1/3">
        <PageTitle title="個人情報保護方針" subTitle="PRIVACY POLICY" />
      </div>
      <div className=" mt-15 xl:mt-21.2/3">
        <p className="text-lg leading-lg">
          懸樋工務店は、お客さまの氏名や生年月日、住所、メールアドレスなど、特定の個人を識別できる情報（以下｢個人情報｣といいます）を適切に取り扱い、保護することが企業の責務であると認識し、次の取り組みを実施します。
        </p>
      </div>
      <div className="mt-15 xl:mt-33.1/3">
        <ul className="grid grid-cols-1 gap-7 xl:gap-16">
          {items.map((item, index) => (
            <li key={index} className="">
              <p className="title pb-2 text-lg font-bold xl:text-xl leading-lg">
                {index + 1}. {item.title}
              </p>
              <p className="text-md xl:text-lg leading-lg">{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
