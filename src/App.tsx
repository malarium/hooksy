import React, { MutableRefObject } from "react";
import useAnimation from "./lib/useAnimation";
import useCursorStaticPosition from "./lib/useCursorStaticPosition";
import useDifference from "./lib/useDifference";
import useGetDimensions from "./lib/useGetDimensions";
import useOnMount from "./lib/useOnMount";
import useOnUnmount from "./lib/useOnUnmount";
import useSortAplhabetically from "./lib/useSortAplphabetically";

function logInConsole(data: any) {
  console.log(data);
}

function App() {
  const button: MutableRefObject<any> = React.useRef();
  const divToAnimate: MutableRefObject<any> = React.useRef();
  const sampleArrayOfStrings: string[] = [
    "these",
    "strings",
    "should",
    "be",
    "sorted",
    "alphabetically",
    "Yoda",
    "style",
  ];
  const array1: number[] = [1, 2, 3, 4, 5, 6, 7];
  const array2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const arraysDifference: number[] = useDifference(array1, array2);
  // const { x, y } = useCursorPosition();
  const { x: staticX, y: staticY } = useCursorStaticPosition();
  const { move } = useAnimation();

  // const animationTest = useColorShift(divToAnimate, `red`, `blue`, 1000);

  const sampleArrayOfStringsSorted =
    useSortAplhabetically(sampleArrayOfStrings);

  useOnMount(() => {
    logInConsole("rendered");
    logInConsole(sampleArrayOfStringsSorted);
    logInConsole(arraysDifference);
  });
  useOnUnmount(() => logInConsole("unmounted"));

  function useGetButtonDimensions() {
    const { width, height, left, top } = useGetDimensions(button);
    logInConsole(
      `width:  ${width}px, height: ${height}px, left: ${left}px, top: ${top}px `
    );
  }

  return (
    <div className="App">
      <p>TEST</p>
      <button ref={button} onClick={useGetButtonDimensions}>
        CLICK
      </button>
      {/* <p>{`Mouse position: X: ${x}, Y: ${y}`}</p> */}
      <p>{`Mouse position at click: X: ${staticX}, Y: ${staticY}`}</p>
      <div ref={divToAnimate}>This div changes its colour</div>
      <button
        onClick={() => {
          // changeBackgroundColor(divToAnimate, `#fff`, `#bada55`, 500, 3);
          // resize(divToAnimate, 1.2, 900);
          // move(divToAnimate, 20, 20, undefined, 1500);
          move({
            element: divToAnimate,
            x: 20,
            y: 20,
            timing: 1500,
            fill: `both`,
          });
        }}
      >
        Change color!
      </button>
    </div>
  );
}

export default App;
