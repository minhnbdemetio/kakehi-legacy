"use client";

import React, { PropsWithChildren } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";




export const ApolloContext: React.FC<PropsWithChildren> = (props) => {
  const apolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_CMS_ENDPOINT + "/graphql",
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_ACCESS_TOKEN}` || "",
    },
  });
  return (
    <ApolloProvider client={apolloClient}>{props.children}</ApolloProvider>
  );
};
