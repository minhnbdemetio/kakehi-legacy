import React from "react";
import "./style.scss";
import "./responsive.css";
import CLSX from "clsx";

interface IProps {
  label?: string;
  labelBackgroundImg?: string;
  description: string;
  background?: "default" | "card-primary";
  size?: "small" | "medium";
  descriptionBold?: boolean;
  descriptionAlign?: "left" | "center" | "right";
}

const CardDescription: React.FC<IProps> = ({
  description,
  label,
  background = "default",
  descriptionAlign = "left",
  size = "medium",
  descriptionBold = false,
  labelBackgroundImg,
}) => {
  const isSmall = size === "small";
  const isMedium = size === "medium";

  const descriptionOnly = !label;

  return (
    <div
      className={CLSX({
        [`card-description ${size} flex items-stretch background-${background}`]:
          true,
      })}
    >
      {!!label && (
        <div
          className={CLSX({ ["card-description-label  text-center"]: true })}
          style={{
            backgroundImage: !!labelBackgroundImg
              ? `url(${labelBackgroundImg})`
              : "none",
          }}
        >
          <p
            className={CLSX({
              ["leading-snug xl:leading-loose font-noto-sans text-lg font-bold xl:font-noto-sans"]:
                true,
              ["xl:text-lg"]: isSmall,
              ["xl:text-1.5xl"]: isMedium,
            })}
          >
            {label}
          </p>
        </div>
      )}
      <p
        className={CLSX(
          "card-description-content leading-9 flex flex-auto items-center justify-start px-9 py-5 text-[15px]",
          "xl:leading-8 xl:justify-center xl:text-1.5xl xl:font-medium",
          {
            "font-bold": descriptionBold,
            [`text-${descriptionAlign}`]: true,
            "xl:px-22": descriptionOnly,
            "xl:py-17.1/3": descriptionOnly,
          }
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default CardDescription;
