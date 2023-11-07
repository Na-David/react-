import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "DECREASE") {
    return state - action.data;
  }
  if (action.type === "INCREASE") {
    return state + action.data;
  }
}

export default function B() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h4>{count}</h4>
      <div>
        <button
          onClick={() => {
            dispatch({
              type: "DECREASE",
              data: 1,
            }); // 상태변화를 유발만 시킴., 어떤 상태변화를 진행할껀지에 대한 인수를 전달해야함--객체로전달
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "INCREASE",
              data: 1,
            });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
