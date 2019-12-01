import React from 'react'
import Rest from './rest'
import Header from './elements/Header'
import Mouth from './Mouth'
import AddMouth from './AddMouth'

function App() {
  //const data = useGet('movimentacoes/2019-8')

  //const [postData, post] = usePost('movimentacoes/2019-8')
  //const [deleteData, remove] = useDelete()

  const saveNew = ()=>{
    //post({valor: 10, descricao: 'teste'})
  }
  const doRemove = () =>{
    //remove('movimentacoes/2019-8/-LtN2wc6mG3wFNGmvkf4')
  }
  return (
    <div>
      <Header />
      <div className='container'>
        <AddMouth />      
        <Mouth />
      </div>
    </div>
  );
}

export default App
