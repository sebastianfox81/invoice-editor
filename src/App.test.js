import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('renders invoice editor title to screen', () => {
  render(<App />)
  const title = screen.getByTestId('titleId');
  expect(title).toBeInTheDocument()
})
