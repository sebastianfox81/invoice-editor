import React, { useState } from 'react'
import { InvoiceForm, ItemList, Totals } from './components'
import { Container, Row, Col } from 'react-bootstrap'
import { data } from './data'

const App = () => {
  const [list, setList] = useState([])
  const [item, setItem] = useState({ title: '', quantity: '', price: '' })
  const [ editId, setEditId ] = useState(null)
  const [ isEditing, setIsEditing ] = useState(false)

  return (
    <div className="section-center">
      <h1 className="title">Invoice Editor</h1>
      <Container>
        <Row className="m-5">
          <Col sm={4} className="left-column">
            <InvoiceForm
              item={item}
              setItem={setItem}
              list={list}
              setList={setList}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              editId={editId}
              setEditId={setEditId}
            />

            <Totals />
          </Col>
          <Col sm={8} className="right-column">
            <ItemList
              list={list}
              setItem={setItem}
              setList={setList}
              setIsEditing={setIsEditing}
              setEditId={setEditId}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
