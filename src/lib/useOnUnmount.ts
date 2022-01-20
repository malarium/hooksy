import React from "react";

const useOnUnmount = (callback: Function) => {
  React.useEffect(() => {
    return () => callback();
  });
};

export default useOnUnmount;
