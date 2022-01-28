import { hooksyError } from "./helpers/consoleInfo";
import {
  IAnimateGradient,
  IChainColors,
  IMove,
  IPerspective,
  IResize,
  IRotate,
} from "./helpers/interfaces";

//TODO: introduce composite option to animations
//TODO: introduce methods to play, pause and stop animation on demand.

const useAnimation = () => {
  const generateDefaultTimingOptions = (
    data:
      | IMove
      | IResize
      | IRotate
      | IPerspective
      | IChainColors
      | IAnimateGradient
  ) => {
    return {
      duration: data.duration || 500,
      fill: data.fill || `none`,
      easing: data.easing || `linear`,
      iterations: data.iterations || 1,
      direction: data.direction || `normal`,
      iterationComposite: `replace`,
    };
  };

  const move = (moveData: IMove) => {
    const unit: string = moveData.unit || `%`;
    const animation = [
      {
        transform: `translate(${moveData.x}${unit}, ${moveData.y}${unit})`,
      },
    ];
    const animationTiming = generateDefaultTimingOptions(moveData);
    return moveData.element.current.animate(animation, animationTiming);
  };

  const resize = (resizeData: IResize) => {
    const scaleOption: string = `scale${resizeData.axis || ``}`;
    const animation = [
      {
        transform: `${scaleOption}(${resizeData.scale})`,
      },
    ];
    const animationTiming = generateDefaultTimingOptions(resizeData);
    return resizeData.element.current.animate(animation, animationTiming);
  };

  const rotate = (rotateData: IRotate) => {
    const animation = [
      {
        transform: `rotate(${rotateData.turnDegree}${
          rotateData.unit || `deg`
        })`,
      },
    ];
    const animationTiming = generateDefaultTimingOptions(rotateData);
    return rotateData.element.current.animate(animation, animationTiming);
  };

  const perspective = (perspectiveData: IPerspective) => {
    perspectiveData.element.current.style.transformOrigin =
      perspectiveData.origin || `center`;
    const rotationXdata = `${perspectiveData.perspectiveAxisXTilt}${
      perspectiveData.perspectiveAxisXTiltUnit || `deg`
    }`;
    const rotationYdata = `${perspectiveData.perspectiveAxisYTilt}${
      perspectiveData.perspectiveAxisYTiltUnit || `deg`
    }`;
    const rotationZdata = `${perspectiveData.perspectiveAxisZTilt}${
      perspectiveData.perspectiveAxisZTiltUnit || `deg`
    }`;
    perspectiveData.element.current.style.perspective = `${
      perspectiveData.perspective
    }${perspectiveData.unit || `px`}`;
    const animation = [
      {
        transform: `perspective(${perspectiveData.perspective}${
          perspectiveData.unit || `px`
        }) rotateX(${rotationXdata}) rotateY(${rotationYdata}) rotateZ(${rotationZdata})`,
      },
    ];
    const perspectiveTiming = generateDefaultTimingOptions(perspectiveData);
    return perspectiveData.element.current.animate(
      animation,
      perspectiveTiming
    );
  };

  const chainBackgroundColors = (chainColorsData: IChainColors) => {
    const animation: { background: string; offset: number | null }[] = [];
    chainColorsData.colors.forEach((item) => {
      if (item.offset && (item.offset > 1 || item.offset < 0)) {
        hooksyError(
          `OFFSET in 'chainBackgroundColors' must have a minimal value of 0 and maximal value of 1. Use decimal fractions.`
        );
        return;
      }
      animation.push({
        background: item.color,
        offset: item.offset || null,
      });
    });
    const chainBackgroundColorsTiming =
      generateDefaultTimingOptions(chainColorsData);
    return chainColorsData.element.current.animate(
      animation,
      chainBackgroundColorsTiming
    );
  };

  const animateGradient = (animateGradientData: IAnimateGradient) => {
    const position =
      animateGradientData.movementDirection &&
      animateGradientData.movementDirection === "right"
        ? "-100%"
        : "100%";
    const styleString =
      animateGradientData.colors.reduce((acc, val, i): string => {
        return (acc +=
          i < animateGradientData.colors.length - 1 ? `${val},` : `${val}`);
      }, `linear-gradient(to right,`) + `)`;
    animateGradientData.element.current.style.background = styleString;
    animateGradientData.element.current.style.backgroundSize = `${
      (animateGradientData.spread || 2) * 100
    }%`;
    const animation = [
      {
        backgroundPositionX: 0,
      },
      {
        backgroundPositionX: position,
      },
    ];
    const animationTiming = generateDefaultTimingOptions(animateGradientData);
    return animateGradientData.element.current.animate(
      animation,
      animationTiming
    );
  };

  return {
    move,
    resize,
    rotate,
    perspective,
    chainBackgroundColors,
    animateGradient,
  };
};

export default useAnimation;
