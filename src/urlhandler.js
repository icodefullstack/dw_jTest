/*
here I get the data from api and put it in the store. then I have here some actions for changing the state of the app.
*/
import store from './store';
export const URL = 'urlhandler/URL';
export const LOAD_DATA = 'urlhandler/LOAD_DATA';

const initialState = {
  selected: {},
  data:[]
}

export default (state = initialState, action) => {

  switch (action.type) {

    case URL:
      return {
        ...state,
        selected: action.selected
      }
    case LOAD_DATA:
      return {
        ...state,
         data: action.data
       }
    default:
      return state
  }
}


export const changeurl = (selected) => {
  return (dispatch) => {
    dispatch({
      type: URL,
      selected
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
