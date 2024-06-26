import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ item, onClick }) => {
  const navigate = useNavigate()

  const [isFavorite, setIsFavorite] = useState(false)
  const [detailedItem, setdetailedItem] = useState({})

  useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(detailedItem))
  }, [detailedItem])

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="flex flex-row">
      <div className="relative max-w-sm min-w-[250px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
        <div className="overflow-x-hidden rounded-2xl relative">
          <div className="relative text-center">
            <img
              className="h-[340px] w-[250px] rounded-2xl object-cover "
              src={item.image}
              alt={item.title}
            />

            <div className="absolute inset-0 bg-blue opacity-0 rounded-2xl transition-opacity duration-300 hover:opacity-85 flex justify-center">
              <button
                className=" absolute bottom-6  bg-lime py-2 px-4 rounded-lg shadow-md text-black text-lg duration-300 "
                onClick={() => {
                  setdetailedItem(item)
                  setTimeout(() => {
                    navigate(`/description/${item.id}`)
                  }, 0)
                  console.log('More information button clicked')
                }}
              >
                Details
              </button>
            </div>
          </div>
          <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </p>
        </div>
        <div className="mt-4 pl-2 mb-2 flex justify-between ">
          <div>
            <p className="text-lg font-semibold text-gray-900 mb-0">
              {item.title}
            </p>
            <p className="text-md text-gray-800 mt-0">
              <strong>Price: </strong>
              {item.price.map((g, index) => (
                <span key={index}>{g} </span>
              ))}
            </p>
            <p>
              <strong>Author: </strong>
              {item.author}
            </p>
          </div>
          <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 group-hover:opacity-70 ${isFavorite ? 'text-green' : 'text-blue'}`}
              fill={`${isFavorite ? '#ffb4ac' : 'none'}`}
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => {
                toggleFavorite()

                onClick(item)
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
