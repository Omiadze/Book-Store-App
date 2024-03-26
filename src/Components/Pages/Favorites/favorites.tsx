import React, { useState } from 'react'
import FavCards from '../../FavoritesUi/FavCards'

const Favorites = () => {
  const [favItems, setFavItems] = useState(
    JSON.parse(localStorage.getItem('favorites')),
  )

  const handleDeleteItem = (itemId) => {
    const updatedItems = favItems.filter((item) => item.id !== itemId)
    setFavItems(updatedItems)
    localStorage.setItem('favorites', JSON.stringify(updatedItems))
  }

  return (
    <div className="bg-lime h-full">
      <div className="p-8">
        <h1 className="text-center">My Favorite Books</h1>
      </div>
      <div className="flex flex-col flex-wrap justify-around items-center gap-8 items-start w-screen">
        {favItems.map((item) => (
          <FavCards key={item.id} item={item} onDelete={handleDeleteItem} />
        ))}
      </div>
    </div>
  )
}

export default Favorites
