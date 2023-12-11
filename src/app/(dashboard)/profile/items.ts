const items: {
  label: string;
  description: string;
  link?: string;
  mobileDesc?: string;
}[] = [
  {
    label: "会社名",
    description: "株式会社 懸樋工務店",
    link: "https://www.kakehi-const.co.jp/",
  },
  {
    label: "住所",
    description: "〒680-1417 鳥取県鳥取市桂見573番地",
    mobileDesc: "〒680-1417\n鳥取県鳥取市桂見573番地",
  },
  { label: "創業", description: "1954年3月1日" },
  { label: "代表取締役社長", description: "懸樋義樹" },
  { label: "資本金", description: "8980万円" },
  { label: "年間売上高", description: "20億円以上" },
  { label: "従業員", description: "46人" },
  {
    label: "事業内容",
    description:
      "建物の設計施工、土木工事の施工、ゴルフ練習場「グリーンゴルフ21」の運営",
    mobileDesc:
      "建物の設計施工\n土木工事の施工\nゴルフ練習場「グリーンゴルフ21」の運営",
  },
];

export default items;
