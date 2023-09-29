import React from "react";

import ProjectListCaroursel from "@/app/components/ProjectListCaroursel";
import getProjects from "@/app/utils/queries/getProjects";

interface IProps {}

const TopPageWorkSection: React.FC<IProps> = async () => {
  const projects = await getProjects();

  return (
    <div>
      <div className="mt-[50px] flex flex-col items-center justify-center xl:mt-[95px]">
        <div className="mb-[5px] w-max border-b-2 border-color-custom pb-[3px] text-center font-noto-sans text-xl uppercase text-primary xl:px-0">
          WORK
        </div>

        <div className="mb-[72px] font-noto-sans-jp text-2xl font-bold xl:mb-[110px] xl:px-0 xl:text-3xl">
          施工実績
        </div>
      </div>

      <ProjectListCaroursel projects={projects} />
    </div>
  );
};

export default TopPageWorkSection;
