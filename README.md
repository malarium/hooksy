# `HOOKSY`

### a micro-lib with collection of useful React hooks

_Developed by Marcin Górecki | DNA Technology, Poland_

## Available hooks

#### [useOnMount](#useOnMount-1)

#### [useOnUnmount](#useOnUnmount-1)

#### [useGetDimensions](#useGetDimensions-1)

#### [useSortAlphabetically](#useSortAlphabetically-1)

#### [useDifference](#useDifference-1)

#### [useCursorPosition](#useCursorPosition-1)

#### [useCursorStaticPosition](#useCursorStaticPosition-1)

#### [useAnimation](#useAnimation-1)

# DOCS

### `useOnMount`

- Accepts a callback function that is fired when a component is mounted.

EXAMPLE:

```
useOnMount(() => {
    console.log("component has rendered");
    // your code
  });
```

## `useOnUnmount`

- Accepts a callback function that is fired when a component is unmounted. Useful for cleanup methods.

EXAMPLE:

```
useOnUnmount(() => {
    // your code - cleanup
  });
```

## `useGetDimensions`

- This hook provides methods for getting sizes of different elements of box model:

AVAILABLE METHODS:

## **getDimensions**

This is the equivalent of `getBoundingClientRect` method. It accepts a ref as parameter and returns:

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
const { getDimensions } = useGetDimensions();
...
<div ref={elementToCheck}>This is a div to check</div>
...
console.log(getDimensions(elementToCheck))

```

## **getBoxModel**

This method also accepts a ref and provides data on element's measurements. It returns:

```
{
    "margins": {
        "top": 10,
        "right": 10,
        "bottom": 10,
        "left": 10
    },
    "border": {
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "radius": 0
    },
    "padding": {
        "top": 10,
        "right": 10,
        "bottom": 10,
        "left": 10
    },
    "contentHeight": 50,
    "contentWidth": 50
}
```

## `useSortAlphabetically`

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

## `useDifference`

- Accepts two arrays and returns a new array with symmetric difference (items that are only in one of the original arrays)

EXAMPLE:

```
const array1: number[] = [1, 2, 3, 4, 5, 6, 7];
const array2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const arraysDifference: number[] = useDifference(array1, array2); // returns [8, 9, 0]
```

## `useCursorPosition`

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

## `useCursorStaticPosition`

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

## `useAnimation`

- This hook returns a whole bunch of methods making animations a breeze. It utilizes [WEB Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).

AVAILABLE METHODS:

## **move**

Animates the element on X/Y axis. Values for X and Y represent percents NOT PIXELS!

EXAMPLE:

```
const { move } = useAnimation();
<div ref={divToAnimate}>This div will be moved</div>
      <button
        onClick={() =>
          move({
            element: divToAnimate,
            x: 20,
            y: 20,
            duration: 1500,
            fill: `both`,
          });
        }
      >
        Move!
      </button>
```

All methods of `useAnimation` hook can be used in the same manner. No further examples will be specified.

ACCEPTED OPTIONS:

**Besides their specific parameters all methods of `useAnimation` hook accept these basic ones:**

```
{
  element: React.MutableRefObject<any>; // ref pointing to element
  duration: number; // (optional, fallback to 500ms)
  fill: FillMode; // (optional, fallback to 'none'); 'none', 'forwards', 'backwards' and 'both' available
  easing: EasingMode; // (optional, fallback to 'linear'); "linear", "ease-in", "ease-out", "ease-in-out", "linear", "step-start" and "step-end" available
  iterations: number; // (optional, fallback to 1); use "Infinite" for continual animation.
  direction: string; // (optional, fallback to "normal"); "normal", "reverse", "alternate", "alternate-reverse", "initial" and "inherit" available
}
```

Method-specific parameters:

```
{
  x: number // in percent
  y: number // in percent
  unit (optional, fallback to '%'): string // '%' and 'px' available
}
```

## **resize**

Scales element up or down, also enables scaling on only one of the axis (stretching vertically or horizontally).

ACCEPTED OPTIONS:

```
{
  scale: number; // scale measurement: use negative number for scaling down and > 1 for scaling up.
  axis?: `X` | `Y`; // (optional, fallback to empty string); Needs to be specified if we want to scale element only along one of the axis
}
```

## **rotate**

Rotates element around its center.

ACCEPTED OPTIONS:

```
  turnDegree: number; // amount of clockwise rotations in chosen units (see below). Use negative numbers for counter-clockwise rotation.
  unit?: `deg` | `turn` | `rad`; // (Optional, fallback to `deg`); Unit in which the rotation is specified (degrees, turns or radians available).
```

## **perspective**

Rotates element in 3D space with perspective effect.

ACCEPTED OPTIONS:

```
  perspective: number | `none`; // Value of perspective. Lower value means closer to the observer.
  unit?: `px` | `cm` | `px` | `em` | `rem` | `pt` | `vh` | `vw` | `pc` | `in`; // Perspective units.
  perspectiveAxisXTilt: number; // Rotation is necessary for perspective to appear. This specifies rotataion on X axis.
  perspectiveAxisYTilt: number; // Specifies rotation on Y axis.
  perspectiveAxisZTilt: number; // Specifies rotation on Z axis.
  perspectiveAxisXTiltUnit?: (Optional, fallback to ); `deg` | `turn` | `rad`;
  perspectiveAxisYTiltUnit?: `deg` | `turn` | `rad`;
  perspectiveAxisZTiltUnit?: `deg` | `turn` | `rad`;
```

## **chainBackgroundColors**

Chains a sequence of colors shift.

ACCEPTED OPTIONS:

```
// An array of objects. Each object must have a 'color' string value and optional 'offset' - a number value that delays sigle change. WARNING! 'offset' must be a number between 0 and 1 where 0 = 0% of animation time and 1 = 100% of animation time. To delay animation which lasts 5 seconts for 1 second 'offset' should be set to 0.2 as 5s x 0.2 = 1s.
colors: [
          { color: `violet`, offset: 0.3 },
          { color: `indigo` },
          { color: `blue` },
          { color: `green` },
          { color: `yellow` },
          { color: `orange` },
          { color: `red` },
        ]
```

## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

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

````

```

```

```

```

```

```
````
