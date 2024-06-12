import {  Stack, Container  } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

export const BASE_URL = import.meta.env.Mode === "development" ? "http://localhost:4000/api" : "/api"
const App = () => {
  return (
    <Stack h="100vh">
      <Navbar></Navbar>
      <Container>
        <TodoForm></TodoForm>
        <TodoList></TodoList>
      </Container>
    </Stack>
    
    
  )
}

export default App