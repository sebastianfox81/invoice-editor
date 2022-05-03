import React from 'react'

const Totals = () => {
  return (
    <div className="table-container">
      <table className="table">
        <tr>
          <td>Subtotal: $</td>
        </tr>
        <tr>
          <td>
            {`Tax (5%)`}: $
          </td>
        </tr>
        <tr>
          <td>Grand Total: $</td>
        </tr>
      </table>
    </div>
  )
}

export default Totals
