const items: {
  img: string;
  label: string;
  description: string[];
}[] = [
  {
    img: "/factories/factory-1.png",
    label: "工場",
    description: ["機械・金属・鉄鋼", "自動車", "食品", "製薬", "電気機器"],
  },
  {
    img: "/factories/warehouse-2.png",
    label: "倉庫",
    description: ["資材", "貯蔵槽", "農業", "物流", "冷凍"],
  },
  {
    img: "/factories/shop.png",
    label: "大型店舗・施設",
    description: [
      "飲食店",
      "スーパーマーケット",
      "ドラッグストア",
      "ホームセンター",
      "体育館・室内練習場",
    ],
  },
];

export default items;
