import React from 'react'
import useGet from './useGet'
import usePost from './usePost'
import useDelete from './useDelete'

const url = 'https://mymoney-vidal.firebaseio.com/movimentacoes/2019-8.json'

function App() {
  const data = useGet(url)
  const [postData, post] = usePost(url)
  const [deleteData, remove] = useDelete()

  const saveNew = ()=>{
    post({valor: 10, descricao: 'ola'})
  }
  const doRemove = () =>{
    remove('https://mymoney-vidal.firebaseio.com/movimentacoes/2019-8/-LtN2vtNQUTG494-DKJK.json')
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
