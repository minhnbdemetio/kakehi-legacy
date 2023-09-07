import { PropsWithChildren } from "react";
import { Layout } from "../components/Layout";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return <Layout showPreFooter>{children}</Layout>;
}
