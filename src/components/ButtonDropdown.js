import React, { useState } from 'react'

const ButtonDropdown = ({children}) => {
  const [showMenu, setShowMenu] = useState(true)

  return (
    <>
      <button style={styles().button} onClick={() => setShowMenu(!showMenu)}>ButtonDropdown</button>
      <div className='card' style={styles(showMenu).card}>
        {children}
      </div>
    </>
  )
}

const styles = (showMenu = false) => {
  return {
    card: {
      width: '200px',
      borderRadius: '8px',
      height: showMenu ? 'auto' : '0',
      overflow: 'hidden',
    },
    button: {
      borderRadius: '4px',
      backgroundColor: '#2FC29F',
      padding: '10px 15px',
      border: 'none',
      color: 'white'
    }
  }
}

export default ButtonDropdown