import React from 'react'
import Card from '../Card'
import { useState } from 'react'
import { useEffect } from 'react'
import { DATA } from '../books/data'
import SearchUi from '../Ui/SearchUi'
import Favotites from '../Ui/FavoritesUi/button'
import { useNavigate } from 'react-router-dom'

import LogOut from '../LogOut'

const DataFetch = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const checkLocalStorage = () => {
      const item = localStorage.getItem('token')
      return item !== null
    }

    if (!checkLocalStorage()) {
      navigate('/login')
    }
  })

  const [arrayOfFav, setArrayOfFav] = useState([])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(arrayOfFav))
  }, [arrayOfFav])

  const onFavClick = (item) => {
    setArrayOfFav((prevArr) => {
      if (prevArr.includes(item)) {
        return prevArr.filter((favItem) => favItem !== item)
      } else {
        return [...prevArr, item]
      }
    })
  }
  const [query, setQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(DATA)
  const cardsNumber = 20
  const [more, setMore] = useState(cardsNumber)
  const handleMoreCards = () => {
    setMore(more + cardsNumber)
  }

  useEffect(() => {
    const handleDebounceSearch = () => {
      const filteredData = DATA.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          product.summary.toLowerCase().includes(query),
      )
      setFilteredProducts(filteredData)
    }

    const timer = setTimeout(handleDebounceSearch, 600)

    return () => clearTimeout(timer)
  }, [query])

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase())
  }
  return (
    <div className="bg-lime min-h-screen font-DM ">
      <div className="flex justify-center items-center pt-8 flex-col mb-4 md:flex-row ">
        <div className="mb-4">
          <SearchUi onChange={handleChange} query={query} />
        </div>
        <div className="mb-4">
          <Favotites />
        </div>
        <div className="mb-4">
          <LogOut />
        </div>
      </div>

      <div className="flex flex-wrap justify-center pl-8 pr-8">
        {filteredProducts
          .slice(0, more)
          ?.map((item) => (
            <Card key={item.id} item={item} onClick={onFavClick} />
          ))}
      </div>
      <div className="flex justify-center mt-4 ">
        {more < filteredProducts?.length && (
          <button
            className="mb-6 bg-green hover:bg-blue text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={handleMoreCards}
          >
            LOAD MORE
          </button>
        )}
      </div>
    </div>
  )
}

export default DataFetch
