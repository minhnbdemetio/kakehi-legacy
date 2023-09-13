import React from "react";
import "./style.scss";
import "./responsive.css";
import DescriptionSection from "@/app/organisms/DescriptionSection";
import PageTitle from "@/app/components/PageTitle";
import ProjectListCaroursel from "@/app/components/ProjectListCaroursel";
import getProjects from "@/app/utils/queries/getProjects";

interface IProps { }

const Work: React.FC<IProps> = async () => {
  const projects = await getProjects();

  return (
    <div className="work-page-container mt-[5px] pb-43.1/3 xl:pb-33.1/3 xl:mt-0">
      <div className="xl hidden xl:block">
        <DescriptionSection
          type="multi-image"
          firstTitle="施工事例"
          images={[
            { tag: "食品工場", src: "/projects/project-2.jpg" },
            { tag: "食品工場", src: "/projects/project-3.jpg" },
            { tag: "食品工場", src: "/projects/project-4.jpg" },
            { tag: "食品工場", src: "/projects/project-5.jpg" },
            { tag: "食品工場", src: "/projects/project-6.jpg" },
          ]}
          secondTitle="株式会社さんれいフーズ"
          titlePosition={"right"}
          items={[
            {
              label: "所在地",
              description: "鳥取県米子市旗ヶ崎2147",
            },
            {
              label: "竣工",
              description: "2020年3月",
            },
            {
              label: "構造",
              description: "鉄骨造2階建て",
            },
            {
              label: "延床面積",
              description: "2,699.79㎡",
            },
          ]}
          mainImgHeight={261.8}
          miniImgHeight={49.2}
          subtitle="work"
        />
      </div>

      <div className="xl block xl:hidden">
        <DescriptionSection
          type="multi-image"
          firstTitle="施工事例"
          images={[
            { tag: "食品工場", src: "/projects/project-2.jpg" },
            { tag: "食品工場", src: "/projects/project-3.jpg" },
            { tag: "食品工場", src: "/projects/project-4.jpg" },
            { tag: "食品工場", src: "/projects/project-5.jpg" },
            { tag: "食品工場", src: "/projects/project-6.jpg" },
          ]}
          secondTitle="株式会社さんれいフーズ"
          titlePosition={"left"}
          items={[
            {
              label: "所在地",
              description: "鳥取県米子市旗ヶ崎2147",
            },
            {
              label: "竣工",
              description: "2020年3月",
            },
            {
              label: "構造",
              description: "鉄骨造2階建て",
            },
            {
              label: "延床面積",
              description: "2,699.79㎡",
            },
          ]}
          mainImgHeight={261.8}
          miniImgHeight={49.2}
          subtitle="work"
        />
      </div>

      <div className="mt-38 xl:mt-33.1/3 list-project-title">
        <PageTitle title="その他の施工事例" divider />
      </div>

      <div className="mt-30 xl:mt-33.1/3">
        <ProjectListCaroursel projects={projects} />
      </div>
    </div>
  );
};

export default Work;
