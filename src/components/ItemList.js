import React from 'react'
import Item from './Item'
import { useGlobalContext } from '../context'

const ItemList = () => {
  const { list } = useGlobalContext()

  return (
    <table>
      <tbody>
        <tr>
          <th>Item Name</th>
          <th>Amount</th>
          <th>Price</th>
          <th>Total</th>
          <th>Action</th>
          <th>Inc/Dec</th>
        </tr>

        {list.map((item) => {
          return <Item key={item.id} {...item} />
        })}
      </tbody>
    </table>
  )
}

export default ItemList
