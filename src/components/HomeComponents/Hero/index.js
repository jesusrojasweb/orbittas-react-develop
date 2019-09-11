import React, {useState, useEffect, Fragment} from 'react'
import {Particulas,Propulcion, Robot ,Hero, Copy, Item, Container, Btn, Cursor, Subitle, Title,Propuesta1,Propuesta2,Robot2} from "./styles";
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
   Propuesta = ()=> <Propuesta1 src="https://firebasestorage.googleapis.com/v0/b/pagina-oribttas.appspot.com/o/files%2Fpropuesta1-mujer.png?alt=media&token=6ed5dac7-4f8f-4daf-a360-51f8eadefe31" /> 
  }
  if(propuesta === 2){
    Propuesta = ()=> <Propuesta2 src="https://firebasestorage.googleapis.com/v0/b/pagina-oribttas.appspot.com/o/files%2Fpropuesta2-mujer.png?alt=media&token=0640b8ac-a877-42f9-9afe-3f4e424dd612" />
  }
  if(propuesta === 3){
    Propuesta = ()=> <Fragment>
          <Robot>
            <img src="https://jesusrojasweb.github.io/orbittas/img/robot.png" alt="robot"/>
          </Robot>
          <Propulcion>
            <img src="https://jesusrojasweb.github.io/orbittas/img/propulcion.png" alt="propulcion"/>          
          </Propulcion>
        </Fragment>
  }
  if(propuesta === 4){
    Propuesta = ()=> <Robot2 src="https://firebasestorage.googleapis.com/v0/b/pagina-oribttas.appspot.com/o/files%2Frobot-frente.png?alt=media&token=eef1f60f-6824-4594-9c5e-8f10c39694b0" />
  }

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

