"use client";

import React, { useMemo } from "react";
import "./style.scss";

interface IProps {
  children: React.ReactElement[];
}

const FlowList: React.FC<IProps> = ({ children }) => {
  const polygonImg = useMemo(
    () => <img className="chain-icon z-20" src="/icons/polygon-icon.svg" />,
    []
  );

  const addChainIcons = useMemo(
    () =>
      children.map((child, index) => {
        const zIndex = children.length - index + 10;

        const isLastChild = index === children.length - 1;
        if (isLastChild) {
          return child;
        }

        return (
          <div
            key={zIndex}
            className="flow-node-container relative"
            style={{ zIndex }}
          >
            {child}
            {polygonImg}
          </div>
        );
      }),
    [children, polygonImg]
  );

  return (
    <div className="flow-list-container grid grid-cols-1 gap-5">
      {addChainIcons}
    </div>
  );
};

export default FlowList;
