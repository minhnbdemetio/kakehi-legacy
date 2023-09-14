"use client";

import React, { useCallback, useRef } from "react";
import Slider from "react-slick";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./style.scss";
import "./responsive.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface IProps {
  projects: {
    name: string;
    thumbnail: string;
    tag?: string;
    structure: string;
    acreage: number;
  }[];
}

const ProjectListCaroursel: React.FC<IProps> = ({ projects }) => {
  console.log("🚀 ~ projects:", projects);
  const ref = useRef<{ slickNext: () => void; slickPrev: () => void } | null>(
    null
  );

  const next = useCallback(() => {
    if (ref.current) {
      ref.current.slickNext();
    }
  }, []);

  const prev = useCallback(() => {
    if (ref.current) {
      ref.current.slickPrev();
    }
  }, []);

  return (
    <div className="project-list-carousel-container">
      <div>
        <button
          className="project-list-carousel-naviate-btn left "
          onClick={prev}
        >
          <img alt="Nagivate Prev" src="/icons/navigate-previous.png" />
        </button>
      </div>
      <div className="project-list-carousel mx-23 ">
        <Slider
          dots={false}
          infinite={true}
          speed={500}
          slidesToScroll={3}
          arrows={false}
          ref={ref as any}
          variableWidth={false}
          slidesToShow={3}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {projects.map((project, index) => (
            <div key={index} className="flex w-[250px] flex-col">
              <div className="relative w-full">
                <img
                  className="project-card-image aspect-250/167 w-full object-cover"
                  src={project.thumbnail}
                />
              </div>
              <div className="bg-card-background-primary px-[20.83px] py-[25px]">
                <div className="mb-[20px] border-b-2 border-black pb-[10.33px] font-noto-sans-jp text-lg font-bold text-black">
                  株式会社さんれいフーズ
                </div>
                <div className="bg-black px-[24px] py-[6px] font-noto-sans-jp text-[13px] text-white">
                  構造
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <button
        className="project-list-carousel-naviate-btn right"
        onClick={next}
      >
        <img alt="Nagivate next" src="/icons/navigate-next.png" />
      </button>
    </div>
  );
};

export default ProjectListCaroursel;
