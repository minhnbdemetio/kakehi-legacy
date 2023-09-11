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
      {subTitle && <p className="sub-title text-xl">{subTitle}</p>}
      <p
        className={CLSX({
          ["text-1.5xl font-bold xl:text-3xl mt-[5px]"]: true,
          divider: divider,
        })}
      >
        {title}
      </p>
    </div>
  );
};

export default PageTitle;
