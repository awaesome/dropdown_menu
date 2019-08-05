import React, { useState } from 'react';
import './App.css';
import ButtonDropdown from './components/ButtonDropdown'
import DropdownMenu from './components/DropdownMenu/DropdownMenu'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

function App() {
  const [page, setPage] = useState('default')

  let content = 'default'

  switch(page) {
    case 'default': {
      content = (
        <ButtonDropdown>
          <DropdownMenu setPage={setPage} theme='primary' />
        </ButtonDropdown>
      )
      break
    }

    case 'page1': {
      content = <Page1 setPage={() => setPage('default')} />
      break
    }

    case 'page2': {
      content = <Page2 setPage={() => setPage('default')} />
      break
    }

    case 'page3': {
      content = <Page3 setPage={() => setPage('default')} />
      break
    }
    default: content = (
      <ButtonDropdown>
        <DropdownMenu setPage={setPage} theme='primary' />
      </ButtonDropdown>
    )
  }

  return (
    <div className="App">
      {
        content
      }
    </div>
  );
}

export default App;
