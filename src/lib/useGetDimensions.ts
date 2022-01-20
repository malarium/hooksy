import React from "react";

export interface rect {
  x: number;
  y: number;
  width: number;
  height: number;
  top: number;
  right: number;
  left: number;
  bottom: number;
}

const useGetDimensions = (element: React.MutableRefObject<any>): rect => {
  const { x, y, width, height, top, right, bottom, left } =
    element.current.getBoundingClientRect();
  return { x, y, width, height, top, right, bottom, left };
};

export default useGetDimensions;
