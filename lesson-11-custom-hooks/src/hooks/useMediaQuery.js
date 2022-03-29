import { useState, useEffect } from "react";
const initialViewport = {
  width: 0,
  height: 0,
};

export const useMediaQuery = () => {
  const [viewport, setViewport] = useState(initialViewport);

  const onResizeViewportHandler = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setViewport({
      width,
      height,
    });
  };

  useEffect(() => {
    const hasWindow = typeof window !== undefined;
    if (hasWindow) {
      onResizeViewportHandler();
      window.addEventListener("resize", onResizeViewportHandler);
    }

    return () => {
      window.removeEventListener("resize", onResizeViewportHandler);
    };
  }, []);
  return viewport;
};
