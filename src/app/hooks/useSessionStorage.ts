import { useEffect, useState } from "react";

export const useSessionStorage = (key: string, initialValue: string | null) => {
  const [sessionValue, setSessionValue] = useState(initialValue);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSessionValue(window.sessionStorage.getItem(key));
    }
  }, [key]);

  return sessionValue;
};
