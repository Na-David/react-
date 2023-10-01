import { useEffect } from "react";

export default function Even() {
  useEffect(() => {
    return () => {
      console.log("unMount");
    };
  }, []);
  return <div>"짝수"</div>;
}
