import React from "react";
import { BoxModelData, Rect } from "./helpers/interfaces";

const useGetDimensions = () => {
  const getDimensions = (element: React.MutableRefObject<any>): Rect => {
    const { x, y, width, height, top, right, bottom, left } =
      element.current.getBoundingClientRect();
    return { x, y, width, height, top, right, bottom, left };
  };
  const getBoxModel = (element: React.MutableRefObject<any>): BoxModelData => {
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
