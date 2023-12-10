import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Controller } from "react-hook-form";
import { TextField } from "@/app/components/TextField";
import { Checkbox } from "@/app/components/Checkbox";
import { Routes } from "@/app/constants/routes";
import { Button } from "@/app/components/Button";

interface IProps {
  form: UseFormReturn<
    {
      confirmationEmail?: any;
      phone?: any;
      acceptPolicy?: boolean | undefined;
      companyName: string;
      name: string;
      furigana: string;
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
    <div className="contact-form mb-33.1/3">
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="pl-[25px] pr-[27px] pt-16.2/3 xl:px-0">
          <p className="whitespace-pre-wrap text-left text-lg  font-[500]  leading-[36px] xl:text-center xl:text-xl ">
            {`以下のフォームに必要事項をご入力の上、お問い合わせください。\n*は必須項目です。`}
          </p>
        </div>
        <div className=" contact-form-body table w-full space-y-[20px] pb-5 pl-[25px] pr-[27px] pt-[50px]  xl:border-spacing-y-7 xl:px-14 xl:pb-16 xl:pl-33.1/3">
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
              />
            )}
          />
        </div>
        <Controller
          control={form.control}
          name="acceptPolicy"
          render={({ field, fieldState }) => (
            <div className="mb-7 mt-[35px] xl:mt-[0px] ">
              <Checkbox
                checked={field.value}
                error={fieldState.error?.message}
                onChange={field.onChange}
                className="justify-center"
              >
                <a
                  href={Routes.PRIVACY_POLICY}
                  target="_blank"
                  className="text-[15px] font-[500] text-hover-primary hover:underline hover:decoration-hover-primary xl:text-xl xl:font-normal"
                >
                  個人情報保護方針
                </a>{" "}
                に同意する
              </Checkbox>
            </div>
          )}
        />

        <div className="flex justify-center pb-[75px] xl:pb-23.1/3">
          <Button className="mx-auto !w-[150px] text-[20px] xl:!w-[330px] xl:text-[21px] ">
            確認する
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
