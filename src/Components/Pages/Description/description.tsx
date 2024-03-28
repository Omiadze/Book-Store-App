import React, { useEffect, useState } from 'react'
import { itemsTypes } from '../../types/ItemsTypes'

const Description = () => {
  const [book, setbook] = useState<itemsTypes | null>(null)

  useEffect(() => {
    const storedBook: itemsTypes = JSON.parse(localStorage.getItem('dataKey'))
    if (storedBook) {
      setbook(storedBook)
    }
  }, [])
  const favItems = JSON.parse(localStorage.getItem('favorites'))
  console.log(book, favItems)
  const [fav, setFav] = useState(false)

  useEffect(() => {
    const isBookFavorite = favItems.some((item) => item.id === book?.id)
    setFav(isBookFavorite)
  }, [favItems, book])

  // gogo/
  return (
    <div className="bg-lime font-DM">
      <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
        <div className="py-3">
          <div className="bg-white shadow-lg border-gray-100 justify-center items-center border sm:rounded-3xl p-8 flex space-x-8 flex-col md:flex-row ">
            <div className=" overflow-visible mb-4 md:mb-0">
              <img
                className="rounded-3xl shadow-lg  max-w-[250px]"
                src={book?.image}
                alt=""
              />
            </div>
            {fav && (
              <div className="p-4 bg-green rounded-full text-white ">
                FAVORITE
              </div>
            )}
            <div className="flex flex-col md:justify-between md:p-8 md:w-1/2 space-y-4">
              <div className="flex justify-between items-start ">
                <h2 className="text-3xl font-bold">{book?.title}</h2>
                <div className="bg-yellow-400 font-bold rounded-xl p-2">
                  {book?.id}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400">{book?.year}</div>
                <div className="text-lg text-gray-800">
                  Author: {book?.author}
                </div>
              </div>
              <p className=" text-gray-400 w-full">{book?.summary}</p>
              <div className="flex text-2xl font-bold text-a ">
                <p className="text-blue-600">
                  {book?.price[0]} {book?.price[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
