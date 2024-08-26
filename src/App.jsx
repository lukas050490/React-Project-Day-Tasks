import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Container, List, Input, Button, MapList, Trash, Check } from './styles'

function App() {
  const [list, setList] = useState([])
  const [task, setTask] = useState('')

  function inputChange(event) {
    setTask(event.target.value)
  }

  function clickButton() {
    if (task) {
      setList([...list, { id: uuid(), task, finished: false }])
    }


  }

  function finishTask(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deleteTask(id) {
    const newList = list.filter(item => (
      item.id !== id
    ))

    setList(newList)
  }

  return (
    <>
      <Container>
        <List>
          <Input onChange={inputChange} placeholder=" o que tem para fazer..." />
          <Button onClick={clickButton}>Adicionar</Button>
          <ul>
            {
              list.length > 0 ? (
                list.map(item => (
                  <MapList key={item.id} isFinished={item.finished}>
                    <Check onClick={() => finishTask(item.id)} />
                    <li>{item.task}</li>
                    <Trash onClick={() => deleteTask(item.id)} />
                  </MapList>
                ))
              ) : (
                <h2>Não há Tarefas</h2>
              )
            }

          </ul>
        </List>
      </Container>
    </>
  )
}

export default App

//quando colocar uma chave e um valor igual como 'task' nao precisa repetir o valor
//com o spread operator'...', ele pega o array list esparrama e adciona mais 1
