"use client";

import React, { useMemo } from "react";
import Slider from "react-slick";
import "./style.scss";
import "./responsive.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
import clsx from "clsx";

interface IProps {
  projects: {
    id: string;
    name: string;
    thumbnail: string;
    tag?: string;
    structure: string;
    acreage: number;
  }[];
  hideId?: string;
}

const ProjectListCarousel: React.FC<IProps> = ({ projects, hideId }) => {
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    variableWidth: false,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };

  const showProjects = useMemo(() => {
    if (!hideId) return projects;

    return projects.filter((p) => p.id != hideId);
  }, [hideId, projects]);

  const toWorkPage = (id: string) => {
    router.push(`/work?id=${id}`);
  };

  return (
    <div className="project-list-carousel-container overflow-hidden">
      <div className="project-list-carousel px-[71px] md:-mx-[17px] md:px-[17.98%] xxl:mx-0 xxl:px-0">
        <Slider {...settings}>
          {
            showProjects.map((project, index) => (
              <div
                onClick={() => toWorkPage(project.id)}
                key={index}
                className={clsx(
                  "flex cursor-pointer flex-col ",
                  "md:px-[17px]",
                  "xxl:px-[24.5px]"
                )}
              >
                <div className="relative w-full">
                  <img
                    className="project-card-image aspect-250/167 w-full  object-cover md:aspect-[250/171] xxl:aspect-[300/205]"
                    src={project.thumbnail}
                  />
                  <div
                    className={clsx(
                      "absolute left-0 top-0 bg-hover-primary pb-[7px] pl-[24px] pr-[20px] pt-[6px]  text-[15px] font-normal text-white ",
                      "md:px-[16px] md:text-[13px] md:leading-[20px]",
                      "xxl:py-[9px] xxl:pl-[24px] xxl:pr-[20px] xxl:leading-[22px]"
                    )}
                  >
                    {project.tag}
                  </div>
                </div>
                <div
                  className={clsx(
                    "h-[200px] bg-card-background-primary px-[20.83px] pb-[35px] pt-[25px] ",
                    "md:h-[208px] md:px-[21px] md:pb-[41px] md:pt-[26px]",
                    "xxl:h-[250px] xxl:pb-[49px] xxl:pt-[32px]"
                  )}
                >
                  <div
                    className={clsx(
                      "mb-[20px] border-b-2 border-black pb-[10.33px] text-[15px] font-bold text-black ",
                      "md:mb-[16px] md:pb-[18.83px] md:text-[15px] md:leading-[160%]",
                      "xxl:pb-[20px] xxl:text-xl"
                    )}
                  >
                    {project.name}
                  </div>
                  <div className="flex items-center gap-[16.67px] xxl:gap-[20px]">
                    <div
                      className={clsx(
                        "flex w-[75px] items-center justify-center bg-black px-[10.83px] py-[6.67px]  text-[13px] text-white ",
                        "md:text-md",
                        "xxl:w-[90px] xxl:pb-[9px] xxl:pt-[8px] xxl:text-[16px]"
                      )}
                    >
                      構造
                    </div>
                    <div className="text-[13px] md:text-md xxl:text-[16px] ">
                      {project.structure}
                    </div>
                  </div>

                  <div className="mt-[19.67px] flex items-center gap-[16.67px] md:mt-[16px] xxl:gap-[20px]">
                    <div
                      className={clsx(
                        "flex w-[75px] items-center justify-center bg-black px-[10.83px] py-[6.67px]  text-[13px] text-white ",
                        "md:pl-[9px] md:pr-[6px] md:text-md",
                        "xxl:w-[90px] xxl:pb-[9px] xxl:pt-[8px] xxl:text-[16px]"
                      )}
                    >
                      延床面積
                    </div>
                    <div className="text-[13px] md:text-md xxl:text-[16px]">
                      {project.acreage}㎡
                    </div>
                  </div>
                </div>
              </div>
            )) as any
          }
        </Slider>
      </div>
    </div>
  );
};

export default ProjectListCarousel;
