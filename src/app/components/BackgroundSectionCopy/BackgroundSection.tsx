import React, { PropsWithChildren } from "react";
import "./style.scss";
import Image from "next/image";

interface IProps extends PropsWithChildren {
  src: string;
  mobileSrc?: string;
  tabletSrc?: string;
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
  tabletSrc,
}) => {
  return (
    <div className={`relative ${className}-container min-h-[${height}]`}>
      {mobileSrc ? (
        <div
          className={`background-section-container background-section-container--mobile-src absolute left-0 top-0 w-full ${className}`}
          style={{ height }}
        >
          <picture>
            <source media="(max-width: 576px)" srcSet={mobileSrc} />
            <source media="(max-width: 1280px)" srcSet={tabletSrc} />
            <Image
              src={src}
              alt="background"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              style={{ top: 1 }}
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
