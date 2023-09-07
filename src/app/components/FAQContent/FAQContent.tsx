"use client";

import { Accordion } from "../Accordion";
import { InfoContainer } from "../InfoContainer";
import { InfoHeading } from "../InfoHeading";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import { getDataArrayFromQueryResults } from "@/app/utils/query";
import { QueryResultData } from "@/app/types/QueryResultData";

const GET_FAQ_CATEGORIES = gql(`query {
  faqCategories {
    data {
      attributes {
        title
        faqs {
          data {
            attributes {
              question
              answer
            }
          }
        }
      }
    }
  }
}`);

interface FAQCategoryData {
  title: string;
  faqs: QueryResultData<FAQData>;
}
interface FAQData {
  question: string;
  answer: string;
}

export const FAQContent = () => {
  const { data } = useQuery(GET_FAQ_CATEGORIES);
  const categoriesData = getDataArrayFromQueryResults<FAQCategoryData>(
    data?.faqCategories
  );

  if (!categoriesData.length) {
    return null;
  }

  const categories = categoriesData.map((category) => ({
    title: category.title,
    faqs: getDataArrayFromQueryResults<FAQData>(category.faqs),
  }));

  return (
    <InfoContainer as="section" className="space-y-24 py-33">
      <InfoHeading subtitle="FAQ" title="よくあるお問い合わせ" />
      <div className="mx-auto space-y-7">
        {categories.map((category) => (
          <Accordion
            summary={category.title}
            key={`FAQCategory_${category.title}`}
          >
            {category.faqs.map((faq) => (
              <Accordion
                key={`FAQQuestion_${faq.question}`}
                summary={faq.question}
                type="question"
              >
                {faq.answer}
              </Accordion>
            ))}
          </Accordion>
        ))}
      </div>
    </InfoContainer>
  );
};
