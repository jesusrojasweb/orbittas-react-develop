import React, {useState, useEffect} from 'react'

export const onScroll = (funcion)=> {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', funcion)
    return ()=> document.removeEventListener('scroll',funcion)

  }, [scroll])
  return [scroll, setScroll]
}
