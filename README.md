# HOOKSY

### a micro-lib with collection of useful React hooks

Developed by Marcin Górecki | DNA Technology, Poland

## Available hooks:

### `useOnMount`

- Accepts a callback function that is fired when a component is mounted.

EXAMPLE:

```
useOnMount(() => {
    console.log("component has rendered");
    // other code
  });
```

### `useOnUnmount`

- Accepts a callback function that is fired when a component is unmounted.

EXAMPLE:

```
useOnUnmount(() => {
    console.log("component has been destroyed");
    // other code
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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
