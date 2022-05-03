import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Alert from './Alert'
import { charCheck, qtyCheck, priceCheck } from '../utils'

const InvoiceForm = ({ addItem }) => {

  const [ title, setTitle ] = useState('')
  const [ quantity, setQuantity ] = useState(null)
  const [ price, setPrice ] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const item = {
      id: Math.random(),
      title,
      quantity,
      price
    }
    addItem(item)
    setTitle('')
    setQuantity('')
    setPrice('')
  }

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        className="form"
      >
        <Form.Group className="mb-3">
          <Form.Label>Enter Item</Form.Label>
          <Form.Control
            required
            id="title"
            type="text"
            value={title}
            placeholder="Item"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="alert-box"></div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Quantity</Form.Label>
          <Form.Control
            required
            id="quantity"
            type='number'
            value={quantity}
            placeholder="Qty"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <div className="alert-box"></div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Price</Form.Label>
          <Form.Control
            required
            id="price"
            type="number"
            value={price}
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="alert-box"></div>
        </Form.Group>

        <Button
          variant='primary'
          type="submit"
          onClick={handleSubmit}
        >
          Save Entry
        </Button>
      </Form>
    </div>
  )
}

export default InvoiceForm
