import React from "react";

import ProjectListCarousel from "@/app/components/ProjectListCaroursel";
import getProjects from "@/app/utils/queries/getProjects";
import { ScrollToHash } from "@/app/components/ScrollToHash";
import clsx from "clsx";

interface IProps {}

const TopPageWorkSection: React.FC<IProps> = async () => {
  const projects = await getProjects();

  return (
    <div>
      <ScrollToHash hash="#Work" />
      <div className="flex flex-col items-center justify-center pt-33 md:pt-[100px] xxl:mt-[95px]">
        <div
          className={clsx(
            "mb-3 w-max border-b-2 border-color-custom pb-[3px] text-center font-noto-sans text-base uppercase text-primary ",
            "md:mb-[7px] md:text-[15px]",
            "xxl:mb-[5px] xxl:px-0 xxl:text-xl"
          )}
        >
          WORK
        </div>

        <div
          className={clsx(
            "mb-17 text-1.5xl font-bold ",
            "md:mb-[75px] md:text-[24px]",
            "xxl:mb-[110px] xxl:px-0 xxl:text-3xl"
          )}
        >
          施工実績
        </div>
      </div>

      <ProjectListCarousel projects={projects} />
    </div>
  );
};

export default TopPageWorkSection;
