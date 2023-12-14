"use client";
import React, { useEffect, useRef } from "react";
import useHash from "../hooks/useHash";

export const ScrollToHash: React.FC<{ hash: string }> = ({ hash }) => {
  const ref = useRef<HTMLDivElement>(null);
  const currentHash = useHash();

  useEffect(() => {
    if (currentHash === hash) {
      setTimeout(() => ref.current?.scrollIntoView(), 500);
    }
  }, [currentHash, hash]);
  return <div ref={ref}></div>;
};
