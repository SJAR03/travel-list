//* * SJAR Travel List */

// import './App.css'
// import Items from './components/Travel-list-sjar/Items'
// import Logo from './components/Travel-list-sjar/Logo'

// function App () {
//   return (
//     <div className='app-table'>
//       <div className='background-app' />
//       <Logo />
//       <Items />
//     </div>
//   )
// }

// export default App

import './App.css'
import React, { useState } from 'react'

const initialItem = [
  { id: 1, description: 'pants', quantity: 4, isPacked: false },
  { id: 2, description: 'jacket', quantity: 1, isPacked: true },
  { id: 3, description: 'paper', quantity: 16, isPacked: true }
]

function App () {
  const [items, setItems] = useState([])

  function handleAddItems (item) {
    setItems((items) => [...items, item])
  }
  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  )
}

function Logo () {
  return (
    <h1>🌴 Far Away 💼</h1>
  )
}

function Form ({ onAddItems }) {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)

  function handleSubmit (event) {
    event.preventDefault()

    if (!description) return

    const newItem = { id: Date.now(), description, quantity, isPacked: false }
    console.log(newItem)

    onAddItems(newItem)

    setDescription('')
    setQuantity(1)
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😎</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1)
          .map(number =>
            <option value={number} key={number}>
              {number}
            </option>)}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type='submit'>Add item</button>
    </form>
  )
}

function PackingList ({ items }) {
  return (
    <div className='list'>
      <ul>
        {items.map(item =>
          <Item item={item} key={item.id} />
        )}
      </ul>
    </div>
  )
}

function Item ({ item }) {
  return (
    <li>
      <span style={item.isPacked ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  )
}

function Stats () {
  return (
    <footer className='stats'>
      <em>🧳 You have X items on your list, and you alredy pack X (X%)</em>
    </footer>
  )
}

export default App
