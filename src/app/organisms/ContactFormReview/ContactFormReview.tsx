import { Button } from "@/app/components/Button";
import { RequestConfirmForm } from "@/app/components/RequestConfirmForm";
import { RequestConfirmField } from "@/app/components/RequestConfirmForm/RequestConfirmField";
import { Routes } from "@/app/constants/routes";
import clsx from "clsx";
import React, { useCallback, useState } from "react";

interface IProps {
  data: {
    name: string;
    companyName: string;
    furigana: string;
    email: string;
    confirmationEmail: string;
    phone: string;
    content: string;
  };

  onSubmit?: () => void;
  submitted?: boolean;
  back?: () => void;
}

const ContactFormReview: React.FC<IProps> = ({
  data,
  onSubmit,
  submitted,
  back,
}) => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = useCallback(async () => {
    if (onSubmit) {
      setSubmitting(true);
      try {
        await onSubmit();
      } catch (e) {
        alert("エラーが発生しました!");
        console.error(e);
      } finally {
        setSubmitting(false);
      }
    }
  }, [onSubmit]);

  return (
    <div>
      <div
        className={clsx("contact-form   xl:pb-17.1/3", {
          "mb-[100px] pb-[75px]": !submitted,
        })}
      >
        <div className="pt-16.2/3">
          {submitted ? (
            <p className=" whitespace-normal pl-[25px] pr-[27px] text-left font-noto-sans-jp-gg text-lg  font-[500] leading-[36px] xl:whitespace-pre-wrap xl:text-center xl:text-xl">{`以下の内容にて、お問い合わせをお受付いたしました。\n確認後に、担当者よりご連絡いたします。`}</p>
          ) : (
            <p className="pl-[25px] pr-[27px] text-left font-noto-sans-jp-gg text-lg font-[500] leading-[36px] text-primary xl:text-center xl:text-xl">
              入力した内容をご確認ください。
            </p>
          )}
        </div>
        <div className="contact-form-body w-full space-y-[20px] pb-24 pl-[25px] pr-[27px] pt-[50px] xl:table xl:border-spacing-y-26 xl:px-33.1/3">
          <RequestConfirmField label="会社名" content={data.companyName} />
          <RequestConfirmField label="お名前" content={data.name} />
          <RequestConfirmField label="ふりがな" content={data.furigana} />
          <RequestConfirmField label="メールアドレス" content={data.email} />
          <RequestConfirmField
            label={`メールアドレス\n（確認用）`}
            content={data.confirmationEmail}
          />
          <RequestConfirmField label="電話番号" content={data.phone} />
          <RequestConfirmField
            multiline
            label="お問い合わせ内容"
            content={data.content}
          />
        </div>

        {!submitted ? (
          <div className="flex justify-center gap-[20px] pl-[25px]  pr-[27px] xl:gap-14 ">
            <Button
              onClick={back}
              className="relative flex flex-col-reverse items-center justify-center gap-y-2 !bg-black px-7 sm:flex-row sm:justify-between"
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
              className="relative flex flex-col items-center justify-center gap-y-2 !px-[30px] !py-[0] sm:flex-row sm:justify-between xl:!p-7"
            >
              <span className="sm:w-[50px]"></span>
              <span className="text-[20px]">
                {submitting ? "送信中..." : "送信する"}
              </span>
              <img
                src="/icons/arrow-right-icon.png"
                alt=""
                className="hidden xl:block"
                width={50}
                height={17}
              />
            </Button>
          </div>
        ) : null}
      </div>
      {submitted ? (
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

export default ContactFormReview;
