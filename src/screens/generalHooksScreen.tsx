import React from "react";

const GeneralHooksScreen = (props: any) => {
  return (
    <>
      <div>GENERAL!</div>
      <button onClick={props.changeScreen(0)}>BACK</button>
    </>
  );
};
export default GeneralHooksScreen;
