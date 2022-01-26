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
export interface Imove extends IBaseAnimation {
  x: number;
  y: number;
  unit?: `px` | `%`;
}

export interface Iresize extends IBaseAnimation {
  scale: number;
  axis?: `X` | `Y`;
}

export interface Irotate extends IBaseAnimation {
  turnDegree: number;
  unit?: `deg` | `turn` | `rad`;
}
