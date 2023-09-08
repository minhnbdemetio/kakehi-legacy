"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./responsive.css";
import "./style.scss";

import { yupResolver } from "@hookform/resolvers/yup";

import * as Yup from "yup";
import ContactForm from "../ContactForm";
import ContactFormReview from "../ContactFormReview";

const summitData = async () => {
  return new Promise((res) => setTimeout(res, 1000));
};

Yup.addMethod(Yup.string, "jpPhone", function (message) {
  const JP_PHONE_REGEX = /^\d{2}(?:-\d{4}-\d{4}|\d{8}|\d-\d{3,4}-\d{4})$/;
  return this.matches(JP_PHONE_REGEX, { message, excludeEmptyString: true });
});

interface IProps {}

const schema = Yup.object().shape({
  companyName: Yup.string().required("会社名を空白にすることはできません。"),
  name: Yup.string().required("名前を空白のままにすることはできません。"),
  furigana: Yup.string().required("ふりがなを空にすることはできません。"),
  email: Yup.string()
    .required("メールを空にすることはできません。")
    .email("電子メールの形式が無効です。"),
  confirmedEmail: Yup.string()
    .required("確認メールを空にすることはできません。")
    .email("メールの形式が無効であることを確認してください。")
    .equals([Yup.ref("email")], "メールアドレスが合わない！"),
  phone: (Yup.string() as any).jpPhone("電話が無効です!"),
  content: Yup.string().required("コンテンツは空であってはなりません。"),
  acceptPolicy: Yup.bool(),
});

const STAGES = {
  FORM: 1,
  REVIEW: 2,
  COMPLETE: 3,
};

const ContactSubmitForm: React.FC<IProps> = () => {
  const [stage, setStage] = useState(STAGES.FORM);

  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    defaultValues: {
      companyName: "",
      name: "",
      furigana: "",
      email: "",
      confirmedEmail: "",
      phone: "",
      content: "",
      acceptPolicy: false,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async () => {
    console.debug(form.getValues());
    await summitData();
    setSubmitted(true);
  };

  return (
    <div>
      {stage === STAGES.FORM && (
        <ContactForm next={() => setStage(STAGES.REVIEW)} form={form} />
      )}
      {stage === STAGES.REVIEW && (
        <ContactFormReview
          onSubmit={handleSubmit}
          submitted={submitted}
          back={() => setStage(STAGES.FORM)}
          data={form.getValues() as any}
        />
      )}
    </div>
  );
};

export default ContactSubmitForm;
