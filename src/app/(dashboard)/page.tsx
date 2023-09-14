import BackgroundWithSlogan from "../components/BackgroundWithSlogan";
import TopPageInformation from "../organisms/TopPageInformation";
import TopPageWorkSection from "../organisms/TopPageWorkSection";
import TopPageFLowSection from "../organisms/TopPageFLowSection/TopPageFLowSection";
import TopSectionWork1 from "../components/TopSectionWork1";
import TopSectionWork2 from "../components/TopSectionWork2";
import TopSectionWork3 from "../components/TopSectionWork3";

export default function Home() {
  return (
    <>
      <BackgroundWithSlogan src="/index-background.jpg">
        <h1 className="hidden whitespace-pre-wrap text-3xl xl:block">{`システム建築で、\n工場・倉庫に 最適な答えを。`}</h1>
        <h1 className="block whitespace-pre-wrap text-3xl xl:hidden">{`システム建築で、\n工場・倉庫に \n最適な答えを。`}</h1>
      </BackgroundWithSlogan>

      <TopPageInformation />

      <TopSectionWork1 />

      <TopSectionWork2 />

      <TopSectionWork3 />

      <TopPageWorkSection />

      <div className="mt-50">
        <TopPageFLowSection />
      </div>
    </>
  );
}
