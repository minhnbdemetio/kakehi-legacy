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
    <InfoContainer as="section" className="space-y-24 py-33">
      <InfoHeading subtitle="FAQ" title="よくあるお問い合わせ" />
      <div className="mx-auto space-y-7">
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
                  className="whitespace-pre-line font-[200] "
                />
              </Accordion>
            ))}
          </Accordion>
        ))}
      </div>
    </InfoContainer>
  );
};
