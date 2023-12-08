import React, { ReactNode } from "react";
import "./style.scss";
import "./responsive.css";
import clsx from "clsx";

interface IProps {
  src: string;
  children: ReactNode;
  className?: string;
  bgTrueSize?: boolean;
}

const BackgroundWithSlogan: React.FC<IProps> = ({
  src,
  children,
  className,
  bgTrueSize,
}) => {
  if (bgTrueSize) {
    return (
      <div className="relative">
        <img src={src} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {children}
        </div>
      </div>
    );
  }

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
