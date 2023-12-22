"use client";

import { Button } from "../Button";
import { RequestConfirmField } from "./RequestConfirmField";
import { Routes } from "@/app/constants/routes";
import { sessionStorageKey } from "@/app/constants/storage";
import { useSessionStorage } from "@/app/hooks/useSessionStorage";
import { RequestFormData } from "@/app/types/RequestFormData";
import { sendDocumentRequestEmail } from "@/app/utils/queries/email";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const INFO_TEXT_CLASSNAME = clsx(
  "text-lg font-medium leading-[1.8] text-primary",
  "md:text-xl md:font-normal md:leading-lg",
  "xxl:leading-loose xxl:mb-30 xxl:text-xl"
);

export const RequestConfirmForm = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [sumbmitting, setSubmitting] = useState(false);
  const requestData = useSessionStorage(sessionStorageKey.REQUEST_DATA, null);
  const parsedData = useMemo<RequestFormData | null>(
    () => (requestData ? JSON.parse(requestData) : null),
    [requestData]
  );

  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    if (executeRecaptcha) {
      console.debug("handle recapcha ");
      executeRecaptcha();
    }
  }, [executeRecaptcha]);

  const handleSubmit = async () => {
    try {
      if (parsedData && executeRecaptcha) {
        setSubmitting(true);
        const token = await executeRecaptcha();

        console.debug(token);

        await sendDocumentRequestEmail({
          companyName: parsedData.company,
          content: parsedData.message,
          email: parsedData.email,
          furigana: parsedData.namePronunciation,
          name: parsedData.name,
          phone: parsedData.phoneNumber,
          token,
        });
      }
      setIsConfirmed(true);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    } catch (e) {
      console.error(e);
      alert("Something went wrong! Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <div>
      <div
        className={clsx(
          "bg-card-background-primary px-[25px] pt-17 text-left leading-[36px] md:px-[75px] xxl:px-[96px] xxl:pl-33 xxl:pr-12 xxl:text-center",
          isConfirmed ? "pb-25 md:pb-0" : "pb-33"
        )}
      >
        {isConfirmed ? (
          <p className={clsx(INFO_TEXT_CLASSNAME, "mb-[50px] xxl:mb-33")}>
            以下の内容にて、資料請求のお受付を完了いたしました。
            <br className="hidden xxl:block" />
            ご入力いただいたメールアドレスへ、資料のダウンロードリンクをお送りいたします。
          </p>
        ) : (
          <p className={clsx(INFO_TEXT_CLASSNAME, "mb-[50px] xxl:mb-30 ")}>
            入力した内容をご確認ください。
          </p>
        )}

        <div
          className={clsx(
            "w-full space-y-7 pb-24",
            "md:space-y-20 md:px-[50px] md:pb-33",
            "xxl:-mt-26 xxl:table xxl:border-spacing-y-26 xxl:pb-[84px]"
          )}
        >
          <RequestConfirmField label="会社名" content={parsedData?.company} />
          <RequestConfirmField label="お名前" content={parsedData?.name} />
          <RequestConfirmField
            label="ふりがな"
            content={parsedData?.namePronunciation}
          />
          <RequestConfirmField
            label="メールアドレス"
            content={parsedData?.email}
          />
          <RequestConfirmField
            label={`メールアドレス\n（確認用）`}
            content={parsedData?.emailConfirm}
          />
          <RequestConfirmField
            label="電話番号"
            content={parsedData?.phoneNumber}
          />
          <RequestConfirmField
            label="お問い合わせ内容"
            content={parsedData?.message}
            multiline
          />
        </div>

        {!isConfirmed ? (
          <div className="flex justify-center gap-7 xxl:gap-14">
            <Button
              href={Routes.REQUEST}
              className="relative flex flex-col-reverse items-center justify-center !bg-black px-7 md:!w-[200px] md:flex-row md:gap-3 xxl:!w-[330px] xxl:justify-between xxl:gap-y-2"
            >
              <img
                className="hidden shrink-0 -scale-x-100 md:block"
                src="/icons/arrow-right-icon.png"
                alt="arrow right icon"
                width={50}
                height={17}
              />
              <span className="text-1.5xl md:text-[22px] xxl:text-2xl">
                戻る
              </span>
              <span className="hidden xxl:block xxl:w-17"></span>
            </Button>
            <Button
              onClick={handleSubmit}
              className="relative flex flex-col items-center justify-center !py-[0] md:!w-[200px] md:flex-row md:justify-between md:gap-3 xxl:!w-[330px] xxl:gap-y-2 xxl:!p-7"
            >
              <span className="hidden xxl:block xxl:w-17"></span>
              <span className="text-1.5xl  md:text-[22px] xxl:text-2xl">
                {sumbmitting ? "送信中..." : "送信する"}
              </span>
              <img
                src="/icons/arrow-right-icon.png"
                alt="arrow right icon"
                width={50}
                height={17}
                className="hidden shrink-0 md:block"
              />
            </Button>
          </div>
        ) : null}
      </div>

      {isConfirmed ? (
        <div className="mt-[50px] text-center md:mt-25 xxl:mt-33.1/3">
          <Button
            className="!w-[250px] !text-1.5xl md:!w-[300px] md:!text-[22px] xxl:!w-[330px] xxl:!text-2xl"
            href={Routes.TOP}
          >
            トップページへ戻る
          </Button>
        </div>
      ) : null}
    </div>
  );
};
