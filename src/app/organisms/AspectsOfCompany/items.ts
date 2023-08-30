const items: {
  firstTitle: string;
  secondTitle: string;
  subtitle: string;
  titlePosition: "right" | "left";
  img: string;
  items: {
    label?: string;
    description: string;
  }[];
}[] = [
  {
    img: "/advantages.jpg",
    firstTitle: `システム建築が`,
    secondTitle: "工場・倉庫に最適 な理由",
    items: [
      {
        label: "ローコスト",
        description:
          "屋根・母屋・フレームの一体化構造により、低コストを実現。要望に沿ったスピーディーな設計が可能です。",
      },
      {
        label: "高品質",
        description:
          "規格化された部材と工法を用いるシステム建築は、安心の品質保証。耐震性や耐久性にも優れています。",
      },
      {
        label: "大空間",
        description:
          "最大無柱スパン60m、中間柱有りで最大120mの大空間を実現。天井走行クレーンの設置にも対応します。",
      },
      {
        label: "短工期",
        description: `合理的な設計・生産システムにより、在来工法に比べて、\n工期を15％～20％短縮できます。`,
      },
    ],
    subtitle: "advantages",
    titlePosition: "right",
  },
  {
    img: "/strength-image.jpg",
    firstTitle: `懸樋工務店の強み`,
    secondTitle: "一貫したサービス の提供",
    items: [
      {
        label: "土地探し",
        description:
          "土地探しの説明文が入ります。土地探しの説明文が入ります。土地探しの説明文が入ります。",
      },
      {
        label: "設計",
        description:
          "設計に関する説明文が入ります。設計に関する説明文が入ります。一級建築士在籍数9名。",
      },
      {
        label: "施工",
        description:
          "施工に関する説明文が入ります。施工に関する説明文が入ります。施工に関する説明文が入ります。",
      },
      {
        label: `アフター
メンテナンス`,
        description:
          "アフターメンテナンスに関する説明文が入ります。アフターメンテナンスに関する説明文が入ります。",
      },
    ],
    subtitle: "STRENGTH",
    titlePosition: "left",
  },
  {
    img: "/history-img.jpg",
    firstTitle: `懸樋工務店の,`,
    secondTitle: "歴史と実績",
    items: [
      {
        description:
          "\n創業1954年 鳥取に根ざして60年以上。年間契約数300件以上。創業1954年 鳥取に根ざして60年以上。年間契約数300件以上。\n ",
      },
    ],
    subtitle: "HISTORY",
    titlePosition: "right",
  },
];

export default items;
