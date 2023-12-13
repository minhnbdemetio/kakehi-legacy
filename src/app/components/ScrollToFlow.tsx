"use client";
import React, { useEffect, useRef } from "react";

export const ScrollToFlow: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash === "#Flow") {
        setTimeout(() => ref.current?.scrollIntoView(), 500);
      }
    }
  }, []);
  return <div ref={ref}></div>;
};
