import { useReducer } from 'react'
import axios from 'axios'

const reducer = (state, action) =>{
    if(action.type === 'REQUEST'){
      return {
        ...state,
        loading: true
      }
    }
    if(action.type === 'SUCCESS'){
      return {
        ...state,
        loading: false,
        data: action.data
      }
    }
  }
const usePost = (url) => {
    const [ data, dispacth ] = useReducer(reducer, {
        loading: false,
        data: {}
    })
    const post = data => {
        dispacth({ type: 'REQUEST' })
        axios
            .post(url, data)
            .then(res => {
                dispacth({
                    type: 'SUCCESS',
                    data: res.data
                })
            })
    }
    return [data, post]
}

export default usePost