import React, { PropsWithChildren } from "react";
import "./style.scss";
import Image from "next/image";

interface IProps extends PropsWithChildren {
  src: string;
  mobileSrc: string;
  height: number;
  style?: React.CSSProperties;
  className?: string;
}

const BackgroundSection: React.FC<IProps> = ({
  children,
  src,
  mobileSrc,
  height,
  style = {},
  className,
}) => {
  return (
    <div
      className={`relative ${className}-container`}
      style={{ minHeight: height }}
    >
      {mobileSrc ? (
        <div
          className={`background-section-container background-section-container--mobile-src absolute left-0 top-0 w-full ${className}`}
          style={{ height }}
        >
          <picture>
            <source media="(max-width: 1024px)" srcSet={mobileSrc} />
            <Image
              src={src}
              alt="background"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </picture>

          <div style={style}></div>
        </div>
      ) : (
        <div
          className={`background-section-container absolute left-0 top-0 w-full ${className}`}
          style={{ backgroundImage: `url(${src})`, height }}
        >
          <div style={style}></div>
        </div>
      )}

      <div className="relative" style={{ width: "100%" }}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundSection;
