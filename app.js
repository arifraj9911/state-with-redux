const incrementField = document.getElementById("increment-box");
const decrementField = document.getElementById("decrement-box");
const counterResult = document.getElementById("counter-result");

// set initial state
const initialState = {
  value: 0,
};

// actions identifier
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creator
const increment = (e) => {
  return {
    type: INCREMENT,
    payload: parseInt(e.target.value),
  };
};
const decrement = (e) => {
  return {
    type: DECREMENT,
    payload: parseInt(e.target.value),
  };
};

// set reducer function
const scoreReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
};

// store the reducer
const store = Redux.createStore(scoreReducer);

// subscribe/display the update
const render = () => {
  const state = store.getState();
  if (state.value > 0) {
    counterResult.innerText = state.value;
  } else {
    counterResult.innerText = 0;
  }
};

render();
store.subscribe(render);

// add event listener
incrementField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    // console.log(e.target.value)
    store.dispatch(increment(e));
    e.target.value = "";
  }
});
decrementField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    // console.log(e.target.value)
    store.dispatch(decrement(e));
    e.target.value = "";
  }
});
