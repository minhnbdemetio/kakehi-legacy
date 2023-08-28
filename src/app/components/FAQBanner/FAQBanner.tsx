import { Button } from "../Button";
import { Container } from "../Container";
import { InfoCard } from "../InfoCard";
import { InfoHeading } from "../InfoHeading";
import clsx from "clsx";
import React, { FC } from "react";

export const FAQBanner: FC = () => {
  return (
    <section className="bg-card-background-primary pt-40 pb-46">
      <Container>
        <InfoHeading subtitle="DOCUMENT" title="資料請求" className="mb-17" />
        <div
          className={clsx(
            "text-center bg-white max-w-[994px]",
            "mx-auto space-y-33 pt-23 pb-33 px-7",
            "desktop:px-32"
          )}
        >
          <p className="text-lg font-noto-sans-jp text-primary leading-[1.8] desktop:text-xl">
            システム建築について、もっと詳しく知りたい方は、ガイドブックをご活用ください。
            以下のフォームに必要事項をご入力の上、お問い合わせください。
          </p>
          <InfoCard title="工場・倉庫建設ガイド" />
          <Button text="資料請求はこちら" />
        </div>
      </Container>
    </section>
  );
};
