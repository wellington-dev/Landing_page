import TextContent from '../TextContent'
import CoverGif from '../CoverGif'

import {Container, Box} from './styles'

function ContainerMain() {
  return (
    <Container>
   
        <Box><TextContent/></Box>
        <Box><CoverGif/></Box>
    
    </Container>
  )
}

export default ContainerMain