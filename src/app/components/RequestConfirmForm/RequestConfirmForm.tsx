"use client";

import { Button } from "../Button";
import { RequestConfirmField } from "./RequestConfirmField";
import { Routes } from "@/app/constants/routes";
import { sessionStorageKey } from "@/app/constants/storage";
import { useSessionStorage } from "@/app/hooks/useSessionStorage";
import { RequestFormData } from "@/app/types/RequestFormData";
import clsx from "clsx";
import { useMemo, useState } from "react";

const INFO_TEXT_CLASSNAME =
  "text-lg font-noto-sans-jp text-primary leading-[1.8] xl:mb-30 xl:leading-loose xl:text-xl";

export const RequestConfirmForm = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const requestData = useSessionStorage(sessionStorageKey.REQUEST_DATA, null);
  const parsedData = useMemo<RequestFormData | null>(
    () => (requestData ? JSON.parse(requestData) : null),
    [requestData]
  );

  return (
    <div>
      <div
        className={clsx(
          "bg-card-background-primary pb-33 pl-6 pr-6 text-center xl:pl-33 xl:pr-12",
          isConfirmed ? "pb-30 pt-23" : "pb-33 pt-17"
        )}
      >
        {isConfirmed ? (
          <p className={clsx(INFO_TEXT_CLASSNAME, "mb-33")}>
            以下の内容にて、資料請求のお受付を完了いたしました。
            <br />
            ご入力いただいたメールアドレスへ、資料のダウンロードリンクをお送りいたします。
          </p>
        ) : (
          <p className={clsx(INFO_TEXT_CLASSNAME, "mb-30")}>
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
          {!isConfirmed ? (
            <RequestConfirmField
              label="メールアドレス<br/>（確認用）"
              content={parsedData?.emailConfirm}
            />
          ) : null}
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
            <Button href={Routes.REQUEST} className="relative bg-black">
              <span>戻る</span>
              <img
                className="absolute left-7 top-1/2 hidden -translate-y-1/2 -scale-x-100 xl:block"
                src="/icons/arrow-right-icon.png"
                alt=""
                width={50}
                height={17}
              />
            </Button>
            <Button onClick={() => setIsConfirmed(true)} className="relative">
              <span>確認する</span>
              <img
                className="absolute right-7 top-1/2 hidden -translate-y-1/2 xl:block"
                src="/icons/arrow-right-icon.png"
                alt=""
                width={50}
                height={17}
              />
            </Button>
          </div>
        ) : null}
      </div>

      {isConfirmed ? (
        <div className="mt-33 text-center">
          <Button href={Routes.TOP}>トップページへ戻る</Button>
        </div>
      ) : null}
    </div>
  );
};
