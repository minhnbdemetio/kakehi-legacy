import React from "react";
import "./styles.scss";
import items from "./items";
import "./responsive.css";
import clsx from "clsx";

interface IProps {}

const ListFeatures: React.FC<IProps> = () => {
  return (
    <div className="featuring mx-7 p-17 pt-[0] md:mx-[43px]  md:px-[25px] md:pt-[100px] xxl:mx-auto xxl:max-w-[1000px] xxl:px-[75px] xxl:pb-[64px] xxl:pt-[90px]">
      <div
        className={clsx(
          "mx-auto w-max border-b-2 border-black pb-3 text-xl font-bold",
          "md:rounded-[50px] md:border-2 md:px-[49px] md:py-[8px]   md:text-[21px] md:leading-[30px]",
          " xxl:px-21 xxl:pt-3 xxl:text-2.5xl"
        )}
      >
        システム建築に適した建物
      </div>

      <p
        className={clsx(
          "-mx-17 my-17 w-[calc(100%+102px)]  font-noto-sans-jp text-[15px] font-medium leading-md text-primary",
          " md:mx-auto md:w-[700px] md:text-[19px] md:leading-lg",
          "xxl:mx-auto xxl:w-[800px] xxl:px-0 xxl:text-1.5xl xxl:leading-lg"
        )}
      >
        柔軟な空間設計や大空間を実現するシステム建築は、平屋から6階建てまでの建物の建築が可能です。
      </p>

      <ul
        className={clsx(
          "list-feature mt-[50px] flex flex-col ",
          "md:mx-auto md:mt-[82px] md:flex-row  md:justify-center  md:gap-16.2/3",
          "xxl:mt-[70px]  "
        )}
      >
        {items.map((item) => {
          return (
            <li
              key={item.img}
              className="feature-item flex flex-col gap-[40px]  pb-[60px] last:pb-0 md:pb-0 xxl:gap-[90px]"
            >
              <div className="feature-img md:!h-[154px]  xxl:!h-[170px] ">
                <img
                  className="hidden xxl:block"
                  alt={item.label}
                  src={item.img}
                />
                <img
                  className="hidden md:block xxl:hidden"
                  alt={item.label}
                  src={item.imgTablet}
                />
                <img
                  className="block md:hidden"
                  alt={item.label}
                  src={item.imgSp}
                />
              </div>

              <div className={clsx("feature-item-description")}>
                <p
                  className={clsx(
                    "py-5 text-center text-[15px] font-bold text-white ",
                    "md:pb-[22px] md:pt-[23px] md:text-[18px] md:leading-[30px]",
                    "xxl:py-7 xxl:text-1.5xl xxl:leading-[32px]"
                  )}
                  style={{ background: "#BE95A1" }}
                >
                  {item.label}
                </p>
                <div>
                  <ul
                    className={clsx(
                      "md:!pb-[26px] md:!pt-[19px] xxl:!py-[20px]"
                    )}
                  >
                    {item.description.map((desc) => (
                      <li
                        className={clsx(
                          "text-[13px] leading-[24px] before:text-[22px] ",
                          "md:text-md md:leading-[27px] ",
                          "xxl:text-lg xxl:leading-[32px] xxl:before:text-[32px]"
                        )}
                        key={desc}
                      >
                        {desc}
                      </li>
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
