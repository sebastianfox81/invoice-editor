const reducer = (state, action) => {
  if (action.type === 'TOGGLE_AMOUNT') {
    let tempInv = state.list
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === 'dec') {
            return {
              ...item,
              quantity: item.quantity - 1,
            }
          }
          if (action.payload.type === 'inc') {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          }
        }
        return item
      })
      .filter((item) => {
        return item.quantity !== 0
      })
    return {
      ...state,
      list: tempInv,
    }
  }
  if (action.type === 'GET_SUBTOTAL') {
    let invSubTotal = state.list.reduce(
      (invTotal, invItem) => {
        const { price, quantity } = invItem
        invTotal.total += price * quantity
        return invTotal
      },
      {
        total: 0,
      },
    )
    invSubTotal.total = parseFloat(invSubTotal.total.toFixed(2))
    return {
      ...state,
      subTotal: invSubTotal.total,
      tax: invSubTotal.total * 0.05,
    }
  }
  if (action.type === 'HANDLE_CHANGE') {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    }
  }
  if (action.type === 'ADD_ITEM') {
    const newItem = {
      id: Math.random(),
      title: state.title,
      quantity: parseInt(state.quantity),
      price: parseFloat(state.price),
      total: 0,
    }
    newItem.price = parseFloat(newItem.price).toFixed(2)
    const newList = [...state.list, newItem]
    return {
      ...state,
      list: newList,
      title: '',
      quantity: '',
      price: '',
    }
  }
  if (action.type === 'REMOVE_ITEM') {
    const newList = state.list.filter((item) => {
      return item.id !== action.payload
    })
    return {
      ...state,
      list: newList,
    }
  }
  if (action.type === 'FIND_ITEM') {
    const specificItem = state.list.find((item) => {
      return item.id === action.payload
    })
    const { id, title, quantity, price } = specificItem
    return {
      ...state,
      title,
      quantity: parseInt(quantity),
      price,
      editId: id,
      isEditing: true,
    }
  }
  if (action.type === 'EDIT_ITEM') {
    const tempInvList = state.list.map((item) => {
      if (item.id === state.editId) {
        return {
          ...item,
          title: state.title,
          quantity: parseInt(state.quantity),
          price: parseFloat(state.price),
        }
      }
      return item
    })
    return {
      ...state,
      isEditing: false,
      editId: null,
      list: tempInvList,
      title: '',
      quantity: '',
      price: '',
    }
  }
  if (action.type === 'REMOVE_ALERT') {
    return {
      ...state,
      showAlertTitle: false,
      showAlertPrice: false,
      showAlertQty: false,
      alertType: '',
      alertText: '',
    }
  }
  if (action.type === 'CLEAR_FORM') {
    return {
      ...state,
      isEditing: false,
      editId: null,
      title: '',
      quantity: '',
      price: '',
    }
  }
  if (action.type === 'VALIDATION_ERROR') {
    if (action.payload === 'title') {
      return {
        ...state,
        showAlertTitle: true,
        alertType: 'danger',
        alertText: 'Please enter a valid item',
      }
    }
    if (action.payload === 'qty') {
      return {
        ...state,
        showAlertQty: true,
        alertType: 'danger',
        alertText: 'Please enter a valid quantity amount',
      }
    }
    if (action.payload === 'price') {
      return {
        ...state,
        showAlertPrice: true,
        alertType: 'danger',
        alertText: 'Please enter a valid dollar amount',
      }
    }
  }
  return state
}

export default reducer
