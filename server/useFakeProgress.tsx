import * as React from "react";

export const useFakeProgress = () => {
  const [value, setState] = React.useState(5);
  return {
    value,
    increment: () => setState(value => Math.min(100, value + 25))
  };
};
