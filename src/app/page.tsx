import Header from "./components/Header/Header";
import BackgroundWithSlogan from "./components/BackgroundWithSlogan";
import FloatingButtons from "./components/FloatingButtons";
import MobileSidebar from "./components/MobileSidebar";

export default function Home() {
  return (
    <>
      <Header />
      <BackgroundWithSlogan src="/index-background.jpg" >
        <h1 className="text-3xl">システム建築で、</h1>
        <h1 className="text-3xl">工場・倉庫に</h1>
        <h1 className="text-3xl">最適な答えを。</h1>
      </BackgroundWithSlogan>
      <FloatingButtons />

      <MobileSidebar />
    </>
  );
}
