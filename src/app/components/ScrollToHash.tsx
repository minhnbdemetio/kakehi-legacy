"use client";
import React, { useEffect, useRef } from "react";

export const ScrollToHash: React.FC<{ hash: string }> = ({ hash }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash === hash) {
        setTimeout(() => ref.current?.scrollIntoView(), 500);
      }
    }
  }, [hash]);
  return <div ref={ref}></div>;
};
