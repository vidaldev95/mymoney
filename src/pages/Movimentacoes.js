import React from 'react'
import Rest from '../utils/rest'

const baseURL = 'https://mymoney-vidal.firebaseio.com/'
const { useGet } = Rest(baseURL)


const Movimentacoes = ({ match }) => {
    
    const data = useGet(`movimentacoes/${match.params.data}`)
    
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
                            .map(movimentacoes => {
                                return(
                                    <tr>
                                        <td>{data.data[movimentacoes].descricao}</td>
                                        <td>{data.data[movimentacoes].valor}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
                
        </div>
    )
}

export default Movimentacoes