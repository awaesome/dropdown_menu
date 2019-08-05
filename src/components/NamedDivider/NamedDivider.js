import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const NamedDivider = ({name}) => {
  return (
    <div className='divider-wrapper'>
      { name && <span className='divider-name'>{name.toUpperCase()}</span> }
      <span className='divider' />
    </div>
  )
}

NamedDivider.propTypes = {
  name: PropTypes.string
}

NamedDivider.defaultProps = {
  name: null
}

export default NamedDivider