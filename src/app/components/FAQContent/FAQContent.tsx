import { Accordion } from "../Accordion";
import { InfoContainer } from "../InfoContainer";
import { InfoHeading } from "../InfoHeading";
import React from "react";

export const FAQContent = () => {
  return (
    <InfoContainer as="section" className="py-33 space-y-24">
      <InfoHeading subtitle="FAQ" title="よくあるお問い合わせ" />
      <div className="space-y-7 max-w-[994px] mx-auto">
        <Accordion summary="建築・施工について">
          <Accordion
            summary="工場・倉庫はどれくらいの期間で立てることができますか？"
            type="question"
          >
            建物の仕様にもよりますが、参考までに1,000m²で工事着工してから完成まで、半年ぐらいかかります。
            弊社としては、設計・見積・申請などの工事着工までに必要なプロセスを踏まえ、お客さまのご希望される建物完成時期を逆算して、スケジュールを組み、ご提案いたします。
          </Accordion>

          <Accordion
            summary="工場・倉庫はどれくらいの期間で立てることができますか？"
            type="question"
          >
            建物の仕様にもよりますが、参考までに1,000m²で工事着工してから完成まで、半年ぐらいかかります。
            弊社としては、設計・見積・申請などの工事着工までに必要なプロセスを踏まえ、お客さまのご希望される建物完成時期を逆算して、スケジュールを組み、ご提案いたします。
          </Accordion>
        </Accordion>

        <Accordion summary="建築・施工について">
          <Accordion
            summary="工場・倉庫はどれくらいの期間で立てることができますか？"
            type="question"
          >
            建物の仕様にもよりますが、参考までに1,000m²で工事着工してから完成まで、半年ぐらいかかります。
            弊社としては、設計・見積・申請などの工事着工までに必要なプロセスを踏まえ、お客さまのご希望される建物完成時期を逆算して、スケジュールを組み、ご提案いたします。
          </Accordion>

          <Accordion
            summary="工場・倉庫はどれくらいの期間で立てることができますか？"
            type="question"
          >
            建物の仕様にもよりますが、参考までに1,000m²で工事着工してから完成まで、半年ぐらいかかります。
            弊社としては、設計・見積・申請などの工事着工までに必要なプロセスを踏まえ、お客さまのご希望される建物完成時期を逆算して、スケジュールを組み、ご提案いたします。
          </Accordion>
        </Accordion>
      </div>
    </InfoContainer>
  );
};
