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
        className={clsx("contact-form xxl:pb-17.1/3", {
          "mb-33 pb-[75px] md:mb-50 xxl:mb-33": !submitted,
        })}
      >
        <div className="pt-16.2/3 md:px-41.2/3 xxl:px-[100px]">
          {submitted ? (
            <p className=" whitespace-normal pl-[25px] pr-[27px] text-left font-noto-sans-jp-gg text-lg font-[500]  leading-[36px] md:px-0 xxl:whitespace-pre-wrap xxl:text-center xxl:text-xl">{`以下の内容にて、お問い合わせをお受付いたしました。\n確認後に、担当者よりご連絡いたします。`}</p>
          ) : (
            <p className="pl-[25px] pr-[27px] text-left font-noto-sans-jp-gg text-lg font-[500] leading-[36px] text-primary md:px-0 xxl:text-center xxl:text-xl">
              入力した内容をご確認ください。
            </p>
          )}
        </div>
        <div className="contact-form-body mx-auto box-content w-full max-w-full space-y-[20px] pb-24 pl-[25px] pr-[27px] pt-[50px] md:w-[500px] md:space-y-[60px] md:px-[125px] xxl:table xxl:border-spacing-y-26 xxl:px-33.1/3">
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
          <div className="flex justify-center gap-[20px] pl-[25px]  pr-[27px] xxl:gap-14 xxl:px-[148px] ">
            <Button
              onClick={back}
              className="box relative flex flex-col-reverse items-center justify-center !bg-black px-7 md:!w-[200px] md:flex-row md:gap-3 xxl:!w-[330px] xxl:justify-between xxl:gap-y-2"
            >
              <img
                className="hidden shrink-0 -scale-x-100 md:block"
                src="/icons/arrow-right-icon.png"
                alt=""
                width={50}
                height={17}
              />
              <span className="text-1.5xl xxl:text-2xl">戻る</span>
              <span className="hidden xxl:block xxl:w-17"></span>
            </Button>
            <Button
              onClick={handleSubmit}
              className="relative flex flex-col items-center justify-center !py-[0] md:!w-[200px] md:flex-row md:justify-between md:gap-3 xxl:!w-[330px] xxl:gap-y-2 xxl:!p-7"
            >
              <span className="hidden xxl:block xxl:w-17"></span>
              <span className="text-1.5xl xxl:text-2xl">
                {submitting ? "送信中..." : "送信する"}
              </span>
              <img
                src="/icons/arrow-right-icon.png"
                alt=""
                className="hidden shrink-0 md:block"
                width={50}
                height={17}
              />
            </Button>
          </div>
        ) : null}
      </div>
      {submitted ? (
        <div className="mb-33 mt-[50px] text-center md:mb-50 md:mt-25 xxl:mb-33 xxl:mt-33.1/3">
          <Button
            className="!w-[250px] !text-1.5xl md:!w-[300px] xxl:!w-[330px] xxl:!text-2xl"
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
