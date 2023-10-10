export const getStrapiImageUrl = (uri: string) => {
  if (uri.startsWith("http")) {
    return uri;
  }

  return process.env.NEXT_PUBLIC_CMS_ENDPOINT + uri;
};
