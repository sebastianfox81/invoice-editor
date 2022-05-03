import React, { useState } from 'react'
import { InvoiceForm, ItemList, Totals } from './components'
import { Container, Row, Col } from 'react-bootstrap'
import {data} from './data'
const App = () => {

  const [ list, setList ] = useState(data)

  const deleteItem = (id) => {
    setList(list.filter((item) => {
      return item.id !== id
    }))
  }
  const addItem = (item) => {
    setList([...list, item])
  }



  return (
    <div className="section-center">
      <h1 className="title">Invoice Editor</h1>
      <Container>
        <Row className="m-5">
          <Col sm={4} className="left-column">
            <InvoiceForm addItem={addItem}/>
            <Totals />
          </Col>
          <Col sm={8} className="right-column">
            <ItemList list={list} deleteItem={deleteItem}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
