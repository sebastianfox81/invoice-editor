import React from 'react'
import { formatNum } from '../utils'

const Totals = ({ list }) => {

  let totals = list.reduce((invTotal, currItem) => {
    invTotal.total += currItem.quantity * currItem.price
    invTotal.tax += (currItem.quantity * currItem.price) * 0.05
    return invTotal
  }, {
    total: 0,
    tax: 0
  })
  const grand = totals.total + totals.tax
  totals.total = formatNum(totals.total)
  totals.tax = formatNum(totals.tax)

  return (
    <div className="table-container">
      <table className="table">
        <tr>
          <td>Subtotal: ${totals.total}</td>
        </tr>
        <tr>
          <td>
            {`Tax (5%)`}: ${totals.tax}
          </td>
        </tr>
        <tr>
          <td>Grand Total: ${formatNum(grand)}</td>
        </tr>
      </table>
    </div>
  )
}

export default Totals
