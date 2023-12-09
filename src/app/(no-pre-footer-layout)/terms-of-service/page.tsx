import PageTitle from "@/app/components/PageTitle";
import React from "react";
import terms from "./terms-items";

import "./style.scss";

interface IProps {}

const PrivacyPolicy: React.FC<IProps> = () => {
  return (
    <div className="privacy-policy mx-7 pb-33.1/3   md:m-auto md:pb-66.2/3">
      <div id="terms" className="mt-[75px] xl:mt-39.1/3">
        <PageTitle title="サイト利用規約" subTitle="TERMS OF SERVICE" />
      </div>
      <div className=" mt-[50px] xl:mt-21.2/3">
        <p className="leading text-lg font-[500] leading-[36px] xl:leading-lg">
          このホームページは懸樋工務店が運営しております。以下の事項は、このホームページを利用される全ての方に適用されます。ご了承の上、本サイトをご利用願います。懸樋工務店は、このホームページのご利用をもって、下記事項をご了承いただいたものと見なさせていただきます。
        </p>
      </div>
      <div className="mt-[50px]  xl:mt-33.1/3">
        <ul className="grid grid-cols-1 gap-7 xl:gap-16">
          {terms.map((item, index) => (
            <li key={index} className="">
              <p className="title pb-2 text-[15px] font-bold leading-md xl:text-xl xl:leading-lg">
                {index + 1}. {item.title}
              </p>
              <p className="mt-[10px] text-md leading-[24px] xl:mt-[0px] xl:text-lg xl:leading-lg">
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
