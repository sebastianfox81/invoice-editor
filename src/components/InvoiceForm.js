import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Alert from './Alert'
import { charCheck, qtyCheck, priceCheck, formatNum } from '../utils'

const InvoiceForm = ({
  item,
  setItem,
  list,
  setList,
  isEditing,
  setIsEditing,
  editId,
  setEditId,
}) => {
  const { id, title, quantity, price } = item
  const validTitle = charCheck(title)
  const validQty = qtyCheck(quantity)
  const validPrice = priceCheck(price)

  const [alert, setAlert] = useState({
    showTitle: false,
    showQty: false,
    showPrice: false,
    alertType: '',
    alertText: '',
  })

  const showAlert = (
    showTitle = false,
    showQty = false,
    showPrice = false,
    alertText: '',
    alertType: '',
  ) => {
    setAlert({ showTitle, showQty, showPrice, alertText, alertType })
  }

  const handleChange = (e) => {
    const name = e.target.id
    const value = e.target.value
    setItem({ ...item, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validTitle) {
      showAlert(true, false, false, 'Please enter a valid item name', 'danger')
    } else if (!quantity || !validQty) {
      showAlert(false, true, false, 'Please enter a valid amount', 'danger')
    } else if (!validPrice) {
      showAlert(
        false,
        false,
        true,
        'Please enter a valid dollar amount',
        'danger',
      )
    } else if (isEditing) {
      setList(
        list.map((invItem) => {
          if (invItem.id === editId) {
            return { ...invItem, title, quantity, price}
          }
          return invItem
        }),
      )
      setItem({ title: '', quantity: '', price: '' })
      setEditId(null)
      setIsEditing(false)
    } else {
      const newItem = {
        id: Math.random(),
        title,
        quantity: parseInt(quantity),
        price: formatNum(price),
      }
      setList([...list, newItem])
      setItem({
        title: '',
        quantity: '',
        price: '',
      })
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className="form">
        <Form.Group className="mb-3">
          <Form.Label>Enter Item</Form.Label>
          <Form.Control
            required
            id="title"
            type="text"
            value={title}
            placeholder="Item"
            onChange={handleChange}
          />
          <div className="alert-box">
            {alert.showTitle && (
              <Alert list={list} {...alert} removeAlert={showAlert} />
            )}
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Quantity</Form.Label>
          <Form.Control
            required
            id="quantity"
            type="number"
            value={quantity}
            placeholder="Qty"
            onChange={handleChange}
          />
          <div className="alert-box">
            {alert.showQty && (
              <Alert list={list} {...alert} removeAlert={showAlert} />
            )}
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Price</Form.Label>
          <Form.Control
            required
            id="price"
            type="number"
            value={price}
            placeholder="Price"
            onChange={handleChange}
          />
          <div className="alert-box">
            {alert.showPrice && (
              <Alert list={list} {...alert} removeAlert={showAlert} />
            )}
          </div>
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
