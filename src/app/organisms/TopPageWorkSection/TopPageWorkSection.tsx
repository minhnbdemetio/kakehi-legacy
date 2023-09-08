"use client";

import PageTitle from "@/app/components/PageTitle";
import React from "react";

import ProjectListCaroursel from "@/app/components/ProjectListCaroursel";
import useProjects from "@/app/hooks/useProjects";

interface IProps {}

const TopPageWorkSection: React.FC<IProps> = () => {
  const projects = useProjects();

  return (
    <div className="mt-16.2/3">
      <PageTitle title="施工実績" subTitle="WORK" />

      <div className="mt-24">
        <ProjectListCaroursel projects={projects} />
      </div>
    </div>
  );
};

export default TopPageWorkSection;
