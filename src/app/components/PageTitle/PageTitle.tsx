import React from "react";
import "./style.scss";
import CLSX from "clsx";
import clsx from "clsx";

interface IProps {
  subTitle?: string;
  title: string;
  divider?: boolean;
}

const PageTitle: React.FC<IProps> = ({ divider = false, subTitle, title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {subTitle && (
        <p
          className={clsx(
            "sub-title font-noto-sans text-[13px]",
            "md:text-md2",
            "xxl:text-xl"
          )}
        >
          {subTitle}
        </p>
      )}
      <p
        className={CLSX(
          "mt-3 font-noto-sans-jp text-[20px] font-bold ",
          "md:mt-2 md:text-[24px]",
          "xxl:text-3xl",
          {
            divider: divider,
          }
        )}
      >
        {title}
      </p>
    </div>
  );
};

export default PageTitle;
