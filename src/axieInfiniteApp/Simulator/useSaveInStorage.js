import { useEffect } from "react";

export default (states = []) => {
  useEffect(() => {
    states.forEach(({ name, setter }) => {
      const oldState = localStorage.getItem(name);
      if (oldState) {
        setter(JSON.parse(oldState));
      }
    });
  }, []);

  useEffect(() => {
    states.forEach(({ name, state }) => {
      localStorage.setItem(name, JSON.stringify(state));
    });
  });
};
