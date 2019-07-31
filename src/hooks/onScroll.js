import React, {useState, useEffect} from 'react'

export const onScroll = (funcion)=> {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', funcion) || document.addEventListener('mousewheel', (e)=> funcion(e))
    return ()=> document.removeEventListener('scroll',funcion) || document.addEventListener('mousewheel', (e)=> funcion(e))

  }, [scroll])
  return [scroll, setScroll]
}
