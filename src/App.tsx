import React, { MutableRefObject } from "react";
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
    </div>
  );
}

export default App;
