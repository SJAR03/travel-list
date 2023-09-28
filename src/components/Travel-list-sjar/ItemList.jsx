import React from 'react'
import './ItemList.css'

const ItemList = ({ items }) => {
  return (
    <div className='item-list-container'>
      <ul className='item-list'>
        {items.map((item, index) => (
          <li key={index} className='item'>
            <div className='item-content'>
              <input type='checkbox' id={`item-${index}`} />
              <label htmlFor={`item-${index}`}>
                <strong>{item.name}</strong>
                <span className='item-quantity'>Cantidad: {item.quantity}</span>
              </label>
            </div>
            <div className='item-category'>
              {item.category}
              <button className='item-details' onClick={() => console.log(`Detalles del item ${item.name}`)}>...</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemList
