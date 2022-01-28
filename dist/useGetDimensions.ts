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

const useGetDimensions = () => {
  const getDimensions = (element: React.MutableRefObject<any>): rect => {
    const { x, y, width, height, top, right, bottom, left } =
      element.current.getBoundingClientRect();
    return { x, y, width, height, top, right, bottom, left };
  };
  const getBoxModel = (element: React.MutableRefObject<any>) => {
    const style: CSSStyleDeclaration = getComputedStyle(element.current);
    const margins = {
      top: parseInt(style.marginTop),
      right: parseInt(style.marginRight),
      bottom: parseInt(style.marginBottom),
      left: parseInt(style.marginLeft),
    };
    const border = {
      top: parseInt(style.borderTop),
      right: parseInt(style.borderRight),
      bottom: parseInt(style.borderBottom),
      left: parseInt(style.borderLeft),
      radius: parseInt(style.borderRadius),
    };
    const padding = {
      top: parseInt(style.paddingTop),
      right: parseInt(style.paddingRight),
      bottom: parseInt(style.paddingBottom),
      left: parseInt(style.paddingLeft),
    };
    const contentHeight: number =
      element.current.clientHeight - (padding.top + padding.bottom);
    const contentWidth: number =
      element.current.clientWidth - (padding.left + padding.right);
    return { margins, border, padding, contentHeight, contentWidth };
  };
  return { getBoxModel, getDimensions };
};

export default useGetDimensions;
