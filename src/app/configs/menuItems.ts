import { Routes } from "../constants/routes";

const items: {
  label: string;
  link: string;
}[] = [
  {
    label: "システム建築とは",
    link: Routes.TOP,
  },
  {
    label: "施工実績",
    link: Routes.WORK,
  },
  {
    label: "お問い合わせからの流れ",
    link: Routes.CONTACT,
  },
  {
    label: "工場・倉庫建築のポイント",
    link: Routes.POINT,
  },
  {
    label: "会社概要",
    link: Routes.PROFILE,
  },
  {
    label: "お役立ち情報",
    link: Routes.FAQ,
  },
];

export default items;
