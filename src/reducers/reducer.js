const homeReducer = (state = {count:0}, action) => {
    console.log("action",action);
    switch (action.type) {
        
        case "INCREMENT":
        return {
            ...state,count:action.payload + 1
        }
        case "DECREMENT":
        return {
            ...state,count:action.payload - 1
        }
      default:
        return state;
    }
  }

  export default homeReducer;
