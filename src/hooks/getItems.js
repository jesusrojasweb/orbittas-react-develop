import {useState, useEffect} from 'react'

export const getItems = (url, loading) =>{
  const [item, setItem] = useState([])
  const [error, setError] = useState(false)
  
  useEffect(()=>{
    loading(true)
    window.fetch(url)
    .then(res=> {
      loading(false)
      return res.json()}
    )
    .then(response =>{
      loading(false)
      setItem(response.data)
    })
    .catch(err => {
      setError(err)
      return console.error('Hubo un error', err)
    })

  },[])


  return [item, error]
}
