import PageTitle from "@/app/components/PageTitle";
import React from "react";

import ProjectListCaroursel from "@/app/components/ProjectListCaroursel";
import getProjects from "@/app/utils/queries/getProjects";

interface IProps {}

const TopPageWorkSection: React.FC<IProps> = async () => {
  const projects = await getProjects();

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
