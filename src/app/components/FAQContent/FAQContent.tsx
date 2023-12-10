"use client";

import { FAQData } from "@/app/utils/queries/getFAQCategories";
import { InfoContainer } from "../InfoContainer";
import { InfoHeading } from "../InfoHeading";
import { useState } from "react";
import { Accordion } from "../Accordion";

export const FAQContent = ({
  categories,
}: {
  categories: { title: string; faqs: FAQData[]; id: string }[];
}) => {
  const [openSection, setOpenSection] = useState("");
  const [openQuestion, setOpenQuestion] = useState("");

  if (!categories.length) {
    return null;
  }

  return (
    <InfoContainer
      as="section"
      className="space-y-[50px] py-33 !pb-[150px] xl:space-y-24 xl:!pb-[100px]"
    >
      <InfoHeading subtitle="FAQ" title="よくあるお問い合わせ" />
      <div className="mx-auto space-y-[20px] xl:space-y-7 ">
        {categories.map((category) => (
          <Accordion
            toggle={() =>
              setOpenSection(category.id === openSection ? "" : category.id)
            }
            open={openSection === category.id}
            summary={category.title}
            key={`FAQCategory_${category.title}`}
          >
            {category.faqs.map((faq) => (
              <Accordion
                toggle={() =>
                  setOpenQuestion(faq.id === openQuestion ? "" : faq.id)
                }
                open={openQuestion === faq.id}
                key={`FAQQuestion_${faq.question}`}
                summary={faq.question}
                type="question"
              >
                <span
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                  className="whitespace-pre-line text-[14px] font-[400] leading-[24px] xl:text-[18px] xl:leading-[27px]"
                />
              </Accordion>
            ))}
          </Accordion>
        ))}
      </div>
    </InfoContainer>
  );
};
