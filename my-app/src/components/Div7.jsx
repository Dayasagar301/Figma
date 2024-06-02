import { Box, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Div7 = () => {
  return (
    <div style={{height:"428px" ,width:"1512px",backgroundColor:"black" }}>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Box
      backgroundImage={`url("https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__")`}
      backgroundColor="black"
      backgroundPosition="center"
      backgroundSize="cover"
      width="220px"
      height="240px"
    ></Box>
    <Box display="flex" position="relative" right="90px" gap="6%">
    <Text
  fontFamily="Poppins"
  fontSize="20px"
  fontWeight={600}
  lineHeight="19.23px"

  color="#FFFFFF"
>
  Home
</Text>
<Text
  fontFamily="Poppins"
  fontSize="20px"
  fontWeight={600}
  lineHeight="19.23px"
  
  color="#FFFFFF"
>
  IDO
</Text>
<Text
  fontFamily="Poppins"
  fontSize="20px"
  fontWeight={600}
  lineHeight="19.23px"
  textAlign="left"
  color="#FFFFFF"
>
Tokenomics
</Text>
<Text
  fontFamily="Poppins"
  fontSize="20px"
  fontWeight={600}
  lineHeight="19.23px"
  textAlign="left"
  color="#FFFFFF"
>
RoadMap
</Text>
<Text
  fontFamily="Poppins"
  fontSize="20px"
  fontWeight={600}
  lineHeight="19.23px"
  textAlign="left"
  color="#FFFFFF"
>
Whitepaper
</Text>
<Text
  fontFamily="Poppins"
  fontSize="20px"
  fontWeight={600}
  lineHeight="19.23px"
  textAlign="left"
  color="#FFFFFF"
>
Pledge
</Text>
<Text
  fontFamily="Poppins"
  fontSize="20px"
  fontWeight={600}
  lineHeight="19.23px"
  textAlign="left"
  color="#FFFFFF"
>
NFT
</Text>
<Text
  fontFamily="Poppins"
  fontSize="20px"
  fontWeight={600}
  lineHeight="19.23px"
  textAlign="left"
  color="#FFFFFF"
>
Games
</Text>

    </Box>
    
      <Box display="flex" justifyContent="center" alignItems="center" gap="20px" padding="20px">
        <FontAwesomeIcon icon={faTwitter} style={{ color: "white", fontSize: "24px" ,color:"#FF012A"}} />
        <FontAwesomeIcon icon={faTelegram} style={{ color: "white", fontSize: "24px" ,color:"#FF012A"}} />
        <FontAwesomeIcon icon={faEnvelope} style={{ color: "white", fontSize: "24px",color:"#FF012A" }} />
      </Box>
    
        </Box>
      
    </div>
  )
}

export default Div7
