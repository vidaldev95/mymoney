import { useReducer, useEffect } from 'react'
import axios from 'axios'

const INITIAL_STATE = {
    loading: true,
    data: {}
}

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
    return state
  }

  const init = baseURL => {
    const useGet = resource => {
        const [ data, dispacth ] = useReducer(reducer, INITIAL_STATE)
      
        useEffect(() => {
          dispacth({ type: 'REQUEST' })
          axios
            .get(baseURL + resource + '.json')
            .then(res => {
              dispacth({ type: 'SUCCESS', data: res.data })
            })
        }, [])
        return data
    }

    const usePost = (resource) => {
        const [ data, dispacth ] = useReducer(reducer, INITIAL_STATE)
        const post = data => {
            dispacth({ type: 'REQUEST' })
            axios
                .post(baseURL + resource + '.json', data)
                .then(res => {
                    dispacth({
                        type: 'SUCCESS',
                        data: res.data
                    })
                })
        }
        return [data, post]
    }

    const useDelete = () => {
        const [ data, dispacth ] = useReducer(reducer, INITIAL_STATE)
        const remove = resource => {
            dispacth({ type: 'REQUEST' })
            axios
                .delete(baseURL + resource + '.json')
                .then(() => {
                    dispacth({
                        type: 'SUCCESS'
                    })
                })
        }
        return [data, remove]
    }


    return { useGet, usePost, useDelete }
}


export default init