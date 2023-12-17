import PageTitle from "@/app/components/PageTitle";
import React from "react";
import terms from "./terms-items";

import "./style.scss";
import clsx from "clsx";

interface IProps {}

const PrivacyPolicy: React.FC<IProps> = () => {
  return (
    <div className="privacy-policy box-content max-w-full px-7 pb-33.1/3 md:m-auto md:max-w-[600px] md:pb-50 xxl:max-w-[800px] xxl:pb-66.2/3">
      <div id="terms" className="mt-[75px] md:mt-33 xxl:mt-39.1/3">
        <PageTitle title="サイト利用規約" subTitle="TERMS OF SERVICE" />
      </div>
      <div className="mt-[50px] xxl:mt-21.2/3">
        <p
          className={clsx(
            "text-lg font-medium leading-lg",
            "md:text-xl md:font-normal",
            "xxl:text-lg"
          )}
        >
          このホームページは懸樋工務店が運営しております。以下の事項は、このホームページを利用される全ての方に適用されます。ご了承の上、本サイトをご利用願います。懸樋工務店は、このホームページのご利用をもって、下記事項をご了承いただいたものと見なさせていただきます。
        </p>
      </div>
      <div className="mt-[50px]  xxl:mt-33.1/3">
        <ul className="grid grid-cols-1 gap-10 md:gap-17 xxl:gap-16">
          {terms.map((item, index) => (
            <li key={index} className="">
              <p className="title pb-2 text-lg font-bold leading-md xxl:text-xl xxl:leading-lg">
                {index + 1}. {item.title}
              </p>
              <p
                className={clsx(
                  "mt-[10px] text-md leading-[24px]",
                  "md:mt-3 md:text-lg md:font-medium md:leading-xl",
                  "xxl:mt-2 xxl:font-normal xxl:leading-lg"
                )}
              >
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
