import { Accordion } from "../Accordion";
import { InfoContainer } from "../InfoContainer";
import { InfoHeading } from "../InfoHeading";
import { getFAQCategories } from "@/app/utils/faqs/getFAQCategories";

export const FAQContent = async () => {
  const categories = await getFAQCategories();

  if (!categories.length) {
    return null;
  }

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
                <span
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                  className="whitespace-pre-line"
                />
              </Accordion>
            ))}
          </Accordion>
        ))}
      </div>
    </InfoContainer>
  );
};
