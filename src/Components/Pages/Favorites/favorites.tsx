import React, { useState } from 'react'
import FavCards from '../../FavoritesUi/FavCards'
import BookSvg from '../../bookSvgUi'
import LogOut from '../../LogOut'
const Favorites = () => {
  const [favItems, setFavItems] = useState(
    JSON.parse(localStorage.getItem('favorites')) || [],
  )
  const [itemIdToRemove, setItemIdToRemove] = useState(null)

  const handleRemoveItem = (itemId) => {
    setItemIdToRemove(itemId)
  }

  const handleDeleteItem = () => {
    const updatedItems = favItems.filter((item) => item.id !== itemIdToRemove)
    setFavItems(updatedItems)
    localStorage.setItem('favorites', JSON.stringify(updatedItems))
    setItemIdToRemove(null) // Reset itemIdToRemove after deletion
  }

  return (
    <div className="bg-lime min-h-screen font-DM pb-8 overscroll-x-none overscroll-y-none overflow-x-hidden overflow-y-hidden">
      <div className="p-8 bg-green text-white mb-4 drop-shadow-xl flex justify-center gap-2">
        <div className="flex">
          <BookSvg />
          <h1 className="text-center text-3xl">My Favorite Books</h1>
          <BookSvg />
        </div>
        <div className="absolute right-0 sm:bottom-8 bottom-0">
          <LogOut />
        </div>
      </div>
      <div className="flex justify-center ">
        {itemIdToRemove !== null && (
          <div className="w-96 h-64 opacity-95 fixed z-40 bg-blue flex justify-center items-center text-light flex-col rounded-xl">
            <p>Do You Want To Delete This Book From Favorites?</p>
            <div className="flex gap-8 mt-8">
              <button
                onClick={handleDeleteItem}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Yes
              </button>
              <button
                onClick={() => setItemIdToRemove(null)}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-wrap justify-around items-center gap-8 items-start w-screen drop-shadow-lg">
        {favItems.length === 0 ? <p>No favorite items found.</p> : null}
        {favItems.map((item) => (
          <FavCards
            key={item.id}
            item={item}
            onDelete={() => handleRemoveItem(item.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites
