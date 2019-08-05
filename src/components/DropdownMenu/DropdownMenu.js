import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import plus from '../../assets/imgs/plus.png'
import img1 from '../../assets/imgs/img1.png'
import img2 from '../../assets/imgs/img2.png'
import img3 from '../../assets/imgs/img3.png'
import NamedDiviver from '../NamedDivider/NamedDivider'
import MenuItem from '../MenuItem/MenuItem'

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
  {
    type: 'divider',
    name: 'stripe'
  },
  {name: 'Menu item'},
  {name: 'Menu item'},
  {name: 'Menu item'},
  {
    type: 'divider'
  },
  {name: 'Menu item'},
]

const DropdownMenu = ({setPage, theme = 'primary'}) => {
  const [items, setItems] = useState(initialItems)

  useEffect(() => {
    setItems(initialItems)
  }, [])


  return (
    <div className='menu'>
      <header>
        <span className='header__name'>NAME</span>
        <img className='header__img' src={plus} alt='add'/>
      </header>
      <main>
        {
          items.map(({icon, name = '', disabled = false, type = 'page'}, index) => (
            <>
              {
                type === 'page'
                  ? <MenuItem
                      key={name.replace(/\s/gm, '')}
                      setPage={() => setPage(name)}
                      disabled={disabled}
                      icon={icon}
                      theme={theme}
                    >
                      {name}
                    </MenuItem>
                  : <NamedDiviver key={name.replace(/\s/gm, '') + index} name={name}/>
              }

            </>
          ))
        }
      </main>
    </div>
  )
}

DropdownMenu.propTypes = {
  setPage: PropTypes.func.isRequired,
  theme: PropTypes.string
}

DropdownMenu.defaultProps = {
  setPage: () => {},
  theme: 'primary' || 'dark' || 'cyan'
}

export default DropdownMenu