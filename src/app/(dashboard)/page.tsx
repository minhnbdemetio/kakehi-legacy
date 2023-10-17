import TopPageInformation from "@/app/organisms/TopPageInformation";
import TopPageWorkSection from "@/app/organisms/TopPageWorkSection";
import TopPageFLowSection from "@/app/organisms/TopPageFLowSection/TopPageFLowSection";
import TopSectionWork1 from "@/app/components/TopSectionWork1";
import TopSectionWork2 from "@/app/components/TopSectionWork2";
import TopSectionWork3 from "@/app/components/TopSectionWork3";
import SliderBackgroundWithSlogan from "@/app/components/SliderBackgroundWithSlogan";

export default function Home() {
  const images = Array.from({ length: 5 }).map(
    (_, idx) => `/top/kakehi_lp_main_visual-${idx + 1}.png`
  );
  return (
    <>
      <SliderBackgroundWithSlogan images={images}>
        <h1 className="hidden whitespace-pre-wrap text-center text-3xl xl:block">{`システム建築で、\n工場・倉庫に 最適な答えを。`}</h1>
        <h1 className="block w-full whitespace-pre-wrap text-center text-3xl xl:hidden">{`システム建築で、\n工場・倉庫に \n最適な答えを。`}</h1>
      </SliderBackgroundWithSlogan>

      <TopPageInformation />

      <TopSectionWork1 />

      <TopSectionWork2 />

      <TopSectionWork3 />

      <TopPageWorkSection />

      <TopPageFLowSection />
    </>
  );
}
