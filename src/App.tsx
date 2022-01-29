import React, { MutableRefObject } from "react";
import "./App.scss";
import { hooksyInfo } from "./lib/helpers/consoleInfo";
import useAnimation from "./lib/useAnimation";

function App() {
  const mainCointainer: MutableRefObject<any> = React.useRef();
  const headerToTilt: MutableRefObject<any> = React.useRef();
  const divToMove1: MutableRefObject<any> = React.useRef();
  const divToMove2: MutableRefObject<any> = React.useRef();
  const divToMove3: MutableRefObject<any> = React.useRef();

  const { perspective, move } = useAnimation();
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
        </p>
        <h2>And here is a little overview of animations available:</h2>
        <span>* * *</span>
        <h2>move()</h2>
        <p>
          Accepted parameters:{" "}
          {JSON.stringify({
            x: 10,
            y: 10,
            unit: `px | %`,
          })}
        </p>
        <div className="animationExample">
          <button
            className="button"
            onClick={() => {
              move({
                element: divToMove1,
                x: 0,
                y: -150,
                direction: `alternate`,
                duration: 600,
                easing: `ease-out`,
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
                easing: `ease-out`,
                fill: `forwards`,
                unit: `px`,
                iterations: 6,
              });
              move({
                element: divToMove3,
                x: 350,
                y: 0,
                direction: `alternate`,
                duration: 1300,
                easing: `ease-in`,
                fill: `forwards`,
                unit: `px`,
                iterations: 2,
              });
            }}
          >
            Move us!
          </button>
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
