import { Button } from "@/app/components/Button";
import { RequestConfirmForm } from "@/app/components/RequestConfirmForm";
import { RequestConfirmField } from "@/app/components/RequestConfirmForm/RequestConfirmField";
import { Routes } from "@/app/constants/routes";
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
      <div className="contact-form pb-17.1/3">
        <div className="pt-16.2/3">
          {submitted ? (
            <p className="whitespace-pre text-center text-xl">{`以下の内容にて、お問い合わせをお受付いたしました。\n確認後に、担当者よりご連絡いたします。`}</p>
          ) : (
            <p className="text-center text-xl">
              入力した内容をご確認ください。
            </p>
          )}
        </div>
        <div className="contact-form-body w-full space-y-7 px-5 pb-24 pt-14 xl:table xl:border-spacing-y-26 xl:px-33.1/3">
          <RequestConfirmField label="会社名" content={data.companyName} />
          <RequestConfirmField label="お名前" content={data.name} />
          <RequestConfirmField label="ふりがな" content={data.furigana} />
          <RequestConfirmField label="メールアドレス" content={data.email} />
          {!submitted && (
            <RequestConfirmField
              label={`メールアドレス\n（確認用）`}
              content={data.confirmationEmail}
            />
          )}
          <RequestConfirmField label="電話番号" content={data.phone} />
          <RequestConfirmField
            multiline
            label="お問い合わせ内容"
            content={data.content}
          />
        </div>

        {!submitted ? (
          <div className="flex justify-center gap-7 px-5 xl:gap-14">
            <Button
              onClick={back}
              className="relative flex flex-col-reverse items-center justify-center gap-y-2 bg-black px-7 sm:flex-row sm:justify-between"
            >
              <img
                className="-scale-x-100"
                src="/icons/arrow-right-icon.png"
                alt=""
                width={50}
                height={17}
              />
              <span>戻る</span>
              <span className="sm:w-[50px]"></span>
            </Button>
            <Button
              onClick={handleSubmit}
              className="relative flex flex-col items-center justify-center gap-y-2 px-7 sm:flex-row sm:justify-between"
            >
              <span className="sm:w-[50px]"></span>
              <span>{submitting ? "送信中..." : "送信する"}</span>
              <img
                src="/icons/arrow-right-icon.png"
                alt=""
                width={50}
                height={17}
              />
            </Button>
          </div>
        ) : null}
      </div>
      {submitted ? (
        <div className="mt-33.1/3 pb-33.1/3 text-center">
          <Button href={Routes.TOP}>トップページへ戻る</Button>
        </div>
      ) : null}
    </div>
  );
};

export default ContactFormReview;
