import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'

const Item = ({ id, title, quantity, price, list, setList, setIsEditing, setEditId, setItem }) => {
  const totals = price * quantity

  const deleteItem = (id) => {
    setList(list.filter((item) => {
      return item.id !== id
    }))
  }

  const findItem = (id) => {
    const specificItem = list.find((item) => {
      return item.id === id
    })
    setIsEditing(true)
    setEditId(id)
    setItem({
      title: specificItem.title,
      quantity: specificItem.quantity,
      price: specificItem.price
    })
  }

  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{totals}</td>
      <td>
        <button className="remove-btn" >
          <MdDeleteForever onClick={() => deleteItem(id)}/>
        </button>
        <button className="edit-btn" onClick={() => findItem(id)}>
          <FiEdit />
        </button>
      </td>
      <td className="amount-btns">
        <button className="dec-btn" >
          <BiMinus />
        </button>
        <button className="inc-btn" >
          <BsPlus />
        </button>
      </td>
    </tr>
  )
}

export default Item
