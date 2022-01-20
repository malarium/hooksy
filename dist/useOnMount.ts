import React from "react";

const useOnMount = (callback: Function) => {
  React.useEffect(() => {
    callback();
  });
};

export default useOnMount;
