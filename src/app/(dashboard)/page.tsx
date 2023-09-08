import BackgroundWithSlogan from "../components/BackgroundWithSlogan";
import TopPageInformation from "../organisms/TopPageInformation";
import TopPageWorkSection from "../organisms/TopPageWorkSection";
import TopPageFLowSection from "../organisms/TopPageFLowSection/TopPageFLowSection";
import { Layout } from "../components/Layout";
import { FC, PropsWithChildren, ReactElement, ReactNode } from "react";

export default function Home() {
  return (
    <>
      <BackgroundWithSlogan src="/index-background.jpg">
        <h1 className="hidden whitespace-pre-wrap text-3xl xl:block">{`システム建築で、\n工場・倉庫に 最適な答えを。`}</h1>
        <h1 className="block whitespace-pre-wrap text-3xl xl:hidden">{`システム建築で、\n工場・倉庫に \n最適な答えを。`}</h1>
      </BackgroundWithSlogan>

      <TopPageInformation />

      <TopPageWorkSection />

      <div className="mt-50">
        <TopPageFLowSection />
      </div>
    </>
  );
}
