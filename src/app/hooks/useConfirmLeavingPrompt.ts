"use client";

import { useEffect } from "react";

export const useConfirmLeavingPrompt = (data?: unknown) => {
  const onBeforeUnload = (event: BeforeUnloadEvent) => {
    // If have no data, then continue leaving
    if (
      !data ||
      (typeof data === "object" && !Object.values(data).some((value) => value))
    ) {
      return;
    }

    // Otherwise, prompt to confirm leaving
    event.preventDefault();
    event.returnValue = "";
  };

  useEffect(() => {
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  });
};
