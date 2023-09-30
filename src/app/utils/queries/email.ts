import axios from "@/app/lib/axiosClient";

export const sendContactEmail = async (data: {
  email: string;
  name: string;
  companyName: string;
  furigana: string;
  phone: string;
  content: string;
  token: string;
}) => {
  await axios.post("/email/contact", data);
};

export const sendDocumentRequestEmail = async (data: {
  email: string;
  name: string;
  companyName: string;
  furigana: string;
  phone: string;
  content: string;
  token: string;
}) => {
  await axios.post("/email/document-request", data);
};
