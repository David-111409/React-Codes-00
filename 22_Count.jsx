import React, { useReducer } from "react";

const init1 = { first: 0, sec: 2 };
// const init = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      if (state.first >= 100) return { ...state, first: state.first };
      return { ...state, first: state.first + action.value };
    case "decrease":
      if (state.first === 0) return { ...state, first: state.first };

      return { ...state, first: state.first - action.value };
    case "reset":
      return { ...state, first: 0 };
    case "half":
      return { ...state, first: 50 };
    case "100":
      return { ...state, first: 100 };
    case "step2":
      if (state.first >= 99) return { ...state, first: state.first };

      return { ...state, first: state.first + action.value };
    case "incre5":
      if (state.first > 95) return { ...state, first: state.first };

      return { ...state, first: state.first + action.value };
    case "decre5":
      if (state.first > 95) return { ...state, first: state.first };

      return { ...state, first: state.first - action.value };

    case "two-increase":
      if (state.sec >= 100) return { ...state, sec: state.sec };
      return { ...state, sec: state.sec + action.value };
    case "two-decrease":
      if (state.sec === 0) return { ...state, sec: state.sec };

      return { ...state, sec: state.sec - action.value };
    case "two-reset":
      return { ...state, sec: 0 };
    case "two-half":
      return { ...state, sec: 50 };
    case "two-100":
      return { ...state, sec: 100 };
    case "two-step2":
      if (state.sec >= 99) return { ...state, sec: state.sec };

      return { ...state, sec: state.sec + action.value };
    case "two-incre5":
      if (state.sec > 95) return { ...state, sec: state.sec };

      return { ...state, sec: state.sec + action.value };
    case "two-decre5":
      if (state.sec > 95) return { ...state, sec: state.sec };

      return { ...state, sec: state.sec - action.value };

    default:
      return state;
  }
};

function Count() {
  const [count1, dis1] = useReducer(reducer, init1);
  const [count2, dis2] = useReducer(reducer, init1);
  return (
    <div>
      <h1>Count From 0 to 100 ::: {count1.first}</h1>
      {/* count one */}
      <button onClick={() => dis1({ type: "increase", value: 1 })}>
        increase
      </button>
      <button onClick={() => dis1({ type: "decrease", value: 1 })}>
        decrease
      </button>
      <button onClick={() => dis1({ type: "reset" })}>reset</button>
      <button onClick={() => dis1({ type: "half" })}>reset to 50</button>
      <button onClick={() => dis1({ type: "100" })}>reset to 100</button>
      <button onClick={() => dis1({ type: "step2", value: 2 })}>
        be step : 2
      </button>
      <button onClick={() => dis1({ type: "incre5", value: 5 })}>
        be step 5
      </button>
      <button onClick={() => dis1({ type: "decre5", value: 5 })}>
        decrease by 5
      </button>

      {
        /*count two*/
        <div>
          <h1>Count From 0 to 100 ::: {count2.sec}</h1>
          <button onClick={() => dis2({ type: "two-increase", value: 1 })}>
            increase
          </button>
          <button onClick={() => dis2({ type: "two-decrease", value: 1 })}>
            decrease
          </button>
          <button onClick={() => dis2({ type: "two-reset" })}>reset</button>
          <button onClick={() => dis2({ type: "two-half" })}>
            reset to 50
          </button>
          <button onClick={() => dis2({ type: "two-100" })}>
            reset to 100
          </button>
          <button onClick={() => dis2({ type: "two-step2", value: 2 })}>
            be step : 2
          </button>
          <button onClick={() => dis2({ type: "two-incre5", value: 5 })}>
            be step 5
          </button>
          <button onClick={() => dis2({ type: "two-decre5", value: 5 })}>
            decrease by 5
          </button>
        </div>
      }
    </div>
  );
}

export default Count;
