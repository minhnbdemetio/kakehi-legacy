"use client";

import PageTitle from "@/app/components/PageTitle";
import React from "react";
import "./style.scss";

import ContactSubmitForm from "@/app/organisms/ContactSubmitForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

interface IProps {}

const Contact: React.FC<IProps> = () => {
  return (
    <div className="contact mx-7 mt-[75px] md:mt-[101.5px] xxl:mt-39.1/3 xxl:pb-40">
      <div>
        <PageTitle title="お問い合わせ" subTitle="CONTACT" />
      </div>
      <div className=" mx-auto mt-16.2/3 w-fit max-w-full">
        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        >
          <ContactSubmitForm />
        </GoogleReCaptchaProvider>
      </div>
    </div>
  );
};

export default Contact;
