import React, { PropsWithChildren } from "react";
import "./style.scss";

interface IProps extends PropsWithChildren {
  src: string;
  height: number;
  style?: React.CSSProperties;
  className?: string;
}

const BackgroundSection: React.FC<IProps> = ({
  children,
  src,
  height,
  style = {},
  className,
}) => {
  return (
    <div className={`relative ${className}-container min-h-[${height}]`}>
      <div
        className={`background-section-container absolute left-0 top-0 w-full ${className}`}
        style={{ backgroundImage: `url(${src})`, height }}
      >
        <div style={style}></div>
      </div>

      <div className="relative" style={{ width: "100%" }}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundSection;
