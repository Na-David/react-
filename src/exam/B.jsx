import { useReducer } from "react";

function reducer(state, action) {
  return 100;
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
        <button>+</button>
      </div>
    </div>
  );
}
