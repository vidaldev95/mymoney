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
  const useDelete = () => {
      const [ data, dispacth ] = useReducer(reducer, {
          loading: false,
          data: {}
      })
      const remove = url => {
          dispacth({ type: 'REQUEST' })
          axios
              .delete(url)
              .then(() => {
                  dispacth({
                      type: 'SUCCESS'
                  })
              })
      }
      return [data, remove]
  }

export default useDelete