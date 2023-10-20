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
      <SliderBackgroundWithSlogan images={images}></SliderBackgroundWithSlogan>

      <TopPageInformation />

      <TopSectionWork1 />

      <TopSectionWork2 />

      <TopSectionWork3 />

      <TopPageWorkSection />

      <TopPageFLowSection />
    </>
  );
}
