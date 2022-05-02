import React from 'react'
import { InvoiceForm, ItemList, Totals } from './components'
import { Container, Row, Col } from 'react-bootstrap'

const App = () => {


 

  return (
    <div className="section-center">
      <h1 className="title">Invoice Editor</h1>
      <Container>
        <Row className="m-5">
          <Col sm={4} className="left-column">
            <InvoiceForm />
            <Totals />
          </Col>
          <Col sm={8} className="right-column">
            <ItemList />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
