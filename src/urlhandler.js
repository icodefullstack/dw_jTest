import store from './store';
export const URL = 'urlhandler/URL';
export const LOAD_DATA = 'urlhandler/LOAD_DATA';
export const INIT_FETCH = 'urlhandler/INIT_FETCH';

const initialState = {
  url: "INITIAL Url",
  data:[]
}

export default (state = initialState, action) => {

  switch (action.type) {

    case URL:
      return {
        ...state,
        url: action.url
      }


    case LOAD_DATA:
console.log(action.data);
      return {
        ...state,
         data: action.data
       }


    case INIT_FETCH:
    return{
      state
    }
    default:
      return state
  }
}


export const changeurl = (url) => {
  return (dispatch) => {
    dispatch({
      type: URL,
      url
    })
  }
}




export const loadData = (data) =>{
  return {
      type: LOAD_DATA,
      data
    }
  }



export const fetchData = () =>{
  return fetch("https://pixabay.com/api/?key=3220824-051e00bdae89d6b934550af33&q=grass&pretty=true")
      .then(res => res.json())
      .then(
        (result) => {
          store.dispatch(loadData(result.hits));
        },
        (error) => {

        }
      )
}

fetchData()
