import PageTitle from "@/app/components/PageTitle";
import React from "react";
import "./style.scss";

import { useForm } from "react-hook-form";
import ContactSubmitForm from "@/app/organisms/ContactSubmitForm";

interface IProps { }

const Contact: React.FC<IProps> = () => {
  return (
    <div className="contact mx-7 mt-15 xl:mt-39.1/3 xl:pb-40">
      <div>
        <PageTitle title="お問い合わせ" subTitle="CONTACT" />
      </div>
      <div className=" mx-auto mt-16.2/3 w-fit">
        <ContactSubmitForm />
      </div>
    </div>
  );
};

export default Contact;
