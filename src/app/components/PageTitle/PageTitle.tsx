import React from "react";
import "./style.scss";
import CLSX from "clsx";

interface IProps {
  subTitle?: string;
  title: string;
  divider?: boolean;
}

const PageTitle: React.FC<IProps> = ({ divider = false, subTitle, title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {subTitle && (
        <p className="sub-title font-noto-sans text-[13px] xl:text-xl">
          {subTitle}
        </p>
      )}
      <p
        className={CLSX({
          ["mt-[5px] font-noto-sans-jp text-[20px] font-bold xl:text-3xl"]:
            true,
          divider: divider,
        })}
      >
        {title}
      </p>
    </div>
  );
};

export default PageTitle;
