import CardDescription from "@/app/components/CardDescription";
import FlowCard from "@/app/components/FlowCard";
import FlowList from "@/app/components/FlowList";
import PageTitle from "@/app/components/PageTitle";
import React from "react";
import items from "./items";

interface IProps {}

const TopPageFLowSection: React.FC<IProps> = () => {
  return (
    <div>
      <PageTitle title="お問い合せからの流れ" subTitle="FLOW" />

      <div className="mx-7 mt-17 pb-40 xl:mx-pc-container">
        <FlowList>
          {items.map((item) => (
            <CardDescription
              key={item.label}
              background="card-primary"
              description={item.content}
              label={item.label}
              labelBackgroundImg={item.img}
            />
          ))}
        </FlowList>
      </div>
    </div>
  );
};

export default TopPageFLowSection;
