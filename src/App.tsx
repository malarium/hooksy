import React, { MutableRefObject } from "react";
import useGetDimensions from "./lib/useGetDimensions";
import useOnUnmount from "./lib/useOnUnmount";

function test(text: string) {
  alert(text);
}

function App() {
  useOnUnmount(() => test("end"));
  const button: MutableRefObject<any> = React.useRef();

  function useRunTESTS() {
    const { width, height } = useGetDimensions(button);
    alert(`works:  ${width}px ${height}px`);
  }

  return (
    <div className="App">
      <p>TEST</p>
      <button ref={button} onClick={useRunTESTS}>
        CLICK
      </button>
    </div>
  );
}

export default App;
