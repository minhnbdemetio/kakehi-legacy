import React from "react";

import "./style.scss";
import items from "./items";
import BackgroundWithSlogan from "@/app/components/BackgroundWithSlogan";
import CardDescription from "@/app/components/CardDescription";

interface IProps {}

const Profile: React.FC<IProps> = () => {
  return (
    <div className="profile pb-22 xl:pb-38.1/3">
      <BackgroundWithSlogan
        src="/company-profile-background.png"
        className="xl:!h-[544px]"
      >
        <h1 className="leading-snug text-3xl font-bold xl:text-3.5xl">
          会社概要
        </h1>
      </BackgroundWithSlogan>

      <ul className="mx-7 mt-22 grid grid-cols-1 gap-3 xl:mx-pc-container xl:mt-33.1/3 xl:gap-7">
        {items.map((item, index) => (
          <li key={index}>
            <CardDescription
              size="small"
              background="card-primary"
              label={item.label}
              description={item.description}
              descriptionClassName="!px-9 xl:!px-7 xl:!text-xl xl:!font-normal xl:!leading-[2] xl:!justify-start"
              labelClassName="xl:!text-xl xl:!font-bold xl:!leading-[1.44]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
