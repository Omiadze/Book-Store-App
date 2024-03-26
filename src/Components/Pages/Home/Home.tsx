import React from 'react'
import Card from '../../Card'
import { useState } from 'react'
import { useEffect } from 'react'
import { DATA } from '../../books/data'
import SearchUi from '../../SearchUi'
import Favotites from '../../FavoritesUi/button'
import { useNavigate } from 'react-router-dom'

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

  // const handleChange = (event) => {
  //   const searhQueary = event.target.value.toLowerCase()
  //   setQuery(searhQueary)

  //   const filteredData = DATA.filter((product) => {
  //     console.log(product)
  //     return (
  //       product.title.toLowerCase().includes(searhQueary) ||
  //       product.summary.toLowerCase().includes(searhQueary)
  //     )
  //   })
  //   setFilteredProducts(filteredData)

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
    <div className="bg-lime">
      <div className="flex justify-center pt-8">
        <SearchUi onChange={handleChange} query={query} />
        <Favotites />
      </div>
      <div className="flex flex-wrap justify-center">
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
