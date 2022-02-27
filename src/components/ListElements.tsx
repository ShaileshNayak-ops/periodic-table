import { useState } from "react"
import Table from "react-bootstrap/Table"
import Form from "react-bootstrap/Form"
import elms from "../elements"
import ElementInfo from "./ElementInfo"
function ListElements() {
  const [show, setShow] = useState<boolean>(false)
  const [elemInfo, setElemInfo] = useState()
  const [elements, setElements] = useState(elms)
  const [query, setQuery] = useState<string>("")
  const showModal = (element: any) => {
    setShow(true)
    setElemInfo(element)
  }
  const closeModal = () => {
    setShow(false)
  }

  return (
    <div>
      <Form>
        <Form.Control
          placeholder="Filter Elements..."
          className="m-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Atomic Number</th>
          </tr>
        </thead>
        <tbody>
          {elms
            .filter((el) => {
              if (query === "") {
                return el
              } else if (el.name.toLowerCase().includes(query.toLowerCase())) {
                return el
              }
            })
            .map((element, id) => (
              <tr
                key={id}
                style={{ cursor: "pointer" }}
                onClick={() => showModal(element)}
              >
                <td>{id}</td>
                <td>{element.name}</td>
                <td>{element.symbol}</td>
                <td>{element.atomicNumber}</td>
              </tr>
            ))}
          {show ? (
            <ElementInfo show={show} closer={closeModal} element={elemInfo} />
          ) : (
            ""
          )}
        </tbody>
      </Table>
    </div>
  )
}
export default ListElements
