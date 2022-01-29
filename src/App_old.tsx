import React, { MutableRefObject, useState } from "react";
import "./App.scss";
import useAnimation from "./lib/useAnimation";
import useCursorStaticPosition from "./lib/useCursorStaticPosition";
import useDifference from "./lib/useDifference";
import useGetDimensions from "./lib/useGetDimensions";
import useSort from "./lib/useSort";
import AnimationHooksScreen from "./screens/animationHooksScreen";
import GeneralHooksScreen from "./screens/generalHooksScreen";

function App() {
  const headerToTilt: MutableRefObject<any> = React.useRef();
  const generalInfo: MutableRefObject<any> = React.useRef();
  const mainCointainer: MutableRefObject<any> = React.useRef();
  const generalHooks: MutableRefObject<any> = React.useRef();
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
  const [screenToDisplay, setScreenToDisplay] = useState(0);

  React.useEffect(() => {
    const currentAnimation = perspective({
      element: headerToTilt,
      perspective: 0,
      origin: `90% 5%`,
      easing: `ease-in-out`,
      unit: "px",
      perspectiveAxisXTilt: 0,
      perspectiveAxisYTilt: 0,
      perspectiveAxisZTilt: -50,
      duration: 2050,
      direction: `alternate`,
      iterations: Infinity,
    });

    return () => {
      currentAnimation.cancel();
    };
  });

  const goToGeneralHooks = () => {
    animateGradient({
      element: mainCointainer,
      colors: [`#00c6ff`, `#0072ff`, `#00d2ff`, `#3a7bd5`],
      spread: 3,
      duration: 500,
      easing: `ease-in-out`,
      iterations: 1,
      fill: `forwards`,
      movementDirection: "left",
    });
    setScreenToDisplay(1);
  };
  const goToAnimationHooks = () => {
    animateGradient({
      element: mainCointainer,
      colors: [`#00c6ff`, `#0072ff`, `#00d2ff`, `#0072ff`, `#00c6ff`],
      spread: 3,
      duration: 500,
      easing: `ease-in-out`,
      iterations: 1,
      fill: `forwards`,
      movementDirection: "right",
    });
    setScreenToDisplay(2);
  };

  return (
    <div className="App" ref={mainCointainer}>
      <header>
        <h1>
          HOOKS
          <span style={{ display: "inline-block" }} ref={headerToTilt}>
            Y
          </span>
        </h1>
        <hr />
        <small>Web Animation API for React</small>
      </header>
      <main>
        {screenToDisplay === 1 ? (
          <GeneralHooksScreen />
        ) : screenToDisplay === 2 ? (
          <AnimationHooksScreen />
        ) : (
          <div ref={generalInfo}>
            <p>
              This library was created as open source project to make
              <code> Web Animation API</code> easier and more pleasent to use
              with React applications. It is customizable with methods working
              out-of-the-box and fully supports TypeScript.
            </p>
            <h2>What's in it?</h2>
            <p>
              HOOKSY consists of two parts: general usage hooks, and animation
              hooks. Even though it is mainly for animating stuff - some basic
              usage hooks are also useful and there is no need to import
              additional libraries for the basic funtionality.
            </p>
            <p>
              Just install it with <code className="focus">npm i hooksy</code>
              &nbsp;...and you're good to go!
            </p>
            <div className="mainButtons">
              <button className="button" onClick={goToGeneralHooks}>
                &larr; General hooks
              </button>
              <button className="button" onClick={goToAnimationHooks}>
                Animation hooks &rarr;
              </button>
            </div>
          </div>
        )}
      </main>
      <footer>
        <small>
          Developed by:
          <a
            href="https://www.linkedin.com/in/goreckimarcin/"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;Marcin Górecki
          </a>
          /
          <a
            href="https://digitalnewagency.com/"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;DNA Technology
          </a>
        </small>
      </footer>
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
