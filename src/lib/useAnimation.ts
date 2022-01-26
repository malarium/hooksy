import {
  IChainColors,
  IMove,
  IPerspective,
  IResize,
  IRotate,
} from "./helpers/interfaces";
// TODO: Add 'combine' method that would chain animations with the same action (transform) - is that needed?
// TODO: add offset for animations - in seconds

const useAnimation = () => {
  const generateDefaultTimingOptions = (
    data: IMove | IResize | IRotate | IPerspective | IChainColors
  ) => {
    return {
      duration: data.duration || 500,
      fill: data.fill || `none`,
      easing: data.easing || `linear`,
      iterations: data.iterations || 1,
      direction: data.direction || `normal`,
      // offset: data.offset || 1.5,
      composite: `add`,
      // iterationComposite: `accumulate`,
    };
  };
  const move = (moveData: IMove) => {
    const animation = [
      {
        transform: `translate(${moveData.x}${moveData.unit || `%`}, ${
          moveData.y
        }${moveData.unit || `%`})`,
      },
    ];
    const animationTiming = generateDefaultTimingOptions(moveData);
    console.log(`Animation: `, animation);
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
    const animation: { backgroundColor: string; offset: number | null }[] = [];
    chainColorsData.colors.forEach((item) => {
      animation.push({
        backgroundColor: item.color,
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

  return { move, resize, rotate, perspective, chainBackgroundColors };
};

export default useAnimation;
