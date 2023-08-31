import { useEffect, useState } from "react";

export const useSessionStorage = (key: string, initialValue: string | null) => {
  const [sessionValue, setSessionValue] = useState(initialValue);

  useEffect(() => {
    console.log("alo");
    if (typeof window !== "undefined") {
      console.log("defined");
      setSessionValue(window.sessionStorage.getItem(key));
    }
  }, [key]);

  return sessionValue;
};
