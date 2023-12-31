"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import "./responsive.css";
import "./style.scss";

import { yupResolver } from "@hookform/resolvers/yup";

import ContactForm from "../ContactForm";
import ContactFormReview from "../ContactFormReview";

import Yup from "../../yupGlobal";
import { formValidationMessage } from "@/app/constants/forms";
import { sendContactEmail } from "@/app/utils/queries/email";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

interface IProps {}

const schema = Yup.object().shape({
  companyName: Yup.string().required(formValidationMessage.REQUIRED),
  name: Yup.string().required(formValidationMessage.REQUIRED),
  furigana: Yup.string()
    .required(formValidationMessage.REQUIRED)
    .hiragana(formValidationMessage.HIRAGANA),
  email: Yup.string()
    .required(formValidationMessage.REQUIRED)
    .email(formValidationMessage.INVALID_EMAIL),
  confirmationEmail: Yup.string()
    .required(formValidationMessage.REQUIRED)
    .email(formValidationMessage.INVALID_EMAIL)
    .equals(
      [Yup.ref("email")],
      formValidationMessage.INVALID_CONFIRMATION_EMAIL
    ),
  phone: Yup.string()
    .required(formValidationMessage.REQUIRED)
    .jpPhone(formValidationMessage.INVALID_PHONE),
  content: Yup.string().required(formValidationMessage.REQUIRED),
  acceptPolicy: Yup.boolean().oneOf(
    [true],
    formValidationMessage.CHECKBOX_REQUIRED
  ),
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
      confirmationEmail: "",
      phone: "",
      content: "",
      acceptPolicy: false,
    },
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    if (executeRecaptcha) {
      console.debug("handle recapcha ");
      executeRecaptcha();
    }
  }, [executeRecaptcha]);

  const handleSubmit = async () => {
    try {
      const values = form.getValues();
      if (executeRecaptcha) {
        const token = await executeRecaptcha();
        await sendContactEmail({
          email: values.email,
          companyName: values.companyName,
          content: values.content,
          furigana: values.furigana || "",
          phone: values.phone || "",
          name: values.name,
          token,
        });
      }
      setSubmitted(true);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    } catch (e) {
      console.error(e);
      alert("Something went wrong! Please try again.");
    }
  };

  const changePage = useCallback((page: number) => {
    setStage(page);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  return (
    <div>
      {stage === STAGES.FORM && (
        <ContactForm next={() => changePage(STAGES.REVIEW)} form={form} />
      )}
      {stage === STAGES.REVIEW && (
        <ContactFormReview
          onSubmit={handleSubmit}
          submitted={submitted}
          back={() => changePage(STAGES.FORM)}
          data={form.getValues() as any}
        />
      )}
    </div>
  );
};

export default ContactSubmitForm;
