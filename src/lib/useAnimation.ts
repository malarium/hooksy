import { Imove, Iresize, Irotate } from "./helpers/interfaces";
// TODO: Add 'combine' method that would chain animations with the same action (transform) - is that needed?
// TODO: these can't be arrays - create interface and accept objects

const useAnimation = () => {
  const generateDefaultTimingOptions = (data: Imove | Iresize | Irotate) => {
    return {
      duration: data.duration || 500,
      fill: data.fill || `none`,
      easing: data.easing || `linear`,
      iterations: data.iterations || 1,
      direction: data.direction || `normal`,
    };
  };
  const move = (moveData: Imove) => {
    const animation = [
      {
        transform: `translate(${moveData.x}${moveData.unit || `%`}, ${
          moveData.y
        }${moveData.unit || `%`})`,
      },
    ];
    const animationTiming = generateDefaultTimingOptions(moveData);
    console.log(`Animation: `, animation);
    return moveData.element.current.animate([...animation], animationTiming);
  };

  const resize = (resizeData: Iresize) => {
    const scaleOption: string = `scale${resizeData.axis || ``}`;
    const animation = [
      {
        transform: `${scaleOption}(${resizeData.scale})`,
      },
    ];
    const animationTiming = generateDefaultTimingOptions(resizeData);
    return resizeData.element.current.animate(animation, animationTiming);
  };
  const rotate = (rotateData: Irotate) => {
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

  return { move, resize, rotate };
};

export default useAnimation;
