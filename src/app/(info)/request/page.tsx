import { InfoContainer } from "@/app/components/InfoContainer";
import { InfoHeading } from "@/app/components/InfoHeading";
import { RequestForm } from "@/app/components/RequestForm";
import { ReactElement } from "react";

export default function RequestPage() {
  return (
    <InfoContainer className="space-y-17 pb-33 pt-40">
      <InfoHeading subtitle="DOCUMENT" title="資料請求" />
      <RequestForm />
    </InfoContainer>
  );
}
