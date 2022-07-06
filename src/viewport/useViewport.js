import React from "react";
import { ViewportContext } from "./index";

const useViewport = () => {
  const { width, height } = React.useContext(ViewportContext);
  const isMobile = 600 > width;
  const isTablet = 1030 > width;
  // const isLaptop=1150>width;

  return { width, height, isMobile, isTablet};
};

export default useViewport;
 