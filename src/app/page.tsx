import Image from "next/image";
import variables from './variables.module.scss'
import Header from "./components/Header/Header";
import BackgroundWithSlogan from "./components/BackgroundWithSlogan";
import FloatingButtons from "./components/FloatingButtons";
import './globals.css'

export default function Home() {
  return (
    <>
      <Header />
      <BackgroundWithSlogan src="/index-background.jpg" >
        <h1>システム建築で、</h1>
        <h1>工場・倉庫に</h1>
        <h1>最適な答えを。</h1>
      </BackgroundWithSlogan>
      <FloatingButtons />
    </>
  );
}
