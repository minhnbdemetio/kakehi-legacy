"use client";

import React, { PropsWithChildren } from "react";
import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

const makeClient = () => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_CMS_ENDPOINT + "/graphql",
  });

  return new NextSSRApolloClient({
    uri: process.env.NEXT_PUBLIC_CMS_ENDPOINT + "/graphql",
    cache: new NextSSRInMemoryCache(),
    headers: {
      authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}` || "",
    },
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
};

export const ApolloContext: React.FC<PropsWithChildren> = (props) => {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {props.children}
    </ApolloNextAppProvider>
  );
};
