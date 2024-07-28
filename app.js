const incrementField = document.getElementById("increment-box");
const decrementField = document.getElementById("decrement-box");
const counterResult = document.getElementById("counter-result");
const matchContainer = document.getElementById("match-container");
const addMatch = document.getElementById("add-match");

// console.log(matchContainer.innerHTML)

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

// // Load matches from local storage
// const loadMatches = () => {
//   const matches = JSON.parse(localStorage.getItem("matches")) || [];
//   matches.forEach((match) => {
//     const divMatch = document.createElement("div");
//     divMatch.classList.add("match");
//     divMatch.innerHTML = match.html;
//     matchContainer.appendChild(divMatch);
//   });
// };

// Save matches to local storage
// const saveMatches = () => {
//   const matches = Array.from(
//     matchContainer.getElementsByClassName("match")
//   ).map((div) => ({
//     html: div.innerHTML,
//   }));
//   localStorage.setItem("matches", JSON.stringify(matches));
// };

// // const singleIncrement = incrementField.forEach(increment=>console.log(increment))
// document.querySelectorAll(".lws-increment").forEach((incrementField) => {
//   incrementField.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       // console.log(e.target.value)
//       store.dispatch(increment(e));
//       e.target.value = "";
//     }
//   });
// });

// addMatch.addEventListener("click", (event) => {
//   event.preventDefault();
//   const divMatch = document.createElement("div");
//   divMatch.classList.add("match");
//   divMatch.innerHTML = `
//       <div class="wrapper">
//         <button class="lws-delete">
//           <img src="./image/delete.svg" alt="" />
//         </button>
//         <h3 class="lws-matchName">Match 1</h3>
//       </div>
//       <div class="inc-dec">
//         <form class="incrementForm">
//           <h4>Increment</h4>
//           <input
//             id="increment-box"
//             type="number"
//             name="increment"
//             class="lws-increment"
//           />
//         </form>
//         <form class="decrementForm">
//           <h4>Decrement</h4>
//           <input
//             id="decrement-box"
//             type="number"
//             name="decrement"
//             class="lws-decrement"
//           />
//         </form>
//       </div>
//       <div class="numbers">
//         <h2 id="counter-result" class="lws-singleResult">120</h2>
//       </div>
//     `;
//   matchContainer.appendChild(divMatch);
//   saveMatches();
// });

// // Load matches on page load
// window.addEventListener("load", loadMatches);
