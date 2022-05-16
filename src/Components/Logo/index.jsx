import React from 'react'
import Nft from '../../assets/nft.png' //fica

import {LogoText} from './styles'
function Logo() {
  return (
    <LogoText>
      <img src={Nft} alt='imagens de nfts' />
    </LogoText>
  )
}

export default Logo
