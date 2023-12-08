import { Button } from "../Button";
import { InfoCard } from "../InfoCard";
import { InfoContainer } from "../InfoContainer";
import { InfoHeading } from "../InfoHeading";
import { Routes } from "@/app/constants/routes";
import clsx from "clsx";
import React, { FC } from "react";

export const FAQBanner: FC = () => {
  return (
    <section className="bg-card-background-primary pb-46 pt-40">
      <InfoContainer>
        <InfoHeading subtitle="DOCUMENT" title="資料請求" className="mb-17" />
        <div
          className={clsx(
            "bg-white text-left",
            "mx-auto space-y-[75px] pb-[75px] pl-[25px] pr-[27px] pt-23 xl:space-y-33 xl:px-7 xl:pb-33",
            "xl:px-[85px]  xl:text-center"
          )}
        >
          <p className="xl:leading-loose font-noto-sans-jp text-[15px] font-[400] leading-[32px] text-primary  xl:text-1.5xl xl:leading-[1.8]">
            システム建築について、もっと詳しく知りたい方は、ガイドブックをご活用ください。
            <br className="hidden xl:block" />
            以下のフォームに必要事項をご入力の上、お問い合わせください。
          </p>
          <InfoCard title="工場・倉庫建設ガイド" />

          <div className="block xl:hidden">
            <p className="leadning-[36px] font-noto-sans-jp text-lg font-bold text-primary">
              資料の内容
            </p>
            <ul className="mx-auto mt-[10px] w-[58.6%] list-disc font-noto-sans-jp text-[13px] font-[500] leading-[24px] text-primary">
              <li>システム建築とは</li>
              <li>システム建築のメリット</li>
              <li>システム建築に適した建物</li>
              <li>工場・倉庫建築のポイント</li>
              <li>懸樋工務店の強み</li>
            </ul>
          </div>
          <Button href={Routes.REQUEST}>資料請求はこちら</Button>
        </div>
      </InfoContainer>
    </section>
  );
};
