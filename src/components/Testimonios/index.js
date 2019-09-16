import React, {Fragment, useEffect} from 'react'
import {Testimonio} from '../Testimonio'
import {TestimoniosContainer,Title,Banner, Right, Left,Container,Circulo} from './styles'
import {FaAngleRight, FaAngleLeft} from "react-icons/fa";

export const Testimonios = (props)=>{
  
  let $sliderList 
  
  useEffect(() => {
    $sliderList = document.querySelectorAll('#banner')[0]
    console.log($sliderList.children)
  }, [])


  function siguiente() {
    for(let i = 0; i < $sliderList.children.length; i++){
      let hijo = $sliderList.children[i];
      let next = i + 1
      if(next >= $sliderList.children.length){
        next = i;
      }
      let siguiente = $sliderList.children[next];
      if(hijo.classList[0] === 'active'|| hijo.classList[2] === 'active'){
        cambiar(hijo, siguiente)
        break;
      }
    }
  }

  function anterior() {
    for(let i = 0; i < $sliderList.children.length; i++){
      let hijo = $sliderList.children[i];
      let next = i - 1
      if(next < 0){
        next = 0;
      }
      let siguiente = $sliderList.children[next];
      if(hijo.classList[0] === 'active' || hijo.classList[2] === 'active'){
        console.log('active')
        cambiar(hijo, siguiente)
        break;
      }
    }
  }

  function cambiar(hijo, siguiente) {
    hijo.classList.remove('active')
    siguiente.classList.add('active')
  }

  return(
    <TestimoniosContainer>
      <Title>Testimonios</Title>
      <Container>
        
        <Banner id="banner">
          <Testimonio 
            siguiente={siguiente} 
            anterior={anterior}
            className="active"
          />
          <Testimonio 
            siguiente={siguiente} 
            anterior={anterior}
          />
          <Testimonio 
            siguiente={siguiente} 
            anterior={anterior}
          />
        </Banner>
        <Right onClick={()=> siguiente()}>
          <Circulo>
            <FaAngleRight/>
          </Circulo>
        </Right>
        <Left onClick={()=> anterior()}>
          <Circulo>
            <FaAngleLeft/>
          </Circulo>
        </Left>
      </Container>
    </TestimoniosContainer>
  )
  
}
