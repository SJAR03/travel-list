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

const initialItem = [
  { id: 1, description: 'pants', quantity: 4, isPacked: false },
  { id: 2, description: 'jacket', quantity: 1, isPacked: true },
  { id: 3, description: 'paper', quantity: 16, isPacked: true }
]

function App () {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

function Logo () {
  return (
    <h1>🌴 Far Away 💼</h1>
  )
}

function Form () {
  return (
    <div className='add-form'>
      <h3>What do you need for your trip? 😎</h3>
    </div>
  )
}

function PackingList () {
  return (
    <div className='list'>
      <ul>
        {initialItem.map(item =>
          <Item item={item} />
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
