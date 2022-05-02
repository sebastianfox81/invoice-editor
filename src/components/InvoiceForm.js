import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useGlobalContext } from '../context'
import Alert from './Alert'
import { charCheck, qtyCheck, priceCheck } from '../utils'

const InvoiceForm = () => {


  const handleInputChange = (e) => {

  }

  const handleSubmit = (e) => {
    e.preventDefault()




  }
  return (
    <div>
      <Form
        noValidate
        onSubmit={handleSubmit}
        className="form"
      >
        <Form.Group className="mb-3">
          <Form.Label>Enter Item</Form.Label>
          <Form.Control
            required
            id="title"
            type="text"
            placeholder="Item"
            onChange={handleInputChange}
          />
          <div className="alert-box"></div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Quantity</Form.Label>
          <Form.Control
            required
            id="quantity"
            type="text"
            placeholder="Qty"
            onChange={handleInputChange}
          />
          <div className="alert-box"></div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Price</Form.Label>
          <Form.Control
            required
            id="price"
            type="text"
            placeholder="Price"
            onChange={handleInputChange}
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
