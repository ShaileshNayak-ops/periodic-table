import Modal from "react-bootstrap/Modal"
interface ElementInfoProps {
  show: boolean
  closer: any
  element: any
}
function ElementInfo(props: ElementInfoProps) {
  return (
    <Modal
      show={props.show}
      onHide={props.closer}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="bg-secondary text-white" closeButton>
        <Modal.Title>{props.element.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-info text-black" id="lists">
        <ul>
          <li>Atomic Number: {props.element.atomicNumber}</li>
          <li>Symbol: {props.element.symbol}</li>
          <li>Atomic Mass: {props.element.atomicMass}</li>
          <li>C.P.K Hex Color: {props.element.cpkHexColor}</li>
          <li>
            Electronic Configuration: {props.element.electronicConfiguration}
          </li>
          <li>Electronegativity: {props.element.electronegravity}</li>
          <li>Atomic Radius: {props.element.atomicRadius}</li>
          <li>Ion Radius: {props.element.ionRadius}</li>
          <li>Van der Waals Radius: {props.element.vanDerWaalsRadius}</li>
          <li>Ionization Energy: {props.element.ionizationEnergy}</li>
          <li>Electron Affinity: {props.element.electronAffinity}</li>
          <li>Oxidation States: {props.element.oxidationStates}</li>
          <li>Standard State: {props.element.standardState}</li>
          <li>Bonding Type: {props.element.bondingType}</li>
          <li>Melting Point: {props.element.meltingPoint}</li>
          <li>Boiling Point: {props.element.boilingPoint}</li>
          <li>Density: {props.element.density}</li>
          <li>Group Block: {props.element.groupBlock}</li>
          <li>Year Discovered: {props.element.yearDiscovered}</li>
        </ul>
      </Modal.Body>
    </Modal>
  )
}
export default ElementInfo
