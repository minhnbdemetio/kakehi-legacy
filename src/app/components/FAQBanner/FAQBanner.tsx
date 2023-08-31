import { Button } from "../Button";
import { InfoCard } from "../InfoCard";
import { InfoContainer } from "../InfoContainer";
import { InfoHeading } from "../InfoHeading";
import { Routes } from "@/app/constants/routes";
import clsx from "clsx";
import React, { FC } from "react";

export const FAQBanner: FC = () => {
  return (
    <section className="bg-card-background-primary pt-40 pb-46">
      <InfoContainer>
        <InfoHeading subtitle="DOCUMENT" title="資料請求" className="mb-17" />
        <div
          className={clsx(
            "text-center bg-white",
            "mx-auto space-y-33 pt-23 pb-33 px-7",
            "xl:px-32"
          )}
        >
          <p className="text-lg font-noto-sans-jp text-primary leading-[1.8] xl:leading-loose xl:text-xl">
            システム建築について、もっと詳しく知りたい方は、ガイドブックをご活用ください。
            以下のフォームに必要事項をご入力の上、お問い合わせください。
          </p>
          <InfoCard title="工場・倉庫建設ガイド" />
          <Button href={Routes.REQUEST}>資料請求はこちら</Button>
        </div>
      </InfoContainer>
    </section>
  );
};
