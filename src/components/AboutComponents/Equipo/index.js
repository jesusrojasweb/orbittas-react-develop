import React, {useState} from 'react'
import {Equipo, Contenedor, Title, Grid, Item, Anchor, Head, Body, Nombre, Cargo, Hover, Red,LoaderCircle,LoaderCircleItem} from './styles'
import { FaLinkedin} from "react-icons/fa";
import {getItems} from '../../../hooks/getItems'

let contador = 0;
let ultimo
let cuatro
let cinco

export const EquipoAbout = ()=>{
  const [loading, setLoading] = useState(false)
  const [usuarios, errorUsuarios] = getItems(`${process.env.URL}/users`,setLoading)

  console.log(usuarios)
  return (
    <Equipo>
      <Contenedor>
        <Title>Nuestro equipo</Title>
        <Grid class="grid">
        {
          usuarios[0] === undefined
          // true
          ? <LoaderCircle><LoaderCircleItem></LoaderCircleItem></LoaderCircle>
          : usuarios.map(equipo => {

              contador += 1
              if(contador === 1){
                cuatro = true;
              } else{
                cuatro = false
              }

              if(contador === 2){
                cinco = true
              } else{
                cinco = false
              }
              if(contador === 5){
                ultimo = true
                contador = 0;
              } else{
                ultimo = false
              }
              console.log(contador)



              return <Item key={equipo._id} ultimo={ultimo} cuatro={cuatro} cinco={cinco} >
                <Head>
                  <img src={equipo.profileImage} alt="persona"/>
                  <Hover>
                    <img src={equipo.profileHover} alt="persona" class="img"/>
                  </Hover>
                </Head>
                <Body>
                  <Nombre>{equipo.name}</Nombre>
                  <Cargo>{equipo.cargo}</Cargo>
                </Body>
              </Item>
            })
        }
        </Grid>
      </Contenedor>
    </Equipo>
  )
}
