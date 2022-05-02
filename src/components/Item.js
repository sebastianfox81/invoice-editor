import React from 'react'
import { useGlobalContext } from '../context'
import { MdDeleteForever } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'

const Item = ({ id, title, quantity, price, total }) => {
  const itemTotal = parseFloat(price * quantity).toFixed(2)

  const { toggleAmount, removeItem, findItem } = useGlobalContext()
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{itemTotal}</td>
      <td>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          <MdDeleteForever />
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
