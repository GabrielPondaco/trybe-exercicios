const Redux = require('redux');
const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "NEXT_COLOR":
      if(state.index === state.colors.length) {
        return {
          ...state,
          index: 0,
        };
      }
      return {
        ...state,
        index: state.index + 1,
      };
      case "PREVIOUS_COLOR":
        if (state.index === 0) {
          return {
            ...state,
          };
        }
      return {
        ...state,
        index: state.index - 1,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const next = () => ({
  type: "NEXT_COLOR"
});

const previous = () => ({
    type: "PREVIOUS_COLOR"
});

previous.addEventListener('click', previous());
next.addEventListener('click', next());

const store = Redux.createStore(reducer);
console.log(store.getState());