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
  const divToMove: MutableRefObject<any> = React.useRef();
  const divToResize: MutableRefObject<any> = React.useRef();
  const divToTurn: MutableRefObject<any> = React.useRef();
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
  const { move, resize, rotate } = useAnimation();

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
    const { width, height, left, top } = useGetDimensions(divToResize);
    logInConsole(
      `width:  ${width}px, height: ${height}px, left: ${left}px, top: ${top}px `
    );
  }

  return (
    <div className="App">
      <button onClick={useGetButtonDimensions}>CLICK</button>
      {/* <p>{`Mouse position: X: ${x}, Y: ${y}`}</p> */}
      <p>{`Mouse position at click: X: ${staticX}, Y: ${staticY}`}</p>
      <div
        style={{
          width: `250px`,
          backgroundColor: `green`,
          padding: `5px`,
          margin: `10px`,
        }}
        ref={divToMove}
      >
        This div moves
      </div>
      <div
        style={{
          width: `50px`,
          height: `50px`,
          backgroundColor: `red`,
          padding: `10px`,
          margin: `10px`,
        }}
        ref={divToResize}
      >
        This div resizes
      </div>
      <div
        style={{
          width: `50px`,
          height: `50px`,
          backgroundColor: `blue`,
          padding: `10px`,
          margin: `10px`,
        }}
        ref={divToTurn}
      >
        This div rotates
      </div>
      <button
        onClick={() => {
          move({
            element: divToMove,
            x: 100,
            y: 100,
            direction: `alternate`,
            duration: 1500,
            easing: `ease-out`,
            fill: `forwards`,
            unit: `px`,
            iterations: 2,
          });
        }}
      >
        Move!
      </button>
      <button
        onClick={() => {
          resize({
            element: divToResize,
            duration: 1500,
            fill: "backwards",
            easing: `ease-out`,
            scale: 2,
          });
        }}
      >
        Resize!
      </button>
      <button
        onClick={() => {
          rotate({
            turnDegree: -1,
            unit: `turn`,
            element: divToTurn,
            duration: 1500,
            fill: "backwards",
            easing: `ease-out`,
          });
        }}
      >
        Turn!
      </button>
    </div>
  );
}

export default App;
