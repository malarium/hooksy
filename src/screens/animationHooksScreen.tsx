import React from "react";

const AnimationHooksScreen = (props: any) => {
  return (
    <>
      <div>ANIMATION!</div>
      <button onClick={props.changeScreen(0)}>BACK</button>
    </>
  );
};

export default AnimationHooksScreen;
