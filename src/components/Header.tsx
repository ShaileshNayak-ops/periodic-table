import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
function Header() {
  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand>
          <h1>Periodic Table</h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header
