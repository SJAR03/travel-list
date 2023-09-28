import React, { useState } from 'react'
import './Items.css'
import './ItemList.css'
import ItemList from './ItemList'

const Items = () => {
  const [itemName, setItemName] = useState('')
  const [itemQuantity, setItemQuantity] = useState(1)
  const [itemCategory, setItemCategory] = useState('comida')
  const [itemList, setItemList] = useState([])

  const handleNameChange = (event) => {
    setItemName(event.target.value)
  }

  const handleQuantityChange = (event) => {
    setItemQuantity(parseInt(event.target.value))
  }

  const handleCategoryChange = (event) => {
    setItemCategory(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newItem = {
      name: itemName,
      quantity: itemQuantity,
      category: itemCategory
    }
    setItemList([...itemList, newItem])
    setItemName('')
    setItemQuantity(1)
    setItemCategory('')
  }

  return (

    <div className='container'>

      <div className='items-container'>

        <form onSubmit={handleSubmit} className='form-row'>
          <div className='input-group'>
            <label htmlFor='item-name'>Item</label>
            <input type='text' id='item-name' value={itemName} onChange={handleNameChange} />
          </div>

          <div className='input-group'>
            <label htmlFor='item-quantity'>Cantidad</label>
            <select id='item-quantity' value={itemQuantity} onChange={handleQuantityChange}>
              {[...Array(20)].map((_, index) => (
                <option key={index} value={index + 1}>{index + 1}</option>
              ))}
            </select>
          </div>

          <div className='input-group'>
            <label htmlFor='item-category'>Categoría</label>
            <select id='item-category' value={itemCategory} onChange={handleCategoryChange}>
              <option value='comida'>Comida</option>
              <option value='servicio'>Servicio</option>
              <option value='ropa'>Ropa</option>
              <option value='herramienta'>Herramienta</option>
            </select>
          </div>

          <button type='submit' className='add-button'>+</button>
        </form>

      </div>
      <ItemList items={itemList} />
    </div>
  )
}

export default Items
