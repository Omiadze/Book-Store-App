import React from 'react'
import { useNavigate } from 'react-router-dom'

const FavotitesUi = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/favorites')
  }

  return (
    <div className="flex  md:ml-8 text-lg">
      <button
        onClick={handleLogin}
        type="button"
        className="text-3xl text-gray-900 bg-white hover:bg-blue hover:text-white border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 "
      >
        <svg
          className="h-8 w-8 text-lime-50 mr-2"
          viewBox="0 0 24 24"
          fill="white"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {' '}
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        <p className="text-xl">Favorites</p>
      </button>
    </div>
  )
}

export default FavotitesUi
