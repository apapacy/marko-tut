module.exports = function(state, action) {
  state = state || {
      value: 0
  };
  console.log(JSON.stringify(state));
  switch (action.type) {
      case 'INCREMENT':
          return {
              value: state.value + 1
          };
      case 'DECREMENT':
          return {
              value: state.value - 1
          };
      default:
          return state;
  }
};