import React from "react";

import ProjectListCaroursel from "@/app/components/ProjectListCaroursel";
import getProjects from "@/app/utils/queries/getProjects";

interface IProps {}

const TopPageWorkSection: React.FC<IProps> = async () => {
  const projects = await getProjects();

  return (
    <div id="Work">
      <div className="mt-33 flex flex-col items-center justify-center xl:mt-[95px]">
        <div className="mb-3 w-max border-b-2 border-color-custom pb-[3px] text-center font-noto-sans text-base uppercase text-primary xl:mb-[5px] xl:px-0 xl:text-xl">
          WORK
        </div>

        <div className="mb-17 text-1.5xl font-bold xl:mb-[110px] xl:px-0 xl:text-3xl">
          施工実績
        </div>
      </div>

      <ProjectListCaroursel projects={projects} />
    </div>
  );
};

export default TopPageWorkSection;
