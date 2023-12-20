import { Button } from "../Button";
import { InfoCard } from "../InfoCard";
import { InfoContainer } from "../InfoContainer";
import { InfoHeading } from "../InfoHeading";
import { Routes } from "@/app/constants/routes";
import clsx from "clsx";
import React, { FC } from "react";

export const FAQBanner: FC = () => {
  return (
    <section className="bg-card-background-primary pb-46 pt-40 md:pb-50 md:pt-33">
      <InfoContainer>
        <InfoHeading subtitle="DOCUMENT" title="資料請求" className="mb-17" />
        <div
          className={clsx(
            "bg-white text-left",
            "mx-auto space-y-[75px] pb-[75px] pl-[25px] pr-[27px] pt-23 xxl:space-y-33 xxl:px-7 xxl:pb-33",
            "md:px-25 md:pt-17",
            "xxl:px-[85px] xxl:text-center"
          )}
        >
          <p
            className={clsx(
              "font-noto-sans-jp text-lg font-medium leading-[36px] text-primary",
              "md:text-1.5xl md:leading-lg",
              "xxl:leading-loose xxl:text-1.5xl xxl:leading-[1.8]"
            )}
          >
            システム建築について、もっと詳しく知りたい方は、ガイドブックをご活用ください。
            <br className="hidden xxl:block" />
            以下のフォームに必要事項をご入力の上、お問い合わせください。
          </p>
          {/* <InfoCard title="工場・倉庫建設ガイド" /> */}

          <img
            alt="Document for lp"
            src="/document_for_lp.svg"
            className="w-full md:mx-auto md:max-w-[500px] xxl:!mt-[100px]"
          />

          <div className="!mt-[50px] block  md:!mt-[75px] ">
            <p
              className={clsx(
                "mx-auto w-[220px] text-center font-noto-sans-jp text-lg font-bold leading-lg text-primary",
                "md:text-center md:text-1.5xl"
              )}
            >
              資料の内容
            </p>
            <ul
              className={clsx(
                "mx-auto mt-[10px] max-w-[244px]   font-noto-sans-jp text-[13px] font-medium leading-[24px] text-primary",
                "md:mt-7 md:max-w-[360px]   md:text-lg md:leading-sm  xxl:max-w-[351px] xxl:text-left"
              )}
            >
              <li className="before:content-[' '] flex items-center gap-[4px] before:block before:h-[3px] before:w-[3px] before:rounded-[50%] before:bg-black">
                システム建築とは
              </li>
              <li className="before:content-[' '] flex items-center gap-[4px] before:block before:h-[3px] before:w-[3px] before:rounded-[50%] before:bg-black">
                システム建築に適した建物
              </li>
              <li className="before:content-[' '] flex items-center gap-[4px] before:block before:h-[3px] before:w-[3px] before:rounded-[50%] before:bg-black">
                システム建築が工場・倉庫に最適な理由
              </li>
              <li className="before:content-[' '] flex items-center gap-[4px] before:block before:h-[3px] before:w-[3px] before:rounded-[50%] before:bg-black">
                システム建築の商品と特徴
              </li>
              <li className="before:content-[' '] flex items-center gap-[4px] before:block before:h-[3px] before:w-[3px] before:rounded-[50%] before:bg-black">
                工場・倉庫建築のポイント
              </li>
              <li className="before:content-[' '] flex items-center gap-[4px] before:block before:h-[3px] before:w-[3px] before:rounded-[50%] before:bg-black">
                建築予算の考慮すべき要素
              </li>
              <li className="before:content-[' '] flex items-center gap-[4px] before:block before:h-[3px] before:w-[3px] before:rounded-[50%] before:bg-black">
                建築予算の考え方
              </li>
              <li className="before:content-[' '] flex items-center gap-[4px] before:block before:h-[3px] before:w-[3px] before:rounded-[50%] before:bg-black">
                懸樋工務店の強み
              </li>
              <li className="before:content-[' '] flex items-center gap-[4px] before:block before:h-[3px] before:w-[3px] before:rounded-[50%] before:bg-black">
                施工実績
              </li>
            </ul>
          </div>
          <div className="text-center xxl:!mt-[75px]">
            <Button
              href={Routes.REQUEST}
              className="w-[240px] text-[20px] md:w-[300px] md:text-[22px] md:font-bold xxl:font-[500]"
            >
              資料請求はこちら
            </Button>
          </div>
        </div>
      </InfoContainer>
    </section>
  );
};
