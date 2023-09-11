import { HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

/**
 * In Server Components, you’re not allowed to use any hook. Apollo’s new experimental library
 * provides a new way to use Apollo Client in Server Components.
 * Reference: https://www.apollographql.com/blog/apollo-client/next-js/how-to-use-apollo-client-with-next-js-13/
 */
export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    headers: {
      authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}` || "",
    },
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_CMS_ENDPOINT + "/graphql",
    }),
  });
});
