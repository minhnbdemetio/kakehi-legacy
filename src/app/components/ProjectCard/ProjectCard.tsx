import React from "react";
import "./style.scss";
import "./responsive.css";

interface IProps {
  thumbnail: string;
  tag?: string;
  name: string;
  structure: string;
  acreage: number;
}

const ProjectCard: React.FC<IProps> = ({
  thumbnail,
  name,
  tag,
  acreage,
  structure,
}) => {
  const acreageText = Intl.NumberFormat("en-IN").format(acreage);

  return (
    <div className="project-card-container relative m-auto px-3 pb-12 xxl:mx-[49px]">
      <img className="project-card-image" src={thumbnail} alt={name} />

      <div className="mx-7 mt-8">
        <p className="project-card-name pb-4 text-lg font-bold">{name}</p>

        <ul className="project-card-descriptions mt-7 grid grid-cols-1 gap-7">
          <li className="project-card-description flex ">
            <p className="project-card-description-label text-md xxl:text-lg">
              構造
            </p>
            <p className="project-card-description-content flex-auto pl-7 text-md">
              {structure}
            </p>
          </li>
          <li className="project-card-description flex ">
            <p className="project-card-description-label text-md xxl:text-lg">
              延床面積
            </p>
            <p className="project-card-description-content flex-auto pl-7 text-md">
              {acreageText}㎡
            </p>
          </li>
        </ul>
      </div>
      {!!tag && (
        <span className="tag absolute left-0 top-0 px-7 py-2 text-md xxl:py-3">
          {tag}
        </span>
      )}
    </div>
  );
};

export default ProjectCard;
