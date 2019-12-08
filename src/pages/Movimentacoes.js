import React, { useState } from 'react'
import Rest from '../utils/rest'

const baseURL = 'https://mymoney-vidal.firebaseio.com/'
const { useGet, usePost, useDelete } = Rest(baseURL)


const Movimentacoes = ({ match }) => {
    
    const data = useGet(`movimentacoes/${match.params.data}`)
    const [postData, salvar] = usePost(`movimentacoes/${match.params.data}`)
    const [removeData, remover] = useDelete('')
    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState(0.0)

    const onChangeDesc = evt => {
        setDescricao(evt.target.value)
    }
    const onChangeVal = evt => {
        setValor(parseFloat(evt.target.value))
    }
    const salvarMovimentacao = async() => {
        await salvar({
            descricao,
            valor
        })
        setDescricao('')
        setValor(0.0)
        data.refetch()
    }

    const removerMovimentacao = async(id) => {
        await remover(`movimentacoes/${match.params.data}/${id}`)
        data.refetch()
    }
    
    return(        
        <div className='container'>
            <h1>Movimentações</h1>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                    </tr>
                </thead>

                <tbody>
                    { data.data && /*caso não exista movimentações no mÊs*/
                        Object
                            .keys(data.data)
                            .map(movimentacao => {
                                return(
                                    
                                    <tr>
                                        <td>{data.data[movimentacao].descricao}</td>
                                        <td>
                                            {data.data[movimentacao].valor}
                                            <button onClick={() => removerMovimentacao(movimentacao) }>-</button>
                                        </td>
                                    </tr>
                                )
                            })
                    }
                    <div className='container'>

                        <h3>Adicionar Nova Movimentação</h3>

                        <tr>                        
                            <td>
                                <h4>Descrição:</h4>
                                <input type='text' value={descricao} onChange={onChangeDesc}/>
                            </td>
                            <td>
                                <h4>Valor:</h4>
                                <input type='' value={valor} onChange={onChangeVal}/>
                                <button onClick={salvarMovimentacao}>+</button>
                            </td>
                        </tr>
                    </div>
                </tbody>
            </table>
                
        </div>
    )
}

export default Movimentacoes