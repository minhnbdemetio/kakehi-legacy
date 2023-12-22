import { PropsWithChildren } from "react";
import { Layout } from "../components/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "システム建築｜鳥取に低価格で工場と倉庫を建てるなら懸樋工務店",
  description:
    "建築材料の標準化と設計から施工までの工程のシステム化により、工期の短縮とコストの抑制を実現するシステム建築。懸樋工務店では、お客様のご要望と向き合い、本当にお役立ていただける建物を提供いたします。",
  keywords:
    "鳥取,システム建築,工場,倉庫,物流,店舗,施設,商業施設,飲食店,スーパーマーケット,ドラッグストア,ホームセンター,スポーツ施設,体育館,室内練習場,オープンファクトリー,建物,建築,建設,建てる,新築,増築,改築,土地探し,設計,施工,アフターメンテナンス,メンテナンス,保守,保守管理,相談,問い合わせ,見積もり,費用,コスト,低価格",
  authors: { name: "株式会社 懸樋工務店" },
  openGraph: {
    title: "システム建築｜鳥取に低価格で工場と倉庫を建てるなら懸樋工務店",
    description:
      "建築材料の標準化と設計から施工までの工程のシステム化により、工期の短縮とコストの抑制を実現するシステム建築。懸樋工務店では、お客様のご要望と向き合い、本当にお役立ていただける建物を提供いたします。",
    images: {
      url: "/kakehi_system_construction.jpg",
    },
  },
  twitter: {
    title: "システム建築｜鳥取に低価格で工場と倉庫を建てるなら懸樋工務店",
    description:
      "建築材料の標準化と設計から施工までの工程のシステム化により、工期の短縮とコストの抑制を実現するシステム建築。懸樋工務店では、お客様のご要望と向き合い、本当にお役立ていただける建物を提供いたします。",
    images: {
      url: "/kakehi_system_construction.jpg",
    },
  },
};

export default function DashboardLayout({ children }: PropsWithChildren) {
  return <Layout showPreFooter>{children}</Layout>;
}
