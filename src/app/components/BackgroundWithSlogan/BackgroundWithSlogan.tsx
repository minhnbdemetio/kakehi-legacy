import React from "react";
import "./style.scss";
import "./responsive.css";

interface IProps {
  src: string;
  children: any;
}

const BackgroundWithSlogan: React.FC<IProps> = ({ src, children }) => {
  return (
    <div
      className="background-wrapper h-[749px] xl:h-[800px]"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div>{children}</div>
    </div>
  );
};

export default BackgroundWithSlogan;
