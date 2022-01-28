import React, { MutableRefObject } from "react";
import "./App.scss";
import { hooksyInfo } from "./lib/helpers/consoleInfo";
import useAnimation from "./lib/useAnimation";
import useCursorStaticPosition from "./lib/useCursorStaticPosition";
import useDifference from "./lib/useDifference";
import useGetDimensions from "./lib/useGetDimensions";
import useOnMount from "./lib/useOnMount";
import useOnUnmount from "./lib/useOnUnmount";
import useSort from "./lib/useSort";

function App() {
  const headerToTilt: MutableRefObject<any> = React.useRef();
  const divToResize: MutableRefObject<any> = React.useRef();
  const divToTurn: MutableRefObject<any> = React.useRef();
  const divForPerspective: MutableRefObject<any> = React.useRef();
  const divForCombo: MutableRefObject<any> = React.useRef();
  const divToColor: MutableRefObject<any> = React.useRef();
  const divForGradientChange: MutableRefObject<any> = React.useRef();
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
  const sampleArrayOfNumbers: number[] = [1, 11, 3, 12, 0.4, 0.03, 21, 2];
  const array1: number[] = [1, 2, 3, 4, 5, 6, 7];
  const array2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const arraysDifference: number[] = useDifference(array1, array2);
  const { x: staticX, y: staticY } = useCursorStaticPosition();
  const {
    move,
    resize,
    rotate,
    perspective,
    chainBackgroundColors,
    animateGradient,
  } = useAnimation();
  const { getDimensions, getBoxModel } = useGetDimensions();
  const { sortNumbers, sortAlphabetically } = useSort();

  const sampleArrayOfStringsSorted = sortAlphabetically(sampleArrayOfStrings);
  const sampleArrayOfNumbersSorted = sortNumbers(sampleArrayOfNumbers);

  useOnMount(() => {
    headerToTilt.current.addEventListener("mouseover", () => {
      perspective({
        element: headerToTilt,
        perspective: 0,
        origin: `30% 50%`,
        easing: `ease-in-out`,
        unit: "px",
        perspectiveAxisXTilt: 0,
        perspectiveAxisYTilt: 0,
        perspectiveAxisZTilt: 170,
        duration: 1500,
        direction: `alternate`,
        iterations: 2,
      });
    });
    // perspective({
    //   element: headerToTilt,
    //   perspective: 0,
    //   origin: `30% 50%`,
    //   easing: `ease-in-out`,
    //   unit: "px",
    //   perspectiveAxisXTilt: 0,
    //   perspectiveAxisYTilt: 0,
    //   perspectiveAxisZTilt: 170,
    //   duration: 1500,
    //   direction: `alternate`,
    //   iterations: Infinity,
    // });
    // hooksyInfo("rendered");
    // hooksyInfo(sampleArrayOfStringsSorted);
    // hooksyInfo(sampleArrayOfNumbersSorted);
    // hooksyInfo(arraysDifference);
  });
  useOnUnmount(() => hooksyInfo("unmounted"));

  function getDivDimensions() {
    console.log(getDimensions(divToResize));
    console.log(getBoxModel(divToResize));
  }

  return (
    <div className="App">
      <header>
        <h1 ref={headerToTilt}>HOOKSY</h1>
        <hr />
        <small>Animate your React components with ease!</small>
      </header>
      <main>
        <p>This library was created as open source project by DNA Technology</p>
      </main>
      {/* <button onClick={getDivDimensions}>CLICK</button>
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
          width: `250px`,
          backgroundColor: `violet`,
          padding: `5px`,
          margin: `10px`,
        }}
        ref={divToColor}
      >
        This div changes colors
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
          width: `190px`,
          height: `190px`,
          backgroundColor: `rebeccapurple`,
          padding: `10px`,
          margin: `10px`,
        }}
        ref={divForGradientChange}
      >
        This div has changeable gradient
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
          chainBackgroundColors({
            element: divToColor,
            duration: 1500,
            direction: `alternate`,
            iterations: 4,
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
        Cahnge colors!
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
          animateGradient({
            element: divForGradientChange,
            colors: [`#fc466b`, `#3f5efb`, `#1a2a6c`, `#b21f1f`, `#fdbb2d`],
            spread: 2,
            duration: 20000,
            direction: `alternate`,
            iterations: 2,
            fill: `forwards`,
          });
        }}
      >
        Gradientify!
      </button>
      <button
        onClick={() => {
          hooksyInfo(`COMBO TIME!`);
          perspective({
            element: divForCombo,
            perspective: 190,
            unit: "px",
            perspectiveAxisXTilt: 180,
            perspectiveAxisYTilt: 180,
            perspectiveAxisZTilt: 180,
            duration: 3000,
            direction: `alternate`,
            iterations: 2,
          });

          animateGradient({
            element: divForGradientChange,
            colors: [`#fc466b`, `#fdbb2d`],
            spread: 4,
            duration: 3000,
            direction: `alternate`,
            iterations: 2,
            fill: `forwards`,
          });

          chainBackgroundColors({
            element: divForCombo,
            duration: 1500,
            direction: `alternate`,
            iterations: 4,
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

          move({
            element: divToMove,
            x: 100,
            y: 100,
            direction: `alternate`,
            duration: 3000,
            easing: `ease-out`,
            fill: `forwards`,
            unit: `px`,
            iterations: 2,
          });

          chainBackgroundColors({
            element: divToColor,
            duration: 3000,
            direction: `alternate`,
            iterations: 2,
            colors: [
              { color: `violet`, offset: 0.3 },
              { color: `indigo` },
              { color: `blue` },
              { color: `green` },
              { color: `yellow` },
              { color: `orange` },
              { color: `red` },
            ],
          });

          resize({
            element: divToResize,
            duration: 3000,
            fill: "backwards",
            easing: `ease-out`,
            scale: 2,
            direction: `alternate`,
            iterations: 2,
          });

          rotate({
            turnDegree: -1,
            unit: `turn`,
            element: divToTurn,
            duration: 6000,
            fill: "backwards",
            easing: `ease-out`,
          });

          perspective({
            element: divForPerspective,
            perspective: 70,
            unit: "px",
            perspectiveAxisXTilt: -120,
            perspectiveAxisYTilt: 190,
            perspectiveAxisZTilt: -120,
            duration: 3000,
            direction: `alternate`,
            iterations: 2,
            fill: `forwards`,
          });
        }}
      >
        Run a combo!
      </button> */}
    </div>
  );
}

export default App;
