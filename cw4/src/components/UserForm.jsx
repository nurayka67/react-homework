import React, { useState, useRef, useCallback } from 'react'

const UserForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const lastNameRef = useRef(null)

  const focusLastName = () => {
    if (lastNameRef.current) {
      lastNameRef.current.focus()
    }
  }

  const showData = useCallback(() => {
    alert(`First Name: ${firstName}, Last Name: ${lastName}`)
  }, [firstName, lastName])

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          style={{ padding: '8px', width: '200px' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <input
          ref={lastNameRef}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          style={{ padding: '8px', width: '200px' }}
        />
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button 
          onClick={focusLastName}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Focus Last Name
        </button>
        <button 
          onClick={showData}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Show Data
        </button>
      </div>
    </div>
  )
}

export default UserForm