"use client";

import React from "react";
import Slider from "react-slick";
import "./style.scss";
import "./responsive.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";

interface IProps {
  projects: {
    id: string;
    name: string;
    thumbnail: string;
    tag?: string;
    structure: string;
    acreage: number;
  }[];
}

const ProjectListCaroursel: React.FC<IProps> = ({ projects }) => {
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
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };

  const toWorkPage = (id: string) => {
    router.push(`/work?id=${id}`);
  };

  return (
    <div className="project-list-carousel-container">
      <div className="project-list-carousel px-[71px] xl:px-0">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div
              onClick={() => toWorkPage(project.id)}
              key={index}
              className="flex cursor-pointer flex-col xl:px-[24.5px]"
            >
              <div className="relative w-full">
                <img
                  className="project-card-image aspect-250/167 w-full  object-cover xl:aspect-[300/205]"
                  src={project.thumbnail}
                />
                <div className="absolute left-0 top-0 bg-hover-primary pb-[7px] pl-[24px] pr-[20px] pt-[6px]  text-[15px] font-normal text-white xl:py-[9px]">
                  {project.tag}
                </div>
              </div>
              <div className="h-[200px] bg-card-background-primary px-[20.83px] pb-[35px] pt-[25px] xl:h-[250px] xl:pb-[49px] xl:pt-[32px]">
                <div className="mb-[20px] border-b-2 border-black pb-[10.33px]  text-lg font-bold text-black xl:pb-[20px]">
                  {project.name}
                </div>
                <div className="flex items-center gap-[16.67px] xl:gap-[20px]">
                  <div className="flex w-[75px] items-center justify-center bg-black px-[10.83px] py-[6.67px]  text-[13px] text-white xl:w-[90px] xl:pb-[9px] xl:pt-[8px] xl:text-[16px]">
                    構造
                  </div>
                  <div className="xl:text-[16px]">{project.structure}</div>
                </div>

                <div className="mt-[19.67px] flex items-center gap-[16.67px] xl:gap-[20px]">
                  <div className="flex w-[75px] items-center justify-center bg-black px-[10.83px] py-[6.67px]  text-[13px] text-white xl:w-[90px] xl:pb-[9px] xl:pt-[8px] xl:text-[16px]">
                    延床面積
                  </div>
                  <div className="xl:text-[16px]">{project.acreage}㎡</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectListCaroursel;
