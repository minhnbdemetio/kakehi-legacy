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
            "bg-white text-center",
            "mx-auto space-y-33 px-7 pb-33 pt-23",
            "xl:px-32"
          )}
        >
          <p className="xl:leading-loose text-lg font-[350]   leading-[1.8] text-primary xl:text-xl">
            システム建築について、もっと詳しく知りたい方は、ガイドブックをご活用ください。
            <br />
            以下のフォームに必要事項をご入力の上、お問い合わせください。
          </p>
          <InfoCard title="工場・倉庫建設ガイド" />
          <Button href={Routes.REQUEST}>資料請求はこちら</Button>
        </div>
      </InfoContainer>
    </section>
  );
};
