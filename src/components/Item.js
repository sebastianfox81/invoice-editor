import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import { formatNum } from '../utils'

const Item = ({
  id,
  title,
  quantity,
  price,
  list,
  setList,
  setIsEditing,
  setEditId,
  setItem,
}) => {
  const total = formatNum(price * quantity)

  const deleteItem = (id) => {
    setList(
      list.filter((item) => {
        return item.id !== id
      }),
    )
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
      price: specificItem.price,
    })
  }
  const toggleAmount = (id, type) => {
    const tempList = list.map((item) => {
      if (item.id === id) {
        if (type === 'inc') {
          return { ...item, quantity: item.quantity + 1 }
        }
        if (type === 'dec') {
          if (item.quantity < 1) {
            item.quantity = 1
          }
          return { ...item, quantity: item.quantity - 1 }
        }
      }
      return item
    })
    setList(tempList)
  }

  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{total}</td>
      <td>
        <button className="remove-btn">
          <MdDeleteForever onClick={() => deleteItem(id)} />
        </button>
        <button className="edit-btn" onClick={() => findItem(id)}>
          <FiEdit />
        </button>
      </td>
      <td className="amount-btns">
        <button className="dec-btn" onClick={() => toggleAmount(id, 'dec')}>
          <BiMinus />
        </button>
        <button className="inc-btn" onClick={() => toggleAmount(id, 'inc')}>
          <BsPlus />
        </button>
      </td>
    </tr>
  )
}

export default Item
