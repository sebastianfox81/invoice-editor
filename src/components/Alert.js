import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

const Alert = () => {
  const { alertType, alertText, removeAlert, list } = useGlobalContext()

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [list, removeAlert])

  return <p className={`alert alert-${alertType}`}>{alertText}</p>
}

export default Alert
