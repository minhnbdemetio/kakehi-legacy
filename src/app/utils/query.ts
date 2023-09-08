import { QueryResultData } from "../types/QueryResultData";

export const getDataArrayFromQueryResults = <T>(data: QueryResultData<T>) => {
  if (!data) {
    return [];
  }

  const dataFromKey = data.data || [];
  const results = dataFromKey.map((item) => item.attributes);

  return results;
};
