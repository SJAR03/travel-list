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

function App () {
  const [items, setItems] = useState([])

  function handleAddItems (item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItems (id) {
    setItems((items) => items.filter(item => item.id !== id))
  }

  function handleClearList () {
    const confirm = window.confirm('Are you sure you want to clear the list?')

    if (confirm) setItems([])
  }

  function handleToggleItems (id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, isPacked: !item.isPacked }
          : item))
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        OnDeleteItems={handleDeleteItems}
        OnToggleItems={handleToggleItems}
        OnClearList={handleClearList}
      />
      <Stats items={items} />
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

function PackingList ({ items, OnDeleteItems, OnToggleItems, OnClearList }) {
  const [sortBy, setSortBy] = useState('input')

  let sortedItems

  if (sortBy === 'input') sortedItems = items

  if (sortBy === 'description') {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))
  }

  if (sortBy === 'packed') {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isPacked) - Number(b.isPacked))
  }

  return (
    <div className='list'>
      <ul>
        {sortedItems.map(item =>
          <Item
            item={item}
            OnDeleteItems={OnDeleteItems}
            OnToggleItems={OnToggleItems}
            key={item.id}
          />
        )}
      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>

        <button onClick={() => OnClearList()}>Clear List</button>

      </div>

    </div>
  )
}

function Item ({ item, OnDeleteItems, OnToggleItems }) {
  return (
    <li>
      <input
        type='checkbox' value={item.isPacked} onChange={() => { OnToggleItems(item.id) }}
      />
      <span style={item.isPacked ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => OnDeleteItems(item.id)}>❌</button>
    </li>
  )
}

function Stats ({ items }) {
  if (!items.length) return <p className='stats'><em>Start adding items to your packing ✈</em></p>
  const numItems = items.length
  const packedItems = items.filter(item => item.isPacked).length
  const percentagePacked = Math.round((packedItems / numItems) * 100)

  return (
    <footer className='stats'>
      {percentagePacked === 100
        ? <p>🎉 Good job! You're all packed! 🎉</p>
        : <em>🧳 You have {numItems} items on your list, and you alredy pack {packedItems} ({percentagePacked}%)</em>}
    </footer>
  )
}

export default App
