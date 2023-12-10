const items: {
  img: string;
  imgSp: string;
  label: string;
  description: string[];
}[] = [
  {
    img: "/factories/factory.png",
    imgSp: "/factories/factory-sp.png",
    label: "工場",
    description: ["機械 / 金属 / 鉄鋼", "自動車", "食品", "製薬", "電気機器"],
  },
  {
    img: "/factories/warehouse.png",
    imgSp: "/factories/warehouse-sp.png",
    label: "倉庫",
    description: ["資材", "貯蔵槽", "農業", "物流", "冷凍"],
  },
  {
    img: "/factories/facility.png",
    imgSp: "/factories/facility-sp.png",
    label: "大型店舗・施設",
    description: [
      "飲食店",
      "スーパーマーケット",
      "ドラッグストア",
      "ホームセンター",
      "体育館 / 室内練習場",
    ],
  },
];

export default items;
