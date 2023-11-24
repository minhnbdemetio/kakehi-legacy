const items: {
  label: string;
  firstTitle: string;
  secondTitle: string;
  img: string;
  position: "left" | "right";
  descriptions: { label?: string; description: string }[];
}[] = [
  {
    label: "POINT 01",
    firstTitle: "ポイント 01",
    secondTitle: "建築場所と面積",
    img: "/points/point-1.jpg",
    position: "right",
    descriptions: [
      {
        description:
          "土地により建ぺい率と容積率の上限が異なるため、同じ広さでも建築面積と延床面積が変わります。将来的な計画を含めた建物の面積やレイアウトの検討が重要です。",
      },
    ],
  },
  {
    label: "POINT 02",
    firstTitle: "ポイント 02",
    secondTitle: "建物の階数",
    img: "/points/point-2.jpg",
    position: "left",

    descriptions: [
      {
        description:
          "2階建ての場合、階段やエレベーターなどの設置スペースを設ける必要があります。また、基礎や鉄骨のサイズに影響する、2階の積載荷重の算出も不可欠です。",
      },
    ],
  },
  {
    label: "POINT 03",
    firstTitle: "ポイント 03",
    secondTitle: "建物の用途",
    img: "/points/point-3.jpg",
    position: "right",

    descriptions: [
      {
        description:
          "工場・倉庫に加えて事務所などを併設する場合は、建屋内を仕切る壁の設置が必要です。複合的な用途では、騒音を防ぐために、防音への配慮が求められます。",
      },
    ],
  },
  {
    label: "POINT 04",
    firstTitle: "ポイント 04",
    secondTitle: "断熱性能",
    img: "/points/point-4.jpg",
    position: "left",

    descriptions: [
      {
        description:
          "従業員の労働環境整備も大切です。夏は涼しく、冬は暖かく。工場・倉庫の断熱性能は、生産性と企業イメージの向上につながります。",
      },
    ],
  },
];

export default items;
