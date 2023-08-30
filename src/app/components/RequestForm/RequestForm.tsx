import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { InfoCard } from "../InfoCard";
import { TextField } from "../TextField";
import { Routes } from "@/app/constants/routes";
import clsx from "clsx";
import React from "react";

export const RequestForm = () => {
  return (
    <form className="bg-card-background-primary pt-17 pb-23 pl-6 pr-6 text-center desktop:pl-33 desktop:pr-12">
      <p className="mb-17 text-lg font-noto-sans-jp text-primary leading-[1.8] desktop:leading-loose desktop:text-xl">
        以下のフォームに必要事項をご入力の上、資料をご請求ください。
        <br />
        ご入力いただいたメールアドレスへ、資料のダウンロードリンクをご連絡いたします。
        <br />
        *は必須項目です。
      </p>

      <InfoCard title="工場・倉庫建設ガイド" />

      <div className="table border-spacing-y-7 -my-7 pt-21 pb-17 w-full">
        <TextField label="会社名*" name="Company" required />
        <TextField label="お名前*" name="Name" required />
        <TextField label="ふりがな*" name="NamePronunciation" required />
        <TextField label="メールアドレス*" name="Email" required />
        <TextField
          label="メールアドレス*<br/>（確認用）"
          name="EmailConfirm"
          required
        />
        <TextField label="電話番号*" name="PhoneNumber" required />
        <TextField
          className="resize-none"
          label="お問い合わせ内容<br/>（任意）"
          name="Message"
          rows={10}
          required
        />
      </div>

      <Checkbox className="justify-center mb-7" required>
        <a href={Routes.PRIVACY_POLICY} className="text-hover-primary">
          利用規約
        </a>{" "}
        に同意する
      </Checkbox>

      <Button
        href={Routes.REQUEST_CONFIRM}
        text="確認する"
        className="mx-auto"
      />
    </form>
  );
};
