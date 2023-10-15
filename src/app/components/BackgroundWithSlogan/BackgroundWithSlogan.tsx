import React, { ReactNode } from "react";
import "./style.scss";
import "./responsive.css";
import clsx from "clsx";

interface IProps {
  src: string;
  children: ReactNode;
  className?: string;
}

const BackgroundWithSlogan: React.FC<IProps> = ({
  src,
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "background-wrapper h-[749px] !bg-bottom xl:aspect-[1440/544] xl:h-auto",
        className
      )}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div>{children}</div>
    </div>
  );
};

export default BackgroundWithSlogan;
