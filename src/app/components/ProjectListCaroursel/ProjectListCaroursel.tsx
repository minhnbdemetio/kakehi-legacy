"use client";

import React, { useCallback, useRef } from "react";
import Slider from "react-slick";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./style.scss";
import "./responsive.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const ref = useRef<{ slickNext: () => void; slickPrev: () => void } | null>(
    null
  );

  const next = useCallback(() => {

    console.debug(ref)
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
          slidesToScroll={1}
          centerMode={false}
          arrows={false}
          ref={ref as any}
          variableWidth={true}
        >
          {projects.map((project, index) => (
            <div key={index} className="max-w-[260px] px-3 xl:px-0 xl:max-w-[350px] xl:pr-[50px]">
              <ProjectCard
                tag={project.tag}
                name={project.name}
                acreage={project.acreage}
                structure={project.structure}
                thumbnail={project.thumbnail}
              />
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
