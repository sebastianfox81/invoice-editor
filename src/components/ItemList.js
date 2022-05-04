import React from 'react'
import Item from './Item'

const ItemList = ({
  list,
  setList,
  setIsEditing,
  setEditId,
  setItem,
  toggleAmount,
}) => {
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
          return (
            <Item
              key={item.id}
              {...item}
              list={list}
              setList={setList}
              setIsEditing={setIsEditing}
              setEditId={setEditId}
              setItem={setItem}
            />
          )
        })}
      </tbody>
    </table>
  )
}

export default ItemList
