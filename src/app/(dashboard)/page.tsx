import TopPageInformation from "@/app/organisms/TopPageInformation";
import TopPageWorkSection from "@/app/organisms/TopPageWorkSection";
import TopPageFLowSection from "@/app/organisms/TopPageFLowSection/TopPageFLowSection";
import TopSectionWork1 from "@/app/components/TopSectionWork1";
import TopSectionWork2 from "@/app/components/TopSectionWork2";
import TopSectionWork3 from "@/app/components/TopSectionWork3";
import SliderBackgroundWithSlogan from "@/app/components/SliderBackgroundWithSlogan";

export default function Home() {
  const images = Array.from({ length: 5 }).map(
    (_, idx) => `/top/kakehi_lp_top_slider-${idx + 1}.jpg`
  );
  const imagesMobile = Array.from({ length: 5 }).map(
    (_, idx) => `/top/kakehi_sp_top_slider-${idx + 1}.jpg`
  );
  const imagesTablet = Array.from({ length: 5 }).map(
    (_, idx) => `/top/kakehi_tablet_top_slider-${idx + 1}.jpg`
  );

  return (
    <>
      <SliderBackgroundWithSlogan
        imagesTablet={imagesTablet}
        images={images}
        imagesMobile={imagesMobile}
      />

      <TopPageInformation />

      <TopSectionWork1 />

      <TopSectionWork2 />

      <TopSectionWork3 />

      <TopPageWorkSection />

      <TopPageFLowSection />
    </>
  );
}
