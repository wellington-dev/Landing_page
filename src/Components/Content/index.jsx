import React, {useState} from 'react'
import Logo from '../Logo'
import Button from '../Button'
import Main from '../SectionMain/Main'

import {Container,
        NavBar,
        Menu,
        MenuItem,
        HamburgueMenu} from './styles'


function Content() {

  const [click, setClick] = useState(false)

  return (
    <Container>
      <NavBar>
        <Logo />

        <HamburgueMenu click={click} onClick={()=>setClick(!click)} >
            &nbsp;
        </HamburgueMenu>

        <Menu click={click}>
          <MenuItem>Marketplace</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Roadmap</MenuItem>
          <MenuItem>Team</MenuItem>
          <MenuItem>Faq</MenuItem>          
        </Menu>
    
          <Button>Sign Up</Button>
      </NavBar>

      <Main/>
    </Container>
  )
}

export default Content