"use client";

import { formValidationMessage } from "@/app/constants/forms";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { InfoCard } from "../InfoCard";
import { TextField } from "../TextField";
import { Routes } from "@/app/constants/routes";
import { sessionStorageKey } from "@/app/constants/storage";
import { useConfirmLeavingPrompt } from "@/app/hooks/useConfirmLeavingPrompt";
import Yup from "@/app/yupGlobal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSessionStorage } from "@/app/hooks/useSessionStorage";
import { RequestFormData } from "@/app/types/RequestFormData";
import clsx from "clsx";

const schema = Yup.object().shape({
  company: Yup.string().required(formValidationMessage.REQUIRED),
  name: Yup.string().required(formValidationMessage.REQUIRED),
  namePronunciation: Yup.string()
    .required(formValidationMessage.REQUIRED)
    .hiragana(formValidationMessage.HIRAGANA),
  email: Yup.string()
    .required(formValidationMessage.REQUIRED)
    .email(formValidationMessage.INVALID_EMAIL),
  emailConfirm: Yup.string()
    .required(formValidationMessage.REQUIRED)
    .email(formValidationMessage.INVALID_EMAIL)
    .equals(
      [Yup.ref("email")],
      formValidationMessage.INVALID_CONFIRMATION_EMAIL
    ),
  phoneNumber: (Yup.string() as any)
    .required(formValidationMessage.REQUIRED)
    .jpPhone(formValidationMessage.INVALID_PHONE),
  message: Yup.string(),
  acceptPolicy: Yup.boolean().oneOf(
    [true],
    formValidationMessage.CHECKBOX_REQUIRED
  ),
});

export const RequestForm = () => {
  const router = useRouter();
  const requestData = useSessionStorage(sessionStorageKey.REQUEST_DATA, null);
  const parsedData = useMemo<RequestFormData | null>(
    () => (requestData ? JSON.parse(requestData) : null),
    [requestData]
  );

  const form = useForm({
    defaultValues: {
      company: "",
      name: "",
      namePronunciation: "",
      email: "",
      emailConfirm: "",
      phoneNumber: "",
      message: "",
      acceptPolicy: false,
    },
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = useCallback(
    (data: any) => {
      sessionStorage.setItem(
        sessionStorageKey.REQUEST_DATA,
        JSON.stringify(data)
      );

      router.push(Routes.REQUEST_CONFIRM);
    },
    [router]
  );

  useEffect(() => {
    form.reset({
      company: parsedData?.company,
      name: parsedData?.name,
      namePronunciation: parsedData?.namePronunciation,
      email: parsedData?.email,
      emailConfirm: parsedData?.emailConfirm,
      phoneNumber: parsedData?.phoneNumber,
      message: parsedData?.message,
      acceptPolicy: parsedData?.acceptPolicy,
    });
  }, [parsedData, form]);

  useConfirmLeavingPrompt(form.getValues());

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="bg-card-background-primary pb-23 pl-[25px] pr-[27px] pt-17 md:px-[75px] xxl:pl-33 xxl:pr-12"
    >
      <p className="xxl:leading-loose mb-17 text-left text-lg font-[500] leading-[1.8] text-primary md:text-[21px] md:font-normal xxl:text-center xxl:text-xl">
        以下のフォームに必要事項をご入力の上、資料をご請求ください。
        <br className="hidden xxl:block" />
        ご入力いただいたメールアドレスへ、資料のダウンロードリンクをご連絡いたします。
        <br className="hidden xxl:block" />
        *は必須項目です。
      </p>

      <InfoCard title="工場・倉庫建設ガイド" />

      <div className="mx-auto table w-full space-y-[20px] py-[50px] md:max-w-[500px] md:pb-[75px] md:pt-[67.38px] xxl:max-w-full xxl:border-spacing-y-7 xxl:px-0 xxl:pb-[50px] xxl:pt-[64px]">
        <Controller
          name="company"
          control={form.control}
          render={({ field, fieldState }) => (
            <TextField
              label="会社名*"
              {...field}
              error={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <TextField
              label="お名前*"
              {...field}
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="namePronunciation"
          control={form.control}
          render={({ field, fieldState }) => (
            <TextField
              label="ふりがな*"
              {...field}
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <TextField
              label="メールアドレス*"
              {...field}
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="emailConfirm"
          control={form.control}
          render={({ field, fieldState }) => (
            <TextField
              label={`メールアドレス*\n（確認用）`}
              {...field}
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="phoneNumber"
          control={form.control}
          render={({ field, fieldState }) => (
            <TextField
              label="電話番号*"
              {...field}
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <TextField
              className="resize-none"
              label={`お問い合わせ内容\n（任意）`}
              rows={10}
              {...field}
              error={fieldState.error?.message}
            />
          )}
        />
      </div>

      <Controller
        name="acceptPolicy"
        control={form.control}
        render={({ field, fieldState }) => (
          <Checkbox
            className="mb-7 justify-center !text-[15px] md:mb-8 xxl:mb-7 xxl:!text-xl"
            error={fieldState.error?.message}
            onChange={field.onChange}
            checked={field.value}
          >
            <a
              href={Routes.PRIVACY_POLICY}
              target="_blank"
              className={clsx(
                "text-[15px] font-medium leading-xl text-hover-primary",
                "md:text-lg md:leading-lg",
                "xxl:text-xl xxl:font-normal",
                "hover:underline hover:decoration-hover-primary"
              )}
            >
              個人情報保護方針
            </a>{" "}
            に同意する
          </Checkbox>
        )}
      />

      <div className="text-center">
        <Button
          className={clsx(
            "mx-auto !w-[150px] text-[20px]",
            "md:!w-[200px] md:text-1.5xl md:font-bold",
            "xxl:!w-[330px] xxl:text-2xl xxl:font-medium"
          )}
        >
          確認する
        </Button>
      </div>
    </form>
  );
};
