import { useState } from "react"
import Form from "react-bootstrap/Form"
import { MemoryRouterProps } from "react-router-dom"
function SortElements({ elements, setter }: { elements: any; setter: any }) {
  const [query, setQuery] = useState<string>("")
  const changeHandler = (e: any) => {
    setQuery(e.target?.value)
    const filtered = elements.filter((el: any) => {
      if (query.length == 0) {
        return el
      } else {
        return el.name.toLowerCase().includes(query.toLowerCase())
      }
    })
    setter(filtered)
  }
  return (
    <Form className="p-2">
      <Form.Control
        placeholder="Search for elements... "
        value={query}
        onChange={changeHandler}
      />
    </Form>
  )
}
export default SortElements
