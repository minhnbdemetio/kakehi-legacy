"use client";

import { FAQData } from "@/app/utils/queries/getFAQCategories";
import { InfoContainer } from "../InfoContainer";
import { InfoHeading } from "../InfoHeading";
import { useLayoutEffect, useState } from "react";
import { Accordion } from "../Accordion";

export const FAQContent = ({
  categories,
}: {
  categories: { title: string; faqs: FAQData[]; id: string }[];
}) => {
  const [openSection, setOpenSection] = useState("");
  const [openQuestion, setOpenQuestion] = useState("");

  useLayoutEffect(() => {
    if (typeof document !== "undefined" && openSection) {
      setTimeout(() => {
        window.scrollTo({
          top: (document.getElementById(openSection)?.offsetTop || 0) - 80,
          behavior: "smooth",
        });

        // Waiting for Previous accordion close completely!
      }, 310);
    }
  }, [openSection]);

  if (!categories.length) {
    return null;
  }

  return (
    <InfoContainer
      as="section"
      className="space-y-[50px] py-33 !pb-[150px] md:space-y-[85px] xxl:space-y-24 xxl:!pb-[100px]"
    >
      <InfoHeading subtitle="FAQ" title="よくあるお問い合わせ" />
      <div className="mx-auto space-y-[20px] md:max-w-[600px] md:space-y-5 xxl:max-w-full xxl:space-y-7">
        {categories.map((category) => (
          <Accordion
            id={category.id}
            toggle={(e) => {
              setOpenSection(category.id === openSection ? "" : category.id);
              const target = e.currentTarget;

              // console.debug(target.getBoundingClientRect());
            }}
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
                  className="whitespace-pre-line font-normal"
                />
              </Accordion>
            ))}
          </Accordion>
        ))}
      </div>
    </InfoContainer>
  );
};
