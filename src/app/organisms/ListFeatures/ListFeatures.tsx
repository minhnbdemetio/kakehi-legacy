import React from "react";
import PageTitle from "@/app/components/PageTitle";
import "./styles.scss";
import items from "./items";
import "./responsive.css";
import clsx from "clsx";

interface IProps {}

const ListFeatures: React.FC<IProps> = () => {
  return (
    <div className="featuring mx-[20px] p-17 xl:mx-auto xl:max-w-[1000px] xl:px-[75px] xl:pb-[64px] xl:pt-[90px]">
      <div
        className={clsx(
          "mx-auto w-max border-b-2 border-black pb-3 text-xl font-bold",
          "xl:rounded-[50px] xl:border-2 xl:px-21 xl:pt-3 xl:text-2.5xl"
        )}
      >
        システム建築に適した建物
      </div>

      <p
        className={clsx(
          "-mx-17 my-17 !w-[calc(100%+102px)]  font-noto-sans-jp text-lg font-medium leading-md text-primary",
          "xl:px-8 xl:text-1.5xl xl:leading-lg"
        )}
      >
        柔軟な空間設計や大空間を実現するシステム建築は、平屋から6階建てまでの建物の建築が可能です。
      </p>

      <ul className="list-feature flex flex-col xl:flex-row xl:justify-center xl:gap-16.2/3">
        {items.map((item) => {
          return (
            <li
              key={item.img}
              className="feature-item flex flex-col gap-[50px] pb-[70px] last:pb-0 xl:gap-[90px] xl:pb-0"
            >
              <div className="feature-img !h-[170px]">
                <img alt="Factory" src={item.img} />
              </div>
              <div className="feature-item-description">
                <p
                  className="py-5 text-center text-lg font-bold text-white xl:py-7 xl:text-1.5xl"
                  style={{ background: "#BE95A1" }}
                >
                  {item.label}
                </p>
                <div>
                  <ul>
                    {item.description.map((desc) => (
                      <li key={desc}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListFeatures;
