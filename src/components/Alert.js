import React, { useEffect } from 'react'

const Alert = ({ alertType, alertText, removeAlert, list}) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 1500)
    return () => clearTimeout(timeout)
  }, [list])

  return <p className={`alert alert-${alertType}`}>{alertText}</p>
}

export default Alert
