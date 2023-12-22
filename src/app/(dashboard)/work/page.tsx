import React from "react";
import "./style.scss";
import "./responsive.css";
import DescriptionSection from "@/app/organisms/DescriptionSection";
import PageTitle from "@/app/components/PageTitle";
import ProjectListCarousel from "@/app/components/ProjectListCaroursel";
import getProjects from "@/app/utils/queries/getProjects";
import getProject from "@/app/utils/queries/getProject";
import { redirect } from "next/navigation";
import { Metadata } from "next";

interface IProps {
  searchParams: {
    id: string;
  };
}

export const metadata: Metadata = {
  title: "施工事例｜システム建築により建てられた工場と倉庫",
  description:
    "鳥取に根差す懸樋工務店が、システム建築により建設した工場・倉庫の施工事例をご紹介いたします。新築や増築の参考にご覧ください。",
  keywords:
    "鳥取,システム建築,工場,倉庫,物流,店舗,施設,商業施設,飲食店,スーパーマーケット,ドラッグストア,ホームセンター,スポーツ施設,体育館,室内練習場,オープンファクトリー,建物,建築,建設,建てる,新築,増築,改築,実績,施工実績,施工事例",
  authors: { name: "株式会社 懸樋工務店" },
  openGraph: {
    title: "施工事例｜システム建築により建てられた工場と倉庫",
    description:
      "鳥取に根差す懸樋工務店が、システム建築により建設した工場・倉庫の施工事例をご紹介いたします。新築や増築の参考にご覧ください。",
    images: {
      url: "/kakehi_system_construction_example.jpg",
    },
  },
  twitter: {
    title: "施工事例｜システム建築により建てられた工場と倉庫",
    description:
      "鳥取に根差す懸樋工務店が、システム建築により建設した工場・倉庫の施工事例をご紹介いたします。新築や増築の参考にご覧ください。",
    images: {
      url: "/kakehi_system_construction_example.jpg",
    },
  },
};

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
    <div className="work-page-container mt-[5px] pb-43.1/3 md:mt-[9.5px] md:pb-[150px] xxl:pb-33.1/3">
      <div className="xl hidden xxl:block">
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

      <div className="xl block xxl:hidden">
        <DescriptionSection
          type="multi-image"
          firstTitle="施工事例"
          images={project?.images.map((image) => ({
            tag: project.tag,
            src: image,
          }))}
          secondTitle={project.name}
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

      <div className="list-project-title mt-33.1/3  xxl:mt-0">
        <PageTitle title="その他の施工事例" divider />
      </div>

      <div className="mt-30 md:mt-[65px] xxl:mt-33.1/3">
        <ProjectListCarousel hideId={searchParams.id} projects={projects} />
      </div>
    </div>
  );
};

export default Work;
