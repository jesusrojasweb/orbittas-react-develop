import React, {Fragment, useState, Suspense} from 'react'
import ReactDOM from 'react-dom'
import {Router} from '@reach/router'
import {GlobalStyle} from './styles/GlobalStyles'
import {FontAwesome} from './styles/fontawesome'
import {Fuentes} from './styles/fuentes'
import {Menu} from './components/Menu'
import {Loading} from './components/Loading'
// import {Home} from './pages/Home'
// import {Services} from './pages/Services'
// import {About} from './pages/About'
// import {Portfolio} from './pages/Portfolio'
// import {Contact} from './pages/Contact'
// import {Proyect} from './pages/Proyect'

const Home = React.lazy(()=> import('./pages/Home'))
const About = React.lazy(()=> import('./pages/About'))
const Services = React.lazy(()=> import('./pages/Services'))
const Portfolio = React.lazy(()=> import('./pages/Portfolio'))
const Contact = React.lazy(()=> import('./pages/Contact'))
const Proyect = React.lazy(()=> import('./pages/Proyect'))

export const App = ()=> {
  const [ruta, setRuta] = useState(null)
  return(
    <Suspense fallback={<Loading/>}>
      <GlobalStyle/>
      <Fuentes/>
      <Menu index={ruta} />
      <Router>

        <Home path='/'/>
        <About path='/about'/>
        <Services path='/services'/>
        <Portfolio path='/portfolio'/>
        <Contact path='/contact'/>
        <Proyect path='/portfolio/:id' handleRuta={setRuta} />
        <Loading path='/cargando' />
      </Router>
    </Suspense>
  )
}
