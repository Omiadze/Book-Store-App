// src/components/Login.tsx
import React, { useState } from 'react'
import CoverImg from '../../../src/assets/Images/Group 48095919.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    // Dummy
    if (username === 'Teo22' && password === 'teoteo') {
      const dummyToken = 'dummyToken123'
      localStorage.setItem('token', JSON.stringify(dummyToken))

      navigate('/home')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="bg-lime flex items-center justify-center flex-col h-screen pt-8 gap-8 md:flex-row md:justify-between  md:pt-0 font-DM ">
      <img
        className="md:object-cover md:h-screen w-1/2 md:w-1/2"
        src={CoverImg}
        alt=""
      />

      <div className="flex  justify-center items-center w-screen">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 ">
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              className="bg-green hover:bg-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
