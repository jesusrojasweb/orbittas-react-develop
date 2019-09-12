import React, {useState, useEffect, Fragment} from 'react'
import {Particulas,Propulcion, Robot ,Hero, Copy, Item, Container, Btn, Cursor, Subitle, Title,Propuesta1,Propuesta2,Robot2,Propuesta3, Propuesta4,Propuesta1Hover} from "./styles";
import Particles from 'react-particles-js'
import {useTranslate} from 'react-translate'


function escritura(palabra){
  const [word, setWord] = useState('');
  const [chagedWord, setChangedWord] = useState(false)
  let palabraContador = word;
  let count = 0;
  let interval;
  useEffect(function(){
    interval = setInterval(function() {escribir(palabra)}, 100)
  }, [chagedWord])
  
  function changeWord(otraPalabra) {
    setChangedWord(true)
  }

  let escribir = (palabra)=>{
    let array = palabra.split('');
    if(count < array.length){
      palabraContador += array[count];
      setWord(palabraContador);
      count++
    }
    if(count > (array.length -1)){
      clearInterval(interval)
      count = 0
    }
  }
  return [word, changeWord]
}
const particles = {
    "particles":
      {"number":{
        "value":160,
        "density":{
          "enable":true,
          "value_area":800
        }
      },
      "color":{
        "value":"#00caf5"
      },
      "shape":{
        "type":"circle",
        "stroke":{
          "width":0,
          "color":"#000000"
        },
        "polygon":{
          "nb_sides":5
        },
        "image":{
          "src":"img/github.svg",
          "width":100,
          "height":100
        }
      },
      "opacity":{
        "value":1,
        "random":true,
        "anim":{
          "enable":true,
          "speed":1,
          "opacity_min":0,
          "sync":false}},
          "size":{
            "value":3,
            "random":true,
            "anim":{
              "enable":false,
              "speed":4,"size_min":0.3,"sync":false}},
              "line_linked":{
                "enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
                "move":{
                  "enable":true,"speed":1,"direction":"none",
                  "random":true,"straight":false,"out_mode":"out","bounce":false,
                  "attract":{"enable":false,"rotateX":600,"rotateY":600
                }
              }
            },
            "interactivity":{
              "detect_on":"canvas",
              "events":{
                "onhover":{
                  "enable":true,
                  "mode":"bubble"
                },
                "onclick":{
                  "enable":true,
                  "mode":"repulse"
                },
                "resize":true
              },
              "modes":{
                "grab":{"distance":400,"line_linked":{"opacity":1}},
                "bubble":{
                  "distance":250,"size":0,"duration":2,"opacity":0,"speed":3},
                  "repulse":{
                    "distance":400,"duration":0.4},
                    "push":{"particles_nb":4},
                    "remove":{"particles_nb":2
                  }
                }
              },
              "retina_detect":true}

let Propuesta

export const HeroHome = ({idioma, changed,handleChange, propuesta})=>{
  let t = useTranslate('heroHomePage')
  let tagline = t('tagline');
  const [word,changeWord] = escritura(tagline)

  if(propuesta === 1){
    console.log('entramos')
   Propuesta = ()=> (
     <Fragment>
       <Propuesta1 src="https://firebasestorage.googleapis.com/v0/b/pagina-oribttas.appspot.com/o/files%2Fpropuesta-mujer-1.5.png?alt=media&token=b119f118-c150-4073-a57e-095334625ed8" />
       <Propuesta1Hover src="https://firebasestorage.googleapis.com/v0/b/pagina-oribttas.appspot.com/o/files%2Fpropuesta-mujer-1.5-hover.png?alt=media&token=31474eeb-07f3-46a6-a03d-8704b0d46736" />
     </Fragment>
   )
  }
  if(propuesta === 2){
    Propuesta = ()=> <Propuesta2 src="https://firebasestorage.googleapis.com/v0/b/pagina-oribttas.appspot.com/o/files%2Fpropuesta-mujer-2.png?alt=media&token=08e73258-cfe6-407b-bac4-41b819dd8dea" />
  }
  if(propuesta === 3){
    Propuesta = ()=> <Propuesta3 src="https://firebasestorage.googleapis.com/v0/b/pagina-oribttas.appspot.com/o/files%2Fpropuesta-mujer-3.png?alt=media&token=a1559550-e009-411c-b961-f0f44ea50c6e" />
  }
  if(propuesta === 4){
    Propuesta = ()=> <Propuesta4 src="https://firebasestorage.googleapis.com/v0/b/pagina-oribttas.appspot.com/o/files%2Fpropuesta-mujer-4.png?alt=media&token=ba52a7ff-4ce7-4185-a632-72a8004e2062" />
  }
  // <Robot2 src="https://firebasestorage.googleapis.com/v0/b/pagina-oribttas.appspot.com/o/files%2Frobot-frente.png?alt=media&token=eef1f60f-6824-4594-9c5e-8f10c39694b0" />
  //<Fragment>
  //          <Robot>
  //            <img src="https://jesusrojasweb.github.io/orbittas/img/robot.png" alt="robot"/>
  //          </Robot>
  //          <Propulcion>
  //            <img src="https://jesusrojasweb.github.io/orbittas/img/propulcion.png" alt="propulcion"/>          
  //          </Propulcion>
  //        </Fragment>

  return (
    <Hero>

      <Particulas
        params= {particles}
      />
      <Copy idioma={idioma}>
        <Item>
          <Title><b>¿</b>{t('titleFirst')} <br/> {t('titleSecond')} <strong>{t('titleThird')}?</strong></Title>
          {
            changed
              ?  <Subitle><span>{tagline}</span><Cursor></Cursor></Subitle>
              : <Subitle><span>{word}</span><Cursor></Cursor></Subitle>
          }
          
          <Container>
            <Btn to={`/contact`}>{t('button')}</Btn>
            {/*<Btn to={`/contact`}>¡{t('button')}!</Btn>*/}
          </Container>

        </Item>
        <Item>
          <Propuesta/>
        </Item>
      </Copy>
    </Hero>
  )
}

