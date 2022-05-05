import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/user-event'

import InvoiceForm from './InvoiceForm'

test('it should render component to screen', () => {
  render(<InvoiceForm />)
})

// item name input
test('item name input should be rendered', () => {
  render(<InvoiceForm />)
  const itemNameEl = screen.getByTestId('item-name')
  expect(itemNameEl).toBeInTheDocument()
})

test('item name input should be empty', () => {
  render(<InvoiceForm />)
  const itemNameEl = screen.getByTestId('item-name')
  expect(itemNameEl.value).toBe('')
})

test('item name input should change', () => {
  render(<InvoiceForm />)
  const itemNameEl = screen.getByTestId('item-name')
  const testValue = 'item'

  fireEvent.change(itemNameEl, { target: { value: testValue}})
  expect(itemNameEl.value).toBe('')
})


// quantity input
test('quantity amount input should be rendered', () => {
  render(<InvoiceForm />)
  const qtyAmountEl = screen.getByTestId('qty')
  expect(qtyAmountEl).toBeInTheDocument()
})

test('quantity amount input should be empty', () => {
  render(<InvoiceForm />)
  const qtyAmountEl = screen.getByTestId('qty')
  expect(qtyAmountEl.value).toBe('')
})

test('quantity input should change', () => {
  render(<InvoiceForm />)
  const qtyEl = screen.getByTestId('qty')
  const testValue = 'quantity'

  fireEvent.change(itemNameEl, { target: { value: testValue}})
  expect(qtyEl.value).toBe('')
})

// price input
test('price input should be rendered', () => {
  render(<InvoiceForm />)
  const priceEl = screen.getByPlaceholderText(/price/i)
  expect(priceEl).toBeInTheDocument()
})

test('price input should be empty', () => {
  render(<InvoiceForm />)
  const priceEl = screen.getByPlaceholderText(/price/i)
  expect(priceEl.value).toBe("")
})

test('quantity input should change', () => {
  render(<InvoiceForm />)
  const priceEl = screen.getByTestId('price')
  const testValue = 'price'

  fireEvent.change(itemNameEl, { target: { value: testValue}})
  expect(priceEl.value).toBe('')
})

// button input
test('button input should be rendered', () => {
  render(<InvoiceForm />)
  const buttonEl = screen.getByRole('button')
  expect(buttonEl).toBeInTheDocument()
})

// test('button input should be disabled', () => {
//   render(<InvoiceForm />)
//   const buttonEl = screen.getByRole('button')
//   expect(buttonEl).toBeDisabled()
// })


