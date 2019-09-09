import React from 'react'
import {Empatia, Pasion, Focus, Equipo} from './Ilustraciones'
import {Valores, Grid, Item, Head, Valor, Descripcion} from './styles'
import {useTranslate} from 'react-translate'

export const ValoresAbout = ()=>{
  let t = useTranslate('valoresAboutPage')
  return(
    <Valores>
      <Grid>
        <Item>
          <Head>
            <Empatia/>
          </Head>
          <Valor>{t('empathy')}</Valor>
          <Descripcion>{t('empathyDescription')}</Descripcion>
          
        </Item>
        <Item>
          <Head>
            <Pasion/>
          </Head>
          <Valor>{t('passion')}</Valor>
          <Descripcion>{t('passionDescription')}</Descripcion>
          
        </Item>
        <Item>
          <Head>
            <Focus/>
          </Head>
          <Valor>{t('focus')}</Valor>
          <Descripcion>{t('focusDescription')}</Descripcion>
          
        </Item>
        <Item>
          <Head>
            <Equipo/>
          </Head>
          <Valor>{t('teamwork')}</Valor>
          <Descripcion>{t('teamDesciption')}</Descripcion>
          
        </Item>
      </Grid>
    </Valores>
  )
}
