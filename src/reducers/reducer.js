const homeReducer = (state = {count:0,gitData:{}}, action) => {
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
        case "FETCH_GITHUB_DATA":
        return {
            ...state,gitData:action.payload
        }
        case "RESETCOUNT":
        return {
            ...state,count:0
        }
      default:
        return state;
    }
  }

  export default homeReducer;
