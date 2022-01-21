import React, { MutableRefObject } from "react";
import useGetDimensions from "./lib/useGetDimensions";
import useOnMount from "./lib/useOnMount";
import useOnUnmount from "./lib/useOnUnmount";
import useSortAplhabetically from "./lib/useSortAplphabetically";

function logInConsole(data: any) {
  console.log(data);
}

function App() {
  const button: MutableRefObject<any> = React.useRef();
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

  const sampleArrayOfStringsSorted =
    useSortAplhabetically(sampleArrayOfStrings);

  useOnMount(() => {
    logInConsole("rendered");
    logInConsole(sampleArrayOfStringsSorted);
  });
  useOnUnmount(() => logInConsole("unmounted"));

  function useGetDimensionsTest() {
    const { width, height, left, top } = useGetDimensions(button);
    logInConsole(
      `width:  ${width}px, height: ${height}px, left: ${left}px, top: ${top}px `
    );
  }

  return (
    <div className="App">
      <p>TEST</p>
      <button ref={button} onClick={useGetDimensionsTest}>
        CLICK
      </button>
    </div>
  );
}

export default App;
