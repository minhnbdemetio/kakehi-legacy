import { Routes } from "../constants/routes";

const items: {
  label: string;
  link: string;
}[] = [
  {
    label: "システム建築とは",
    link: "",
  },
  {
    label: "施工実績",
    link: "",
  },
  {
    label: "お問い合わせからの流れ",
    link: Routes.REQUEST,
  },
  {
    label: "工場・倉庫建築のポイント",
    link: Routes.WORK,
  },
  {
    label: "会社概要",
    link: Routes.POINT,
  },
  {
    label: "お役立ち情報",
    link: Routes.PROFILE,
  },
];

export default items;
