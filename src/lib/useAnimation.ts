import { Imove } from "./helpers/interfaces";
// TODO: Add 'combine' method that would chain animations with the same action (transform) - is that needed?
// TODO: these can't be arrays - create interface and accept objects

const useAnimation = () => {
  const move = (moveData: Imove) => {
    const animation = [
      {
        transform: `translate(${moveData.x}${moveData.unit || `%`}, ${
          moveData.y
        }${moveData.unit || `%`})`,
      },
    ];
    const animationTiming = {
      duration: moveData.duration || 500,
      fill: moveData.fill || `none`,
      easing: moveData.easing || `linear`,
    };
    return moveData.element.current.animate(animation, animationTiming);
  };
  // const changeBackgroundColor = (
  //   element: React.MutableRefObject<any>,
  //   color1: string,
  //   color2: string,
  //   timing: number = 500,
  //   iterations: number = 1
  // ) => {
  //   if (element === undefined) {
  //     return;
  //   }
  //   const animation = [
  //     {
  //       transform: { backgroundColor: color1 },
  //     },
  //     { backgroundColor: color2 },
  //     { transform: { backgroundColor: color1 } },
  //   ];
  //   const animationTiming = {
  //     duration: timing,
  //     iterations: iterations,
  //   };
  //   return element.current.animate(animation, animationTiming);
  // };

  // const resize = (
  //   element: React.MutableRefObject<any>,
  //   size: number,
  //   timing: number = 500,
  //   fill: string = "forwards"
  // ) => {
  //   if (element === undefined) {
  //     return;
  //   }
  //   const animation = [
  //     {
  //       transform: `scale(${size})`,
  //     },
  //   ];
  //   const animationTiming = {
  //     duration: timing,
  //     fill: fill,
  //   };
  //   return element.current.animate(animation, animationTiming);
  // };

  // const move = (
  //   element: React.MutableRefObject<any>,
  //   x: number,
  //   y: number,
  //   fill: string = "forwards",
  //   timing: number = 500
  // ) => {
  //   if (element === undefined) {
  //     return;
  //   }
  //   const currentAnimations = [...element.current.getAnimations()];
  //   const animation = [
  //     {
  //       transform: `translate(${x}%, ${y}%)`,
  //     },
  //     ...currentAnimations,
  //   ];
  //   const animationTiming = {
  //     duration: timing,
  //     fill: fill,
  //   };
  //   return element.current.animate(animation, animationTiming);
  // };
  return { move };
};

export default useAnimation;
