import { Routes } from "../constants/routes";

const items: {
  label: string;
  link: string;
}[] = [
  {
    label: "システム建築とは",
    link: `${Routes.TOP}#About`,
  },
  {
    label: "施工実績",
    link: `${Routes.TOP}#Work`,
  },
  {
    label: "お問い合わせからの流れ",
    link: `${Routes.TOP}#Flow`,
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
