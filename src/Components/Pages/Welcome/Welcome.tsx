import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate()
  const welcomeCards = [
    'Find Your Favorite Authors',
    'Find Your Favorite Books',
    'And Enjoy',
  ]
  const navToLogin = () => {
    navigate('./login')
  }
  return (
    <div className="bg-lime h-screen flex items-center flex-col justify-center font-DM">
      <div className="flex flex-wrap justify-center gap-8">
        {welcomeCards.map((card) => (
          <button
            type="button"
            className="focus:outline-none text-white bg-green hover:bg-blue focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-8 py-8  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            <p className="text-xl">{card}</p>
          </button>
        ))}
      </div>
      <div className=" mt-8 hover:cursor-pointer hover:pl-2 text-blue">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8"
          onClick={navToLogin}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>
  )
}

export default Welcome
