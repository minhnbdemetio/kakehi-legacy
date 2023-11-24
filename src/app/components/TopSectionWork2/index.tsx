import Image from "next/image";
import React from "react";
import { TopSectionWorkCard } from "../TopSectionWorkCard";

export default function TopSectionWork2() {
  return (
    <div className="relative mt-[50px]">
      <div className="absolute left-0 font-noto-sans text-4xl font-medium uppercase tracking-[4.8px] text-section xl:text-[128px] xl:tracking-[12.8px]">
        STRENGTH
      </div>

      <div className="mb-[70px] px-[23px] pt-[37px] text-left  text-2xl font-bold xl:absolute xl:left-[140px] xl:top-[229px] xl:p-0 xl:text-left xl:text-3xl">
        懸樋工務店の強み
        <br />
        <span className="text-2.5xl xl:text-[40px]">
          一貫したサービス{" "}
          <span className="text-1.5xl xl:text-3xl">の提供</span>
        </span>
      </div>

      <div className="flex w-full flex-col gap-[50px] bg-card-background-primary pb-[41px] xl:hidden">
        <div className="relative h-[800px] w-full">
          <Image
            src="/top/kakehi_lp_top_page_strength.jpg"
            alt="advantages"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col gap-[20px] px-[20px]">
          <div className="flex flex-row">
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px]  text-lg font-bold text-white">
              <Image
                src="/background/strength-1.png"
                alt="advantages"
                layout="fill"
                objectFit="cover"
              />
              <span className="z-10">土地探し</span>
            </div>
            <div className="flex w-full items-center bg-white px-[26px] py-[15px]  text-[15px] font-[350] leading-sm">
              宅地建物取引士の資格を有するスタッフが、土地探しからお手伝いいたします。立地条件や地域環境など、ご希望の条件をお聞かせください。
            </div>
          </div>

          <div className="flex flex-row">
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px]  text-lg font-bold text-white">
              <Image
                src="/background/strength-2.png"
                alt="advantages"
                layout="fill"
                objectFit="cover"
              />
              <span className="z-10">設計</span>
            </div>
            <div className="flex w-full items-center bg-white px-[26px] py-[15px]  text-[15px] font-[350] leading-sm">
              設計部を設けた弊社には、10名もの一級建築士が在籍しています。お客様との入念なヒアリングを基に、最適な工場・倉庫を設計いたします。
            </div>
          </div>

          <div className="flex flex-row">
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px]  text-lg font-bold text-white">
              <Image
                src="/background/strength-3.png"
                alt="advantages"
                layout="fill"
                objectFit="cover"
              />
              <span className="z-10">施工</span>
            </div>
            <div className="flex w-full items-center bg-white px-[26px] py-[15px]  text-[15px] font-[350] leading-sm">
              住宅からビル・工場・商業施設まで、あらゆる建物の建設で得られた豊富な経験と実績を基に、信頼性の高い建物を提供いたします。
            </div>
          </div>

          <div className="flex flex-row">
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px] text-center  text-lg font-bold text-white">
              <Image
                src="/background/strength-4.png"
                alt="advantages"
                layout="fill"
                objectFit="cover"
              />
              <span className="z-10">
                アフター
                <br />
                メンテナンス
              </span>
            </div>
            <div className="flex w-full items-center bg-white px-[26px] py-[15px]  text-[15px] font-[350] leading-sm">
              私たちは建物が完成してからがお客様との「本当のお付き合い」が始まると考えています。建物を長きにわたり安心してご利用いただけるよう、保守管理のお手伝いをいたします。
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[161px] right-0 hidden xl:block">
        <div className="relative h-[960px] w-[50vw]">
          <Image
            src="/top/kakehi_lp_top_page_strength.jpg"
            alt="advantages"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="hidden pt-[283px] xl:block">
        <div className="mr-[10vw] bg-card-background-primary pb-[161px] pl-[107px] pt-[132px]">
          <div className="mr-[40vw] flex flex-col gap-[14px] pr-[14px]">
            <TopSectionWorkCard
              image="/background/strength-1.png"
              textImage="土地探し"
              alt="advantages"
            >
              宅地建物取引士の資格を有するスタッフが、土地探しからお手伝いいたします。立地条件や地域環境など、ご希望の条件をお聞かせください。
            </TopSectionWorkCard>

            <TopSectionWorkCard
              image="/background/strength-2.png"
              textImage="設計"
              alt="advantages"
            >
              設計部を設けた弊社には、10名もの一級建築士が在籍しています。お客様との入念なヒアリングを基に、最適な工場・倉庫を設計いたします。
            </TopSectionWorkCard>

            <TopSectionWorkCard
              image="/background/strength-3.png"
              textImage="施工"
              alt="advantages"
            >
              住宅からビル・工場・商業施設まで、あらゆる建物の建設で得られた豊富な経験と実績を基に、信頼性の高い建物を提供いたします。
            </TopSectionWorkCard>

            <TopSectionWorkCard
              image="/background/strength-4.png"
              textImage={`アフター\nメンテナンス`}
              alt="advantages"
            >
              私たちは建物の完成からがお客様との「本当のお付き合い」が始まると考えています。建物を長きにわたり安心してご利用いただけるよう、保守管理のお手伝いをいたします。
            </TopSectionWorkCard>
          </div>
        </div>
      </div>
    </div>
  );
}
