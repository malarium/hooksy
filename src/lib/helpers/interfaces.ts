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

export interface Imove {
  element: React.MutableRefObject<any>;
  x: number;
  y: number;
  duration?: number;
  fill?: FillMode;
  easing?: EasingMode;
}
