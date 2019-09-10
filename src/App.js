import React, {Fragment, useState, Suspense} from 'react'
import {TranslatorProvider} from 'react-translate'
import ReactDOM from 'react-dom'
import {Router, Redirect} from '@reach/router'
import {GlobalStyle} from './styles/GlobalStyles'
import {FontAwesome} from './styles/fontawesome'
import {Fuentes} from './styles/fuentes'
import {Menu} from './components/Menu'
import {Footer} from './components/Footer'
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

let contador = 0
export const App = ()=> {
  const [ruta, setRuta] = useState(null)
  const [idiomaChanded, setIdiomaChanded] = useState(false)
  let language = navigator.language
  let otroIdioma = language.split('-')
  let inicioDeIdioma
  const [idioma, setIdioma] = useState(otroIdioma[0] === 'es' ? false : true)
  
  const [lang, setLang] = useState(idioma ? 'en' : 'es')

  function handleIdioma(argumento) {
    if(!argumento){
      setIdioma(false)
      setIdiomaChanded(true)
      setLang('es')
    }
    if(argumento){
      setIdioma(true)
      setIdiomaChanded(true)
      setLang('en')
    }
  }

  let traduccion = require(`./assets/i18n/${lang}.json`)
  return(
    <TranslatorProvider translations={traduccion}>
      <Suspense fallback={<Loading/>}>
        <GlobalStyle/>
        <Fuentes/>
        <Menu index={ruta} lang={lang} changeIdioma={handleIdioma} idioma={idioma}/>
        <Router>
          <Home changed={idiomaChanded} handleChange={setIdiomaChanded}  idioma={idioma} path={`/`}/>
          <About idioma={idioma} lang={lang} path={`/about`} />
          <Services idioma={idioma} lang={lang} path={`/services`} />
          <Portfolio lang={lang} path={`/portfolio`} />
          <Contact lang={lang} path={`/contact`} />
          <Proyect lang={idioma} path={`/portfolio/:link`} handleRuta={setRuta}  />
          <Loading path={`/loading`} />
        </Router>
        <Footer/>
      </Suspense>
    </TranslatorProvider>
  )
}
