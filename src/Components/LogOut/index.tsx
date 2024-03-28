import React from 'react'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const Navigate = useNavigate()
  const handleLogOutBtn = () => {
    localStorage.removeItem('token')
    Navigate('/login')
  }
  return (
    <div>
      <div
        onClick={handleLogOutBtn}
        className="flex items-center hover:cursor-pointer hover:text-white text-blue md:ml-8"
      >
        <p>LOG OUT</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
          />
        </svg>
      </div>
    </div>
  )
}

export default Index
