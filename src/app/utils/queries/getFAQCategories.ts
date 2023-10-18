import { getClient } from "@/app/lib/apolloClient";
import { getDataArrayFromQueryResults } from "@/app/utils/query";
import { QueryResultData } from "@/app/types/QueryResultData";
import { gql } from "@apollo/client";

export interface FAQCategoryData {
  title: string;
  id: string;
  faqs: QueryResultData<FAQData>;
}

export interface FAQData {
  question: string;
  answer: string;
  id: string;
}

const GET_FAQ_CATEGORIES = gql(`query {
  faqCategories {
    data {
      id
      attributes {
        title
        faqs {
          data {
            id
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
  try {
    const client = getClient();

    const { data } = await client.query({
      query: GET_FAQ_CATEGORIES,
      fetchPolicy: "no-cache",
    });

    const categoriesData = getDataArrayFromQueryResults<FAQCategoryData>(
      data?.faqCategories
    );

    if (!categoriesData.length) {
      return [];
    }

    const categories = categoriesData.map((category) => {
      return {
        id: category.id,
        title: category.title,
        faqs: getDataArrayFromQueryResults<FAQData>(category.faqs),
      };
    });

    return categories;
  } catch (e) {
    console.error(e);
    return [];
  }
};
