# HOOKSY

### a micro-lib with collection of useful React hooks

Developed by Marcin Górecki | DNA Technology, Poland

## Available hooks:

### [useOnMount](###useOnMount)

### [useOnUnmount](###useOnUnmount)

### [useGetDimensions](###useGetDimensions)

### [useSortAlphabetically](###useSortAlphabetically)

### [useDifference](###useDifference)

### [useCursorPosition](###useCursorPosition)

### [useCursorStaticPosition](###useCursorStaticPosition)

### `useOnMount`

- Accepts a callback function that is fired when a component is mounted.

EXAMPLE:

```
useOnMount(() => {
    console.log("component has rendered");
    // your code
  });
```

### `useOnUnmount`

- Accepts a callback function that is fired when a component is unmounted. Useful for cleanup methods.

EXAMPLE:

```
useOnUnmount(() => {
    // your code - cleanup
  });
```

### `useGetDimensions`

- Accepts a ref (React.MutableRefObject) and returns a set of values in pixels:

  ```
  x: number; // horizontal position
  y: number; // vertical position
  width: number; // element's width
  height: number; // element's height

  //And element's shift from screen borders:

  top: number;
  right: number;
  left: number;
  bottom: number;
  ```

EXAMPLE:

```
function useGetButtonDimensions() {
    const { width, height, left, top } = useGetDimensions(button);
    console.log(
        `width: ${width}px, height: ${height}px, left: ${left}px, top: ${top}px `
    );
}

return (
    <div className="App">
        <button ref={button} onClick={useGetButtonDimensions}>
            Check this button dimensions
        </button>
    </div>
);

```

### `useSortAlphabetically`

- Accepts an array of strings and returns a new array of these strings sorted A-Z.

EXAMPLE:

```
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
    useSortAplhabetically(sampleArrayOfStrings); // returns ['alphabetically', 'be', 'should', 'sorted', 'strings', 'style', 'these', 'Yoda']
```

### useDifference

- Accepts two arrays and returns a new array with symmetric difference (items that are only in one of the original arrays)

EXAMPLE:

```
const array1: number[] = [1, 2, 3, 4, 5, 6, 7];
const array2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const arraysDifference: number[] = useDifference(array1, array2); // returns [8, 9, 0]
```

### useCursorPosition

- Returns X and Y of current cursor position on every move.

> _ATTENTION! It causes rerender on every mosemove, so usage should be limited.
> For getting X and Y of CLICK/TAP event - see the useCursorStaticPosition hook._

EXAMPLE:

```
const { x, y } = useCursorPosition();
...

return (
    <div className="App">
      <p>{`Mouse position: X: ${x}, Y: ${y}`}</p>
    </div>
  );
```

### useCursorStaticPosition

- Returns X and Y of current cursor position on every TAP/CLICK event.

EXAMPLE:

```
const { x, y } = useCursorStaticPosition();
...

return (
    <div className="App">
      <p>{`You clicked at X: ${x}, Y: ${y}`}</p>
    </div>
  );
```

## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

```

```
