import Image from "next/image";
import React from "react";

export default function TopSectionWork2() {
  return (
    <div className="relative mt-[50px]">
      <div className="absolute left-0 font-noto-sans text-4xl font-medium uppercase tracking-[4.8px] text-section xl:text-[128px] xl:tracking-[12.8px]">
        STRENGTH
      </div>

      <div className="mb-[70px] px-[23px] pt-[37px] text-left font-noto-sans-jp text-2xl font-bold xl:absolute xl:left-[140px] xl:top-[229px] xl:p-0 xl:text-left xl:text-3xl">
        懸樋工務店の強み
        <br />
        <span className="text-2.5xl xl:text-[40px]">
          一貫したサービス の提供
        </span>
      </div>

      <div className="flex w-full flex-col gap-[50px] bg-card-background-primary pb-[41px] xl:hidden">
        <div className="relative h-[800px] w-full">
          <Image
            src="/strength-image.jpg"
            alt="advantages"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col gap-[20px] px-[20px]">
          <div className="flex flex-row">
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px] font-noto-sans-jp text-lg font-bold text-white">
              <Image
                src="/background/strength-1.png"
                alt="advantages"
                layout="fill"
                objectFit="cover"
              />
              <span className="z-10">土地探し</span>
            </div>
            <div className="w-full bg-white px-[26px] py-[15px] font-noto-sans-jp text-[15px] font-normal leading-sm">
              宅地建物取引士の資格を有するスタッフが、土地探しからお手伝いいたします。立地条件や地域環境など、ご希望の条件をお聞かせください。{" "}
            </div>
          </div>

          <div className="flex flex-row">
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px] font-noto-sans-jp text-lg font-bold text-white">
              <Image
                src="/background/strength-2.png"
                alt="advantages"
                layout="fill"
                objectFit="cover"
              />
              <span className="z-10">設計</span>
            </div>
            <div className="w-full bg-white px-[26px] py-[15px] font-noto-sans-jp text-[15px] font-normal leading-sm">
              設計部を設けた弊社には、10名もの一級建築士が在籍しています。お客様との入念なヒアリングを基に、最適な工場・倉庫を設計いたします。{" "}
            </div>
          </div>

          <div className="flex flex-row">
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px] font-noto-sans-jp text-lg font-bold text-white">
              <Image
                src="/background/strength-3.png"
                alt="advantages"
                layout="fill"
                objectFit="cover"
              />
              <span className="z-10">施工</span>
            </div>
            <div className="w-full bg-white px-[26px] py-[15px] font-noto-sans-jp text-[15px] font-normal leading-sm">
              住宅からビル・工場・商業施設まで、あらゆる建物の建設で得られた豊富な経験と実績を基に、信頼性の高い建物をお届けいたします。
            </div>
          </div>

          <div className="flex flex-row">
            <div className="relative flex min-w-[100px] items-center justify-center bg-pink-custom-2 py-[48px] text-center font-noto-sans-jp text-lg font-bold text-white">
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
            <div className="w-full bg-white px-[26px] py-[15px] font-noto-sans-jp text-[15px] font-normal leading-sm">
              お客様が長きにわたり安心して工場・倉庫をご利用いただけるよう、建物の保守管理のお手伝いをいたします。
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[161px] right-0 hidden xl:block">
        <div className="relative h-[960px] w-[50vw]">
          <Image
            src="/strength-image.jpg"
            alt="advantages"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="hidden pt-[283px] xl:block">
        <div className="mr-[10vw] bg-card-background-primary pb-[161px] pl-[107px] pt-[132px]">
          <div className="mr-[40vw] flex flex-col gap-[14px] pr-[14px]">
            <div className="flex flex-row">
              <div className="relative flex min-w-[150px] items-center justify-center bg-pink-custom-2 px-[12px] py-[60px] font-noto-sans-jp text-1.5xl font-bold text-white">
                <Image
                  src="/background/strength-1.png"
                  alt="advantages"
                  layout="fill"
                  objectFit="cover"
                />
                <span className="z-10">土地探し</span>
              </div>
              <div className="w-full bg-white px-[25px] py-[21px] font-noto-sans-jp text-xl leading-lg">
                宅地建物取引士の資格を有するスタッフが、土地探しからお手伝いいたします。立地条件や地域環境など、ご希望の条件をお聞かせください。
              </div>
            </div>

            <div className="flex flex-row">
              <div className="relative flex min-w-[150px] items-center justify-center bg-pink-custom-2 px-[12px] py-[60px] font-noto-sans-jp text-1.5xl font-bold text-white">
                <Image
                  src="/background/strength-2.png"
                  alt="advantages"
                  layout="fill"
                  objectFit="cover"
                />
                <span className="z-10">設計</span>
              </div>
              <div className="w-full bg-white px-[25px] py-[21px] font-noto-sans-jp text-xl leading-lg">
                設計部を設けた弊社には、10名もの一級建築士が在籍しています。お客様との入念なヒアリングを基に、最適な工場・倉庫を設計いたします。
              </div>
            </div>

            <div className="flex flex-row">
              <div className="relative flex min-w-[150px] items-center justify-center bg-pink-custom-2 px-[12px] py-[60px] font-noto-sans-jp text-1.5xl font-bold text-white">
                <Image
                  src="/background/strength-3.png"
                  alt="advantages"
                  layout="fill"
                  objectFit="cover"
                />
                <span className="z-10">施工</span>
              </div>
              <div className="w-full bg-white px-[25px] py-[21px] font-noto-sans-jp text-xl leading-lg">
                住宅からビル・工場・商業施設まで、あらゆる建物の建設で得られた豊富な経験と実績を基に、信頼性の高い建物をお届けいたします。{" "}
              </div>
            </div>

            <div className="flex flex-row">
              <div className="relative flex min-w-[150px] items-center justify-center bg-pink-custom-2 px-[12px] py-[45px] font-noto-sans-jp text-1.5xl font-bold text-white">
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
              <div className="w-full bg-white px-[25px] py-[21px] font-noto-sans-jp text-xl leading-lg">
                お客様が長きにわたり安心して工場・倉庫をご利用いただけるよう、建物の保守管理のお手伝いをいたします。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
