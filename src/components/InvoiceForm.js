import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useGlobalContext } from '../context'
import Alert from './Alert'
import { charCheck, qtyCheck, priceCheck } from '../utils'

const InvoiceForm = () => {
  const {
    title,
    quantity,
    price,
    handleChange,
    addItem,
    isEditing,
    editItem,
    showAlertTitle,
    showAlertQty,
    showAlertPrice,
    validationError
  } = useGlobalContext()

  const handleInputChange = (e) => {
    const name = e.target.id
    const value = e.target.value
    handleChange({ name, value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validTitle = charCheck(title)
    const validQty = qtyCheck(quantity)
    const validPrice = priceCheck(price)

    if (!title || !validTitle) {
      validationError('title')
    } else if (!quantity || !validQty) {
      validationError('qty')
    } else if (!price || !validPrice) {
      validationError('price')
    } else if (isEditing) {
      editItem()
    } else {
      addItem()
    }
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
            value={title}
            type="text"
            placeholder="Item"
            onChange={handleInputChange}
          />
          <div className="alert-box">{showAlertTitle && <Alert />}</div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Quantity</Form.Label>
          <Form.Control
            required
            id="quantity"
            value={quantity}
            type="text"
            placeholder="Qty"
            onChange={handleInputChange}
          />
          <div className="alert-box">{showAlertQty && <Alert />}</div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Price</Form.Label>
          <Form.Control
            required
            id="price"
            value={price}
            type="text"
            placeholder="Price"
            onChange={handleInputChange}
          />
          <div className="alert-box">{showAlertPrice && <Alert />}</div>
        </Form.Group>

        <Button
          variant={isEditing ? 'danger' : 'primary'}
          type="submit"
          onClick={handleSubmit}
        >
          {isEditing ? 'Update Entry' : 'Save Entry'}
        </Button>
      </Form>
    </div>
  )
}

export default InvoiceForm
