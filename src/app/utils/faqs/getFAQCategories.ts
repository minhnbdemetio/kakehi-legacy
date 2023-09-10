import { getClient } from "@/app/lib/apolloClient";
import { getDataArrayFromQueryResults } from "../query";
import { QueryResultData } from "@/app/types/QueryResultData";
import { gql } from "@apollo/client";

interface FAQCategoryData {
  title: string;
  faqs: QueryResultData<FAQData>;
}

interface FAQData {
  question: string;
  answer: string;
}

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

export const getFAQCategories = async () => {
  const client = getClient();
  const { data } = await client.query({ query: GET_FAQ_CATEGORIES });
  const categoriesData = getDataArrayFromQueryResults<FAQCategoryData>(
    data?.faqCategories
  );

  if (!categoriesData.length) {
    return [];
  }

  const categories = categoriesData.map((category) => {
    return {
      title: category.title,
      faqs: getDataArrayFromQueryResults<FAQData>(category.faqs),
    };
  });

  return categories;
};
