"use client";

import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { InfoCard } from "../InfoCard";
import { TextField } from "../TextField";
import { Routes } from "@/app/constants/routes";
import { sessionStorageKey } from "@/app/constants/storage";
import { useConfirmLeavingPrompt } from "@/app/hooks/useConfirmLeavingPrompt";
import { RequestFormData } from "@/app/types/RequestFormData";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const RequestForm = () => {
  const router = useRouter();
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [namePronunciation, setNamePronunciation] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const data: RequestFormData = {
    company,
    name,
    namePronunciation,
    email,
    emailConfirm,
    phoneNumber,
    message,
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    sessionStorage.setItem(
      sessionStorageKey.REQUEST_DATA,
      JSON.stringify(data)
    );

    router.push(Routes.REQUEST_CONFIRM);
  };

  useConfirmLeavingPrompt(data);

  return (
    <form
      onSubmit={onSubmit}
      className="bg-card-background-primary pb-23 pl-6 pr-6 pt-17 text-center xl:pl-33 xl:pr-12"
    >
      <p className="mb-17 font-noto-sans-jp text-lg leading-[1.8] text-primary xl:text-xl xl:leading-loose">
        以下のフォームに必要事項をご入力の上、資料をご請求ください。
        <br />
        ご入力いただいたメールアドレスへ、資料のダウンロードリンクをご連絡いたします。
        <br />
        *は必須項目です。
      </p>

      <InfoCard title="工場・倉庫建設ガイド" />

      <div className="-my-7 table w-full border-spacing-y-7 pb-17 pt-21">
        <TextField
          label="会社名*"
          name="Company"
          value={company}
          onChange={({ target }) => setCompany(target.value)}
          required
        />

        <TextField
          label="お名前*"
          name="Name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
        />

        <TextField
          label="ふりがな*"
          name="NamePronunciation"
          value={namePronunciation}
          onChange={({ target }) => setNamePronunciation(target.value)}
          required
        />

        <TextField
          label="メールアドレス*"
          name="Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />

        <TextField
          label="メールアドレス*<br/>（確認用）"
          name="EmailConfirm"
          value={emailConfirm}
          onChange={({ target }) => setEmailConfirm(target.value)}
          required
        />

        <TextField
          label="電話番号*"
          name="PhoneNumber"
          value={phoneNumber}
          onChange={({ target }) => setPhoneNumber(target.value)}
          required
        />

        <TextField
          className="resize-none"
          label="お問い合わせ内容<br/>（任意）"
          name="Message"
          rows={10}
          value={message}
          onChange={({ target }) => setMessage(target.value)}
          required
        />
      </div>

      <Checkbox className="mb-7 justify-center" required>
        <a href={Routes.PRIVACY_POLICY} className="text-hover-primary">
          利用規約
        </a>{" "}
        に同意する
      </Checkbox>

      <Button className="mx-auto">確認する</Button>
    </form>
  );
};
