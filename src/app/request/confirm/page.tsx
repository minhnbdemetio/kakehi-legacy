import { InfoContainer } from "../../components/InfoContainer";
import { InfoHeading } from "../../components/InfoHeading";
import { RequestConfirmForm } from "@/app/components/RequestConfirmForm";

export default function RequestPage() {
  return (
    <InfoContainer className="space-y-17 pt-40 pb-33">
      <InfoHeading subtitle="DOCUMENT" title="資料請求" />
      <RequestConfirmForm />
    </InfoContainer>
  );
}
