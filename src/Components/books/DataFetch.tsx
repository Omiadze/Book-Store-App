import React, {useEffect, useState} from 'react'
import Card from '../Card'
import { itemsTypes } from '../types/ItemsTypes'

const DataFetch = () => {
    //https://freetestapi.com/api/v1/books

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try
            {
                const response = await fetch ('https://freetestapi.com/api/v1/books')
                const jsonData = await response.json()
                setData(jsonData)
                
            }
            catch(error)
            {
                console.log("error", error)

            }
        }
        fetchData()
        
    }, [])
    console.log(data)
    
  return (
    <div>
        <h1>haiiiii</h1>
        
        {data?.map((item: any, index: number)=> (
            <Card key={index} item={item}/>
        ))}
        
    </div>
  )
}

export default DataFetch