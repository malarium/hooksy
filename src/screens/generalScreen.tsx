import React from "react";

const generalScreen = () => {
  return (
    <>
      <div>
        <p>
          This library was created as open source project to make
          <code>Web Animation API</code> easier and more pleasent to use with
          React applications. It is customizable with methods working
          out-of-the-box and fully supports TypeScript.
        </p>
        <h2>What's in it?</h2>
        <p>
          HOOKSY consists of two parts: general usage hooks, and animation
          hooks. Even though it is mainly for animating stuff - some basic usage
          hooks are also useful and there is no need to import additional
          libraries for the basic funtionality.
        </p>
        <p>
          Just install it with <code className="focus">npm i hooksy</code>
          ...and you're good to go!
        </p>
        <div className="mainButtons">
          <button className="button" onClick={() => null}>
            &larr; General hooks
          </button>
          <button className="button">Animation hooks &rarr;</button>
        </div>
      </div>
    </>
  );
};

export default generalScreen;
