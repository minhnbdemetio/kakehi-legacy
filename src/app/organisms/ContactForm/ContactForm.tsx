import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Controller } from "react-hook-form";
import { TextField } from "@/app/components/TextField";
import { Checkbox } from "@/app/components/Checkbox";
import { Routes } from "@/app/constants/routes";
import { Button } from "@/app/components/Button";
import clsx from "clsx";

interface IProps {
  form: UseFormReturn<
    {
      confirmationEmail?: any;
      phone?: any;
      acceptPolicy?: boolean | undefined;
      companyName: string;
      name: string;
      furigana?: string;
      email: string;
      content: string;
    },
    any,
    undefined
  >;

  next: () => void;
}

const ContactForm: React.FC<IProps> = ({ form, next }) => {
  const handleSubmit = (data: any) => {
    next();
  };

  return (
    <div className="contact-form mb-33.1/3 md:mb-50 xxl:mb-40">
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="pl-[25px] pr-[27px] pt-16.2/3 md:px-[75px] xxl:px-0">
          <p
            className={clsx(
              "whitespace-pre-wrap text-left text-lg font-medium leading-lg",
              "md:text-1.5xl md:font-normal",
              "xxl:text-center xxl:text-xl"
            )}
          >
            {`以下のフォームに必要事項をご入力の上、お問い合わせください。\n*は必須項目です。`}
          </p>
        </div>
        <div
          className={clsx(
            "contact-form-body mx-auto table w-full space-y-[20px] pb-5 pl-[25px] pr-[27px] pt-[50px]",
            "md:box-content md:max-w-[500px]",
            "xxl:max-w-full xxl:border-spacing-y-7 xxl:px-14 xxl:pb-16 xxl:pl-33.1/3 xxl:pt-12"
          )}
        >
          <Controller
            name="companyName"
            control={form.control}
            render={({ field, fieldState }) => (
              <TextField
                label="会社名*"
                error={fieldState.error?.message}
                name={field.name}
                onChange={field.onChange}
                value={field.value}
                ref={field.ref}
              />
            )}
          />
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <TextField
                label="お名前*"
                error={fieldState.error?.message}
                name={field.name}
                onChange={field.onChange}
                value={field.value}
                ref={field.ref}
              />
            )}
          />
          <Controller
            name="furigana"
            control={form.control}
            render={({ field, fieldState }) => (
              <TextField
                error={fieldState.error?.message}
                label="ふりがな*"
                name={field.name}
                onChange={field.onChange}
                value={field.value}
                ref={field.ref}
              />
            )}
          />
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <TextField
                error={fieldState.error?.message}
                label="メールアドレス*"
                name={field.name}
                onChange={field.onChange}
                value={field.value}
                ref={field.ref}
              />
            )}
          />
          <Controller
            name="confirmationEmail"
            control={form.control}
            render={({ field, fieldState }) => (
              <TextField
                error={fieldState.error?.message}
                label={`メールアドレス*\n（確認用)`}
                name={field.name}
                onChange={field.onChange}
                value={field.value}
                ref={field.ref}
              />
            )}
          />
          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <TextField
                error={fieldState.error?.message}
                label="電話番号*"
                name={field.name}
                onChange={field.onChange}
                value={field.value}
                ref={field.ref}
              />
            )}
          />
          <Controller
            name="content"
            control={form.control}
            render={({ field, fieldState }) => (
              <TextField
                error={fieldState.error?.message}
                label="お問い合わせ内容*"
                name={field.name}
                multiple
                rows={9}
                onChange={field.onChange}
                value={field.value}
                ref={field.ref}
              />
            )}
          />
        </div>
        <Controller
          control={form.control}
          name="acceptPolicy"
          render={({ field, fieldState }) => (
            <div className="mb-7 mt-[35px] md:mb-8 md:mt-20 xxl:mb-7 xxl:mt-[0px] ">
              <Checkbox
                checked={field.value}
                error={fieldState.error?.message}
                onChange={field.onChange}
                className={clsx(
                  "justify-center text-md2 font-medium",
                  "md:text-lg md:leading-lg",
                  "xxl:text-xl xxl:font-normal"
                )}
              >
                <a
                  href={Routes.PRIVACY_POLICY}
                  target="_blank"
                  className={clsx(
                    "text-hover-primary",
                    "hover:underline hover:decoration-hover-primary"
                  )}
                >
                  個人情報保護方針
                </a>{" "}
                に同意する
              </Checkbox>
            </div>
          )}
        />

        <div className="flex justify-center pb-[75px] xxl:pb-23.1/3">
          <Button
            className={clsx(
              "mx-auto !w-[150px] max-w-full text-1.5xl",
              "md:!w-[200px] md:font-bold",
              "xxl:!w-[330px] xxl:text-2xl xxl:font-medium"
            )}
          >
            確認する
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
