import React from "react";
import "./style.scss";
import "./responsive.css";
import DescriptionSection from "@/app/organisms/DescriptionSection";
import PageTitle from "@/app/components/PageTitle";
import ProjectListCaroursel from "@/app/components/ProjectListCaroursel";
import getProjects from "@/app/utils/queries/getProjects";
import getProject from "@/app/utils/queries/getProject";
import { redirect } from "next/navigation";

interface IProps {
  searchParams: {
    id: string;
  };
}

const Work: React.FC<IProps> = async ({ searchParams }: IProps) => {
  const projects = await getProjects();

  const project = await getProject(searchParams.id || projects[0]?.id);

  const completedAt = project?.completed_at && new Date(project.completed_at);
  const completedText = completedAt
    ? `${completedAt?.getFullYear()}年${(completedAt?.getMonth() || 0) + 1}月`
    : "";

  if (!project) {
    return redirect("/404");
  }

  return (
    <div className="work-page-container mt-[5px] pb-43.1/3 xl:mt-0 xl:pb-33.1/3">
      <div className="xl hidden xl:block">
        <DescriptionSection
          type="multi-image"
          firstTitle="施工事例"
          images={project?.images.map((image) => ({
            tag: project.tag,
            src: image,
          }))}
          secondTitle={project.name}
          titlePosition={"right"}
          items={[
            {
              label: "所在地",
              description: project.location || "",
            },
            {
              label: "竣工",
              description: completedText,
            },
            {
              label: "構造",
              description: project.structure || "",
            },
            {
              label: "延床面積",
              description: `${Intl.NumberFormat().format(
                project.acreage || 0
              )}㎡`,
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
              description: project.location || "",
            },
            {
              label: "竣工",
              description: completedText,
            },
            {
              label: "構造",
              description: project.structure || "",
            },
            {
              label: "延床面積",
              description: `${Intl.NumberFormat().format(
                project.acreage || 0
              )}㎡`,
            },
          ]}
          mainImgHeight={261.8}
          miniImgHeight={49.2}
          subtitle="work"
        />
      </div>

      <div className="list-project-title mt-33.1/3 md:mt-38 xl:mt-0">
        <PageTitle title="その他の施工事例" divider />
      </div>

      <div className="mt-30 xl:mt-33.1/3">
        <ProjectListCaroursel projects={projects} />
      </div>
    </div>
  );
};

export default Work;
