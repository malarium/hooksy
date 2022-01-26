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
  const divForPerspective: MutableRefObject<any> = React.useRef();
  const divForCombo: MutableRefObject<any> = React.useRef();
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
  const { move, resize, rotate, perspective, chainBackgroundColors } =
    useAnimation();
  const { getDimensions, getBoxModel } = useGetDimensions();

  // const animationTest = useColorShift(divToAnimate, `red`, `blue`, 1000);

  const sampleArrayOfStringsSorted =
    useSortAplhabetically(sampleArrayOfStrings);

  useOnMount(() => {
    logInConsole("rendered");
    logInConsole(sampleArrayOfStringsSorted);
    logInConsole(arraysDifference);
  });
  useOnUnmount(() => logInConsole("unmounted"));

  function getDivDimensions() {
    console.log(getDimensions(divToResize));
    console.log(getBoxModel(divToResize));
  }

  return (
    <div className="App">
      <button onClick={getDivDimensions}>CLICK</button>
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
      <div
        style={{
          width: `70px`,
          height: `80px`,
          backgroundColor: `orange`,
          padding: `10px`,
          margin: `10px`,
        }}
        ref={divForPerspective}
      >
        This div is put in perspective
      </div>
      <div
        style={{
          width: `90px`,
          height: `90px`,
          backgroundColor: `violet`,
          padding: `10px`,
          margin: `10px`,
        }}
        ref={divForCombo}
      >
        This is a combo!
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
            direction: `alternate`,
            iterations: 2,
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
      <button
        onClick={() => {
          perspective({
            element: divForPerspective,
            perspective: 70,
            unit: "px",
            perspectiveAxisXTilt: -120,
            perspectiveAxisYTilt: 190,
            perspectiveAxisZTilt: -120,
            duration: 1500,
            direction: `alternate`,
            iterations: 2,
            fill: `forwards`,
          });
        }}
      >
        Put in perspective!
      </button>
      <button
        onClick={() => {
          perspective({
            element: divForCombo,
            perspective: 190,
            unit: "px",
            perspectiveAxisXTilt: 120,
            perspectiveAxisYTilt: 0,
            perspectiveAxisZTilt: 0,
            duration: 3000,
            direction: `alternate`,
            iterations: 2,
            fill: `forwards`,
          });
          resize({
            axis: `X`,
            element: divForCombo,
            duration: 3000,
            easing: `ease-out`,
            scale: 2,
            direction: `alternate`,
            iterations: 2,
          });
          move({
            element: divForCombo,
            x: 50,
            y: 130,
            direction: `alternate`,
            duration: 3000,
            easing: `ease-out`,
            fill: `forwards`,
            unit: `px`,
            iterations: 2,
          });
          chainBackgroundColors({
            element: divForCombo,
            duration: 3000,
            direction: `alternate`,
            iterations: 2,
            colors: [
              { color: `violet` },
              { color: `indigo` },
              { color: `blue` },
              { color: `green` },
              { color: `yellow` },
              { color: `orange` },
              { color: `red` },
            ],
          });
        }}
      >
        Run a combo!
      </button>
    </div>
  );
}

export default App;
