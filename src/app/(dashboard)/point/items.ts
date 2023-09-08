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
    secondTitle: "建設場所と建築方法",
    img: "/points/point-2.jpg",
    position: "right",
    descriptions: [
      {
        description:
          "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。",
      },
    ],
  },
  {
    label: "POINT 02",
    firstTitle: "ポイント 02",
    secondTitle: "建築面積と階数",
    img: "/points/point-3.jpg",
    position: "left",

    descriptions: [
      {
        description:
          "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。",
      },
    ],
  },
  {
    label: "POINT 03",
    firstTitle: "ポイント 03",
    secondTitle: "用途",
    img: "/points/point-4.jpg",
    position: "right",

    descriptions: [
      {
        description:
          "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。",
      },
    ],
  },
  {
    label: "POINT 04",
    firstTitle: "ポイント 04",
    secondTitle: "断熱性能",
    img: "/points/point-5.jpg",
    position: "left",

    descriptions: [
      {
        description:
          "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。",
      },
    ],
  },
];

export default items;
