declare type FillMode = "none" | "forwards" | "backwards" | "both" | "auto";
declare type IterationCompositeOperation = "replace" | "accumulate";
declare type EasingMode =
  | "linear"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "linear"
  | "step-start"
  | "step-end";
declare type PlaybackDirection =
  | "normal"
  | "reverse"
  | "alternate"
  | "alternate-reverse";
declare type AnimationPlayState =
  | "idle"
  | "pending"
  | "running"
  | "paused"
  | "finished";
declare type CompositeOperation = "replace" | "add" | "accumulate";
declare type DOMHighResTimeStamp = number;

interface IBaseAnimation {
  element: React.MutableRefObject<any>;
  duration?: number;
  fill?: FillMode;
  easing?: EasingMode;
  iterations?: number;
  direction?:
    | `normal`
    | `reverse`
    | `alternate`
    | `alternate-reverse`
    | `initial`
    | `inherit`;
}
export interface IMove extends IBaseAnimation {
  x: number;
  y: number;
  unit?: `px` | `%`;
}

export interface IResize extends IBaseAnimation {
  scale: number;
  axis?: `X` | `Y`;
}

export interface IRotate extends IBaseAnimation {
  turnDegree: number;
  unit?: `deg` | `turn` | `rad`;
}

export interface IPerspective extends IBaseAnimation {
  perspective: number | `none`;
  perspectiveAxisXTilt: number;
  perspectiveAxisYTilt: number;
  perspectiveAxisZTilt: number;
  perspectiveAxisXTiltUnit?: `deg` | `turn` | `rad`;
  perspectiveAxisYTiltUnit?: `deg` | `turn` | `rad`;
  perspectiveAxisZTiltUnit?: `deg` | `turn` | `rad`;
  unit?: `px` | `cm` | `px` | `em` | `rem` | `pt` | `vh` | `vw` | `pc` | `in`;
}
