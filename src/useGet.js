import { useReducer, useEffect } from 'react'
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
  
  const useGet = url => {
  
    const [ data, dispacth ] = useReducer(reducer, {
      loading: true,
      data: {}
    })
  
    useEffect(() => {
      dispacth({ type: 'REQUEST' })
      axios
        .get(url)
        .then(res => {
          dispacth({ type: 'SUCCESS', data: res.data })
        })
    }, [])
    return data
  
  }

  export default useGet