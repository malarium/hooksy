import React, { MutableRefObject } from "react";
import Gist from "react-gist";
import "./App.scss";
import { hooksyInfo } from "./lib/helpers/consoleInfo";
import useAnimation from "./lib/useAnimation";
import useGetDimensions from "./lib/useGetDimensions";

function App() {
  const mainCointainer: MutableRefObject<any> = React.useRef();
  const headerToTilt: MutableRefObject<any> = React.useRef();
  const divToMove1: MutableRefObject<any> = React.useRef();
  const divToMove2: MutableRefObject<any> = React.useRef();
  const divToMove3: MutableRefObject<any> = React.useRef();
  const eyeToEnlarge1: MutableRefObject<any> = React.useRef();
  const eyeToEnlarge2: MutableRefObject<any> = React.useRef();
  const sunToRotate: MutableRefObject<any> = React.useRef();
  const planetToRotate: MutableRefObject<any> = React.useRef();
  const door: MutableRefObject<any> = React.useRef();

  const { perspective, move, resize, rotate } = useAnimation();
  const { getDimensions } = useGetDimensions();
  React.useEffect(() => {
    hooksyInfo("Rendered!");
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
        <p>
          This library was created as open source project to make
          <code> Web Animation API</code> easier and more pleasent to use with
          React applications. It is customizable with methods working
          out-of-the-box and fully supports TypeScript.
        </p>
        <h2>What's in it?</h2>
        <p>
          HOOKSY consists of two parts: general usage hooks, and animation
          hooks. Even though it is mainly for animating stuff - some basic usage
          hooks are also implemented as they might come in handy for your
          projects.
        </p>
        <p>
          Just install it with <code className="focus">npm i hooksy</code>
          &nbsp;...and you're good to go!
        </p>
        <hr />
        <p>
          For detailed DOCS and examples of general and animation hooks{" "}
          <a href="https://github.com/malarium/hooksy">check here.</a>
          And for now all you need to know is that each of the methods below
          accepts some specific parameters and general parameters that apply to
          each of them.
        </p>

        <h2>Click the animation name to see it in action.</h2>

        <h2
          onClick={() => {
            const toBottom = getDimensions(divToMove3).bottom;
            move({
              element: divToMove1,
              x: 0,
              y: -150,
              direction: `alternate`,
              duration: 600,
              easing: `cubic-bezier(.19,.55,.48,1.06)`,
              fill: `forwards`,
              unit: `px`,
              iterations: 4,
            });
            move({
              element: divToMove2,
              x: 10,
              y: -100,
              direction: `alternate`,
              duration: 500,
              easing: `cubic-bezier(.32,.46,.48,1.06)`,
              fill: `forwards`,
              unit: `px`,
              iterations: 6,
            });
            move({
              element: divToMove3,
              x: 0,
              y: window.innerHeight - toBottom + 10,
              direction: `alternate`,
              duration: 400,
              easing: `cubic-bezier(.55,-0.43,.96,.58)`,
              fill: `forwards`,
              unit: `px`,
              iterations: 6,
            });
          }}
        >
          move()
        </h2>
        <div className="animationExample">
          <div className="divToMove" ref={divToMove1}>
            &#9786;
          </div>
          <div className="divToMove" ref={divToMove2}>
            &#9786;
          </div>
          <div className="divToMove" ref={divToMove3}>
            &#9786;
          </div>
        </div>

        <h2
          onClick={() => {
            resize({
              element: eyeToEnlarge1,
              duration: 2300,
              fill: "backwards",
              easing: `ease-in-out`,
              direction: `alternate`,
              scale: 1.5,
              iterations: 2,
            });
            resize({
              element: eyeToEnlarge2,
              duration: 3600,
              fill: "backwards",
              direction: `alternate`,
              easing: `ease-in-out`,
              scale: 1.6,
              iterations: 2,
            });
          }}
        >
          resize()
        </h2>
        <div className="animationExample">
          <div className="amuseAcat">
            <div className="amuseAcat-eyes">
              <div className="amuseAcat-eyes_single" ref={eyeToEnlarge1}></div>
              <div className="amuseAcat-eyes_single" ref={eyeToEnlarge2}></div>
            </div>
          </div>
        </div>
        <Gist id="b30c5f8de321dbdb8afedcca2c2e938e" />
        <h2
          onClick={() => {
            rotate({
              turnDegree: 1,
              unit: `turn`,
              element: sunToRotate,
              duration: 10000,
              iterations: 1,
              easing: `cubic-bezier(.15,.1,.39,1.05)`,
            });
            rotate({
              turnDegree: -10,
              unit: `turn`,
              element: planetToRotate,
              duration: 10000,
              iterations: 1,
              easing: `cubic-bezier(.15,.1,.39,1.05)`,
            });
          }}
        >
          rotate()
        </h2>
        <div className="animationExample">
          <div className="copernicus" ref={sunToRotate}>
            <div className="copernicus-planet" ref={planetToRotate}></div>
          </div>
        </div>

        <h2
          onClick={() => {
            perspective({
              element: door,
              perspective: 470,
              origin: "left",
              unit: "px",
              perspectiveAxisXTilt: 0,
              perspectiveAxisYTilt: -60,
              perspectiveAxisZTilt: 0,
              duration: 3500,
              direction: `alternate`,
              easing: `cubic-bezier(.55,-1.04,.22,2.08)`,
              iterations: 2,
              fill: `forwards`,
            });
          }}
        >
          perspective()
        </h2>
        <div className="animationExample">
          <div className="door" ref={door}></div>
          <div className="door-snowman">&#x2603;</div>
        </div>
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
    </div>
  );
}

export default App;
