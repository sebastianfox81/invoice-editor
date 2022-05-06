import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Alert from './Alert'
import { charCheck, qtyCheck, priceCheck, formatNum } from '../utils'

const InvoiceForm = ({
  item,
  setItem = () => {},
  list,
  setList,
  isEditing,
  setIsEditing,
  editId,
  setEditId,
}) => {
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
    const name = e.target.name
    const value = e.target.value
    setItem({ ...item, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validTitle = charCheck(item.title)
    const validQty = qtyCheck(item.quantity)
    const validPrice = priceCheck(item.price)
    if (!validTitle) {
      showAlert(true, false, false, 'Please enter a valid item name', 'danger')
    } else if (!item.quantity || !validQty) {
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
            return {
              ...invItem,
              title: item.title,
              quantity: Number(item.quantity),
              price: Number(item.price),
            }
          }
          return invItem
        }),
      )
      setItem({ title: '', quantity: 0, price: 0 })
      setEditId(null)
      setIsEditing(false)
    } else {
      const newItem = {
        id: Math.random(),
        title: item.title,
        quantity: Number(item.quantity),
        price: Number(item.price)
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
            name="title"
            type="text"
            value={item?.title || ''}
            placeholder="Item name"
            data-testid='item-name'
            onChange={handleChange}
          />
          <div className="alert-box">
            {alert.showTitle && (
              <Alert data-testid='error' list={list} {...alert} removeAlert={showAlert} />
            )}
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Quantity</Form.Label>
          <Form.Control
            required
            name="quantity"
            type="number"
            // min='1'
            value={item?.quantity || ''}
            data-testid='qty'
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
            name="price"
            type="number"
            min='1'
            value={item?.price || ''}
            data-testid='price'
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
          disabled={!item.title || !item.quantity || !item.price}
        >
          {isEditing ? 'Update Entry' : 'Save Entry'}
        </Button>
      </Form>
    </div>
  )
}

export default InvoiceForm
