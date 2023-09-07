import { InfoContainer } from "@/app/components/InfoContainer";
import { InfoHeading } from "@/app/components/InfoHeading";
import { RequestConfirmForm } from "@/app/components/RequestConfirmForm";

export default function RequestPage() {
  return (
    <InfoContainer className="space-y-17 pb-33 pt-40">
      <InfoHeading subtitle="DOCUMENT" title="資料請求" />
      <RequestConfirmForm />
    </InfoContainer>
  );
}
