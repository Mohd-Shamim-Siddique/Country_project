import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
  return (
      <div className="error-container">
      <h1 className="error-title">404{error.message}</h1>
      <p className="error-message">Oops! Page not found.</p>
      <div className="rocket">🚀</div>
    </div>
  )
}

export default Error