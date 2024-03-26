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
    <div className="bg-lime h-screen flex items-center justify-center">
      <div className="flex flex-wrap justify-center gap-8">
        {welcomeCards.map((card) => (
          <button
            type="button"
            className="focus:outline-none text-white bg-green hover:bg-blue focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-8 py-8  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            <p>{card}</p>
          </button>
        ))}
        <div className="flex items-center hover:cursor-pointer hover:pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            onClick={navToLogin}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Welcome
