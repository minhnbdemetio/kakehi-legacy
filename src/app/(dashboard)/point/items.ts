const items: {
  label: string;
  firstTitle: string;
  secondTitle: string;
  img: string;
  imgSp: string;
  position: "left" | "right";
  descriptions: { label?: string; description: string }[];
}[] = [
  {
    label: "POINT 01",
    firstTitle: "ポイント 01",
    secondTitle: "設計・施工の依頼先",
    img: "/points/point-1.jpg",
    imgSp: "/points/point-sp-1.png",
    position: "right",
    descriptions: [
      {
        description:
          "工場・倉庫の建築では、設計と施工の依頼先の選択が重要です。同じ業種でも、企業ごとに異なる社風やノウハウがあり、ラインの配置や倉庫の収納方法も異なります。お客様の用途に適応した品質やスケジュールを確保するために、一元的な設計と施工の依頼が必要となります。",
      },
    ],
  },
  {
    label: "POINT 02",
    firstTitle: "ポイント 02",
    secondTitle: "建物の現状把握",
    img: "/points/point-2.jpg",
    imgSp: "/points/point-sp-2.png",

    position: "left",

    descriptions: [
      {
        description:
          "同一の敷地内に工場・倉庫を建築したり、既存の建物を拡張する増築では、事前の調査が必要です。新築後の改修や法改正が行われている場合は、増築する建物の構造や運用開始までのスケジュールに影響が及ぶ可能性があります。このため、早い段階での建物の現状把握が大切です。",
      },
    ],
  },
  {
    label: "POINT 03",
    firstTitle: "ポイント 03",
    secondTitle: "建物の目的",
    img: "/points/point-3.jpg",
    imgSp: "/points/point-sp-3.png",

    position: "right",

    descriptions: [
      {
        description:
          "生産や収納を目的とする工場・倉庫の建築では、これまでコスト削減が重視されてきました。しかし、社員ファーストの現在では、断熱性能や空調設備などの環境整備による、人材確保や定着率を意識した建物づくりが重要です。また、地域貢献を目的としたオープンファクトリーという形態も増えています。",
      },
    ],
  },
  {
    label: "POINT 04",
    firstTitle: "ポイント 04",
    secondTitle: "建設地の環境",
    img: "/points/point-4.jpg",
    imgSp: "/points/point-sp-4.png",

    position: "left",

    descriptions: [
      {
        description:
          "工場・倉庫の建築費用を算出する際の目安は坪単価です。また、建築予定地の地盤や、積雪や風圧などの気象条件により建物の構造が変わるため、これらを考慮する必要があります。従って、詳細な建築費用を把握するためには、設計段階までのプロセスを踏んでいただく必要があります。",
      },
    ],
  },
];

export default items;
