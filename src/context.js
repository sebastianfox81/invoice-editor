import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  showAlertTitle: false,
  showAlertPrice: false,
  showAlertQty: false,
  alertType: '',
  alertText: '',
  subTotal: '',
  tax: '',
  list: [],
  title: '',
  quantity: '',
  price: '',
  editId: null,
  isEditing: false,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }
  useEffect(() => {
    dispatch({ type: 'GET_SUBTOTAL' })
  }, [state.list])

  const handleChange = ({ name, value }) => {
    dispatch({ type: 'HANDLE_CHANGE', payload: { name, value } })
  }
  const addItem = () => {
    dispatch({ type: 'ADD_ITEM' })
  }
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }
  const findItem = (id) => {
    dispatch({ type: 'FIND_ITEM', payload: id })
  }
  const editItem = () => {
    dispatch({ type: 'EDIT_ITEM' })
  }
  const removeAlert = () => {
    dispatch({ type: 'REMOVE_ALERT' })
  }
  const validationError = (target) => {
    dispatch({ type: 'VALIDATION_ERROR', payload: target })
  }
  const clearForm = () => {
    dispatch({ type: 'CLEAR_FORM' })
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleAmount,
        handleChange,
        addItem,
        removeItem,
        findItem,
        editItem,
        removeAlert,
        clearForm,
        validationError,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
