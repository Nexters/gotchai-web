import * as React from "react";
import { useState } from "react";

import { counter } from "./counter.css";

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      className={counter}
      id="counter"
      type="button"
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  );
};
