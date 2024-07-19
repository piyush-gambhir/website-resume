"use client";

import { useState, useEffect, useMemo } from "react";

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

export function useWindowSize(): string {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const sizeCategory = useMemo(() => {
    const { width } = windowSize;
    if (width === undefined) return "UNKNOWN";
    if (width < 321) return "MINI";
    if (width < 640) return "MOBILE";
    if (width < 1024) return "TABLET";
    if (width < 1280) return "LAPTOP";
    return "DESKTOP";
  }, [windowSize.width]);

  return sizeCategory;
}
