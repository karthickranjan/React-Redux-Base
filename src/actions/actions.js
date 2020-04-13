
import axios from 'axios';

const apiUrl = 'https://api.github.com/users/KrunalLathiya';

export const increment = (data) => {
    return {
        type:"INCREMENT",
        payload:data  
    }
};

export const decrement = (data) => {
    return {
        type:"DECREMENT",
        payload:data  
    }
};

export const fetchData = (data) => {
    return {
      type: 'FETCH_GITHUB_DATA',
      payload:data  
    }
  };

export const fetchGithubData = () => {
    return (dispatch) => {
      return axios.get(apiUrl)
        .then(response => {
          dispatch(fetchData(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

export const reset = (data) => {
    return {
        type:"RESETCOUNT"
    }
}
