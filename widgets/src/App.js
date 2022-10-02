import React, {useState} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

const items = [
  {
    title: 'What is React',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS lib among engineers'
  },
  {
    title: 'How do you use React',
    content: 'You use React by using components'
  }
]

const options = [
  {
    label: 'The color Red',
    value: 'red'
  },
  {
    label: 'The color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
]

// const showComponent = (route, component) => {
//   return window.location.pathname === route ? component: null
// }

// const showAccordion = () => {
//   if (window.location.pathname === '/') {
//     return <Accordion items={items} />
//   }
// }

// const showList = () => {
//   if (window.location.pathname === '/list') {
//     return <Search />
//   }
// }

// const showDropdown = () => {
//   if (window.location.pathname === '/dropdown') {
//     return <Dropdown />
//   }
// }

// const showTranslate = () => {
//   if (window.location.pathname === '/translate') {
//     return <Translate />
//   }
// }

export default () => {
  const [selected, setSelected] = useState(options[0])
  // const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div>
      {/*<Accordion items={items} />*/}
      {/*<Search />*/}
      {/*<button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ?
        <Dropdown selected={selected} onSelectedChange={setSelected} options={options}/>: null
      }*/}
{/*      {showAccordion}
      {showList}
      {showDropdown}
      {showTranslate}
      <Translate />*/}
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/dropdown">
        <Dropdown />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
}