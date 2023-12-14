"use client";
import { useEffect, useState } from "react";

const getHash = () =>
  typeof window !== "undefined" ? window.location.hash : undefined;

const useHash = () => {
  const [hash, setHash] = useState(getHash());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleHashChange = () => {
      setHash(getHash());
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return isClient ? hash : null;
};

export default useHash;
