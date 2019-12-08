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
        const carregar = async() => {
          dispacth({ type: 'REQUEST' })
          const res = await axios.get(baseURL + resource + '.json')
          dispacth({ type: 'SUCCESS', data: res.data })
        }
        useEffect(() => {
          carregar()
        }, [resource])

        return {
          ...data,
          refetch: carregar
        }
    }

    const usePost = (resource) => {
        const [ data, dispacth ] = useReducer(reducer, INITIAL_STATE)
        const post = async(data) => {
            dispacth({ type: 'REQUEST' })
            const res = await axios.post(baseURL + resource + '.json', data)         
            dispacth({
                type: 'SUCCESS',
                data: res.data
            })               
        }
        return [data, post]
    }

    const useDelete = () => {
        const [ data, dispacth ] = useReducer(reducer, INITIAL_STATE)
        const remove = async (resource) => {
            dispacth({ type: 'REQUEST' })
            await axios
                .delete(baseURL + resource + '.json')                
                dispacth({
                    type: 'SUCCESS'
                })               
        }
        return [data, remove]
    }


    return { useGet, usePost, useDelete }
}


export default init