import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const MenuItem = ({children, setPage, disabled, theme, icon}) => {
  return (
    <div
      onClick={setPage}
      className={`
        item 
        ${disabled && 'item--disabled'} 
        ${theme} 
      `}
    >
      {
        icon &&
          <div className='item__img-wrapper'>
            <img src={icon} alt='icon'/>
          </div>
      }
      <span>{children}</span>
    </div>
  )
}

MenuItem.propTypes = {
  setPage: PropTypes.func.isRequired,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  icon: PropTypes.any
}

MenuItem.defaultProps = {
  setPage: () => {},
  theme: 'primary' || 'dark' || 'cyan',
  disabled: false,
  children: null,
  icon: null
}

export default MenuItem