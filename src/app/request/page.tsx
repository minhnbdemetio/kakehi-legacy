import { InfoContainer } from "../components/InfoContainer";
import { InfoHeading } from "../components/InfoHeading";
import { RequestForm } from "../components/RequestForm";

export default function RequestPage() {
  return (
    <InfoContainer className="space-y-17 pt-40 pb-33">
      <InfoHeading subtitle="DOCUMENT" title="資料請求" />
      <RequestForm />
    </InfoContainer>
  );
}
