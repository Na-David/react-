import { useState } from "react";

export default function Viewer() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Current Counts :</div>
      <h1>{count}</h1>
    </div>
  );
}
