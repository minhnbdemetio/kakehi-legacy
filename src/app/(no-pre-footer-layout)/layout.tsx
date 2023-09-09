import { PropsWithChildren } from "react";
import { Layout } from "../components/Layout";

export default function InfoLayout({ children }: PropsWithChildren) {
  return <Layout showPreFooter={false}>{children}</Layout>;
}
