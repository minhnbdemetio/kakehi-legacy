"use client";

import { InfoContainer } from "@/app/components/InfoContainer";
import { InfoHeading } from "@/app/components/InfoHeading";
import { RequestConfirmForm } from "@/app/components/RequestConfirmForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function RequestPage() {
  return (
    <InfoContainer className="space-y-17 pb-33 pt-40">
      <InfoHeading subtitle="DOCUMENT" title="資料請求" />

      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
      >
        <RequestConfirmForm />
      </GoogleReCaptchaProvider>
    </InfoContainer>
  );
}
