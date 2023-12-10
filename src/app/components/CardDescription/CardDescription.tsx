import React, { Fragment, PropsWithChildren } from "react";
import "./style.scss";
import "./responsive.css";
import CLSX from "clsx";
import Link from "next/link";

interface IProps {
  label?: string;
  labelBackgroundImg?: string;
  description: string;
  background?: "default" | "card-primary";
  size?: "small" | "medium";
  descriptionBold?: boolean;
  descriptionAlign?: "left" | "center" | "right";
  labelClassName?: string;
  descriptionClassName?: string;
  link?: string;
}

const CardDescription: React.FC<IProps> = ({
  description,
  label,
  link,
  background = "default",
  descriptionAlign = "left",
  size = "medium",
  descriptionBold = false,
  labelBackgroundImg,
  labelClassName,
  descriptionClassName,
}) => {
  const isSmall = size === "small";
  const isMedium = size === "medium";

  const descriptionOnly = !label;

  const DescriptionWrapper = link
    ? ({ children, ...props }: PropsWithChildren) => (
        <Link href={link} target="_blank" {...props}>
          {children}
        </Link>
      )
    : "p";

  return (
    <div
      className={CLSX({
        [`card-description ${size} flex h-full items-stretch background-${background}`]:
          true,
      })}
    >
      {!!label && (
        <div
          className={CLSX({
            ["card-description-label text-center"]: true,
          })}
          style={{
            backgroundImage: !!labelBackgroundImg
              ? `url(${labelBackgroundImg})`
              : "none",
          }}
        >
          <p
            className={CLSX(labelClassName, {
              ["font-noto-sans text-lg font-bold leading-[normal] xl:font-noto-sans xl:leading-md"]:
                true,
              ["xl:text-lg"]: isSmall,
              ["xl:text-1.5xl"]: isMedium,
            })}
          >
            {label}
          </p>
        </div>
      )}
      <DescriptionWrapper
        className={CLSX(
          "card-description-content flex flex-auto items-center justify-start px-9 py-[25px] text-[15px] leading-[normal] xl:py-5",
          "xl:leading-8 xl:justify-center xl:text-1.5xl xl:font-medium",
          {
            "font-bold": descriptionBold,
            [`text-${descriptionAlign}`]: true,
            "xl:px-22": descriptionOnly,
            "xl:py-17.1/3": descriptionOnly,
            "text-[#1955a7] hover:underline hover:underline-offset-4": !!link,
          },
          descriptionClassName
        )}
      >
        {description}
      </DescriptionWrapper>
    </div>
  );
};

export default CardDescription;
