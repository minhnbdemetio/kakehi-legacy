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

const INFO_TEXT_CLASSNAME =
  "text-lg  text-primary font-[500] leading-[1.8] xl:mb-30 xl:leading-loose xl:text-xl";

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
    } catch (e) {
      console.error(e);
      alert("Something went wrong!");
    } finally {
      setIsConfirmed(true);

      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }

    setSubmitting(false);
  };

  return (
    <div>
      <div
        className={clsx(
          "bg-card-background-primary pb-[75px] pl-6 pr-6 text-left leading-[36px] xl:pl-33 xl:pr-12 xl:text-center",
          isConfirmed ? "pb-30 pt-23" : "pb-33 pt-17"
        )}
      >
        {isConfirmed ? (
          <p className={clsx(INFO_TEXT_CLASSNAME, "mb-[50px] xl:mb-33")}>
            以下の内容にて、資料請求のお受付を完了いたしました。
            <br className="hidden xl:block" />
            ご入力いただいたメールアドレスへ、資料のダウンロードリンクをお送りいたします。
          </p>
        ) : (
          <p className={clsx(INFO_TEXT_CLASSNAME, "mb-[50px] xl:mb-30 ")}>
            入力した内容をご確認ください。
          </p>
        )}

        <div className="w-full space-y-7 pb-24 xl:-my-26 xl:table xl:border-spacing-y-26">
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
          <div className="flex justify-center gap-7 xl:gap-14">
            <Button
              href={Routes.REQUEST}
              className="relative flex flex-col-reverse items-center justify-center bg-black px-7 sm:flex-row sm:justify-between xl:gap-y-2"
            >
              <img
                className="hidden -scale-x-100 xl:block"
                src="/icons/arrow-right-icon.png"
                alt=""
                width={50}
                height={17}
              />
              <span className="text-[20px]">戻る</span>
              <span className="sm:w-[50px]"></span>
            </Button>
            <Button
              onClick={handleSubmit}
              className="relative flex flex-col items-center justify-center !px-[30px] !py-[0] sm:flex-row sm:justify-between xl:gap-y-2 xl:!p-7"
            >
              <span className="sm:w-[50px]"></span>
              <span className="text-[20px]">
                {sumbmitting ? "送信中..." : "送信する"}
              </span>
              <img
                src="/icons/arrow-right-icon.png"
                alt=""
                width={50}
                height={17}
                className="hidden xl:block"
              />
            </Button>
          </div>
        ) : null}
      </div>

      {isConfirmed ? (
        <div className="mt-[50px] pb-33.1/3 text-center xl:mt-33.1/3">
          <Button
            className="!w-[250px] !text-[20px] xl:!w-[330px] xl:!text-xl"
            href={Routes.TOP}
          >
            トップページへ戻る
          </Button>
        </div>
      ) : null}
    </div>
  );
};
