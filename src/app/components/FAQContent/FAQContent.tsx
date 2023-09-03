"use client";

import { Accordion } from "../Accordion";
import { InfoContainer } from "../InfoContainer";
import { InfoHeading } from "../InfoHeading";
import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_FAQS = gql(`query {
  faqs {
    data {
      attributes {
        answer
        question
      }
    }
  }
}`);

export const FAQContent = () => {
  const { data } = useQuery(GET_FAQS);

  return (
    <InfoContainer as="section" className="space-y-24 py-33">
      <InfoHeading subtitle="FAQ" title="よくあるお問い合わせ" />
      <div className="mx-auto space-y-7">
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
