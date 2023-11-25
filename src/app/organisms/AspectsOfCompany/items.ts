const items: {
  firstTitle: string;
  secondTitle: string;
  subtitle: string;
  titlePosition: "right" | "left";
  img: string;
  className: string;
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
          "部材の標準化と少部材化を図り、コスト削減を実現。蓄積されたデータを基に、初期過程から高精度の見積りが可能です。",
      },
      {
        label: "高品質",
        description:
          "部材と工法の標準化により品質の安定性を確保。屋根断熱性能は高層ビルにも用いられる外壁材ALCの約2倍。耐震性や耐久性にも優れています。",
      },
      {
        label: "大空間",
        description:
          "橋梁などに使用される高張力材を採用し、最大無柱スパン60mを実現。さらに、中間柱を設けることで最大120mの大空間の構築も可能です。",
      },
      {
        label: "短工期",
        description: `設計から施工までの工程をシステム化。在来工法に比べ、工期をおよそ15%〜20%短縮できます。※建物の仕様による`,
      },
    ],
    subtitle: "advantages",
    titlePosition: "right",
    className: "",
  },
  {
    img: "/strength-image.jpg",
    firstTitle: `懸樋工務店の強み`,
    secondTitle: "一貫したサービス の提供",
    items: [
      {
        label: "土地探し",
        description:
          "宅地建物取引士の資格を有するスタッフが、土地探しからお手伝いいたします。立地条件や地域環境など、ご希望の条件をお聞かせください。",
      },
      {
        label: "設計",
        description:
          "設計部を設けた弊社には、10名もの一級建築士が在籍しています。お客様との入念なヒアリングを基に、最適な工場・倉庫を設計いたします。",
      },
      {
        label: "施工",
        description:
          "住宅からビル・工場・商業施設まで、あらゆる建物の建設で得られた豊富な経験と実績を基に、信頼性の高い建物をお届けいたします。",
      },
      {
        label: `アフター
メンテナンス`,
        description:
          "私たちは建物の完成からがお客様との「本当のお付き合い」が始まると考えています。建物を長きにわたり安心してご利用いただけるよう、保守管理のお手伝いをいたします。",
      },
    ],
    subtitle: "STRENGTH",
    titlePosition: "left",
    className: "xl:mt-20",
  },
  {
    img: "/history-img.jpg",
    firstTitle: `懸樋工務店の`,
    secondTitle: "歴史と実績",
    items: [
      {
        description:
          "創業1954年。「お客様の懸け橋に」をコンセプトに、地域に根差す私たちは、多様な建物の建設により、鳥取を彩ってきました。年間の平均売上は20億円、300件以上の案件に対応しています。",
      },
    ],
    subtitle: "HISTORY",
    titlePosition: "right",
    className: "xl:mt-[51px]",
  },
];

export default items;
