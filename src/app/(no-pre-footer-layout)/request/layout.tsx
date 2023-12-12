"use client";
import { sessionStorageKey } from "@/app/constants/storage";
import React, { PropsWithChildren, useEffect } from "react";

export default function RequestLayout(props: PropsWithChildren) {
  useEffect(() => {
    return () =>
      window.sessionStorage.removeItem(sessionStorageKey.REQUEST_DATA);
  }, []);

  return <>{props.children}</>;
}
