import { useState } from "react"
import Container from "react-bootstrap/Container"
import Header from "./components/Header"
import ListElements from "./components/ListElements"

function App() {
  return (
    <div>
      <Header />
      <Container>
        <ListElements />
      </Container>
    </div>
  )
}
export default App
