import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import plus from '../../assets/imgs/plus.png'
import img1 from '../../assets/imgs/img1.png'
import img2 from '../../assets/imgs/img2.png'
import img3 from '../../assets/imgs/img3.png'
import NamedDiviver from '../NamedDivider/NamedDivider'

const initialItems = [
  {
    name: 'page1',
    icon: img1,
    disabled: true
  },
  {
    name: 'page2',
    icon: img2,
    disabled: false
  },
  {
    name: 'page3',
    icon: img3,
    disabled: false
  },
]

const additionalItem = [
  {name: 'Menu item'},
  {name: 'Menu item'},
  {name: 'Menu item'},
]

const DropdownMenu = ({setPage, children, theme = 'primary'}) => {
  const [items, setItems] = useState(initialItems)
  const [name, setName] = useState('')

  const handleAddItem = () => {
    setItems(state => ({...state, name}))
  }

  return (
    <div className='menu'>
      <header>
        <span className='header__name'>NAME</span>
        <img className='header__img' src={plus} alt='add'/>
      </header>
      <main>
        {
          items.map(({icon, name, disabled}) => (
            <div
              key={name.replace(/\s/gm, '')}
              onClick={() => setPage(name)}
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
              <span>{name}</span>
            </div>
          ))
        }
        <NamedDiviver />
        {
          additionalItem.map(({icon, name, disabled}) => (
            <div
              key={name.replace(/\s/gm, '')}
              className={`
                item 
                ${disabled && 'item--disabled'} 
                ${theme} 
              `}
            >
              <span>{name}</span>
            </div>
          ))
        }
        <NamedDiviver name='stripe'/>
      </main>
    </div>
  )
}

DropdownMenu.propTypes = {
  setPage: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  theme: PropTypes.string.isRequired
}

DropdownMenu.defaultProps = {
  setPage: () => {},
  theme: 'primary' || 'black'
}

export default DropdownMenu