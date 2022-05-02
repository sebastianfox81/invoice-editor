import React from 'react'
import { useGlobalContext } from '../context'

const Totals = () => {
  const { subTotal, tax } = useGlobalContext()
  return (
    <div className="table-container">
      <table className="table">
        <tr>
          <td>Subtotal: ${subTotal}</td>
        </tr>
        <tr>
          <td>
            {`Tax (5%)`}: ${parseFloat(tax).toFixed(2)}
          </td>
        </tr>
        <tr>
          <td>Grand Total: ${parseFloat(subTotal + tax).toFixed(2)}</td>
        </tr>
      </table>
    </div>
  )
}

export default Totals
