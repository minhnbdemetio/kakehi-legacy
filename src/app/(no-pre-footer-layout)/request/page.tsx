import { InfoContainer } from "@/app/components/InfoContainer";
import { InfoHeading } from "@/app/components/InfoHeading";
import { RequestForm } from "@/app/components/RequestForm";

export default function RequestPage() {
  return (
    <InfoContainer className="space-y-17 pb-33 pt-[75px] md:pt-[150px] xxl:pt-[118px]">
      <InfoHeading subtitle="DOCUMENT" title="資料請求" />
      <RequestForm />
    </InfoContainer>
  );
}
