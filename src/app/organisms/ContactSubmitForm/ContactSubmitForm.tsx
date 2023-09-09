"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./responsive.css";
import "./style.scss";

import { yupResolver } from "@hookform/resolvers/yup";

import ContactForm from "../ContactForm";
import ContactFormReview from "../ContactFormReview";

import Yup from '../../yupGlobal';
import { FORM_VALIATIONS } from "@/app/constants/forms";

const summitData = async () => {
  return new Promise((res) => setTimeout(res, 1000));
};



interface IProps { }

const schema = Yup.object().shape({
  companyName: Yup.string().required(FORM_VALIATIONS.REQUIRED),
  name: Yup.string().required(FORM_VALIATIONS.REQUIRED),
  furigana: Yup.string().required(FORM_VALIATIONS.REQUIRED),
  email: Yup.string()
    .required(FORM_VALIATIONS.REQUIRED)
    .email(FORM_VALIATIONS.INVALID_EMAIL),
  confirmationEmail: Yup.string()
    .required(FORM_VALIATIONS.REQUIRED)
    .email(FORM_VALIATIONS.INVALID_EMAIL)
    .equals([Yup.ref("email")], FORM_VALIATIONS.PRIVACY_ACCEPT_REQUIRED),
  phone: (Yup.string() as any).required(FORM_VALIATIONS.REQUIRED).jpPhone(FORM_VALIATIONS.INVALID_PHONE),
  content: Yup.string().required(FORM_VALIATIONS.REQUIRED),
  acceptPolicy: Yup.boolean().oneOf([true], FORM_VALIATIONS.REQUIRED),
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
