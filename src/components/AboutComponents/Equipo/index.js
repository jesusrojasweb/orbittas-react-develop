import React, {useState, Fragment} from 'react'
import {Equipo, Contenedor, Title, Grid, Item, Anchor, Head, Body, Nombre, Cargo, Hover, Red,LoaderCircle,LoaderCircleItem} from './styles'
import { FaLinkedin} from "react-icons/fa";
import {getItems} from '../../../hooks/getItems'
import {ConexionArriba} from '../../ConexionArriba'
import Context from '../../../Context'
import {useTranslate} from 'react-translate'

let contador = 0;
let ultimo
let cuatro
let cinco

export const EquipoAbout = ({idioma})=>{
  const [loading, setLoading] = useState(false)
  const [usuariosSearch, errorUsuarios] = getItems(`${process.env.URL}/users`,setLoading)
  const [usuarios, setUsuarios] = useState([])

  const t = useTranslate('teamAboutPage')
  return (
    <Equipo>
      <Contenedor>
        <Title>{t('title')}</Title>
        <Grid class="grid">
        <Context.Consumer>
          {
            ({handleUsers, users})=>{
              if(users[0] != undefined){
                setUsuarios(users)
              } else{
                if(usuariosSearch[0] != undefined){
                  handleUsers(usuariosSearch)
                  setUsuarios(usuariosSearch)
                }
              }
              return <Fragment>
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



                      return <Item key={equipo._id} ultimo={ultimo} cuatro={cuatro} cinco={cinco} >
                        <Head>
                          <img src={equipo.profileImage} alt="persona"/>
                          <Hover>
                            <img src={equipo.profileHover} alt="persona" class="img"/>
                          </Hover>
                        </Head>
                        <Body>
                          <Nombre>{equipo.name}</Nombre>
                          {idioma
                            ? <Cargo>{equipo.cargoEn}</Cargo>
                            : <Cargo>{equipo.cargo}</Cargo>
                          }
                          
                        </Body>
                      </Item>
                    })
                }
              </Fragment>
              

            }
          }
        </Context.Consumer>
        </Grid>
      </Contenedor>
      <ConexionArriba/>
    </Equipo>
  )
}
