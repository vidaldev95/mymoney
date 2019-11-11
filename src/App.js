import React from 'react'

import Rest from './rest'

const baseURL = 'https://mymoney-vidal.firebaseio.com/'
const { useGet, usePost, useDelete } = Rest(baseURL)

function App() {
  const data = useGet('movimentacoes/2019-8')
  const [postData, post] = usePost('movimentacoes/2019-8')
  const [deleteData, remove] = useDelete()

  const saveNew = ()=>{
    post({valor: 10, descricao: 'teste'})
  }
  const doRemove = () =>{
    remove('movimentacoes/2019-8/-LtN2wc6mG3wFNGmvkf4')
  }
  return (
    <div>
      <h1>My Money</h1>
      { JSON.stringify(data) }
      { data.loading && <p>Loading...</p> }
      <button onClick={saveNew}>Salvar</button>
      <pre>{JSON.stringify(postData)}</pre>

      <button onClick={doRemove}>Delete</button>
      <pre>{JSON.stringify(deleteData)}</pre>
    </div>
  );
}

export default App
