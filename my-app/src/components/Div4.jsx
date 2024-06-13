import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import imageUrl from '../assets/Rectangle20.png'
import logo from '../assets/Frame.png'
const Div4 = () => {
 

  return (
    <Box
      backgroundImage={`url(${imageUrl})`}
      backgroundColor="black"
      backgroundPosition="center"
      backgroundSize="cover"
      width="100vw"
      height="100vh"
    >
      <Text
        fontFamily="Shojumaru"
        fontSize="44px"
        fontWeight={400}
        lineHeight="52.36px"
        position="relative"
        color="#ED0137"
        position="relative"
        left="560px"
        top="60px"
      >
        Tokenomics
      </Text>
      <br />
      <br />

      <Box display="flex" gap="30%">
        <Box position="relative" left="100px" top="70px">
          <Button
            fontFamily="ZCOOL KuaiLe"
            fontSize="16px"
            padding="30px"
            fontWeight={400}
            lineHeight="16px"
            position="relative"
            left="40px"
            color="#EDEBEB"
            backgroundColor=" #ED0137;
              "
            borderRadius="16px"
            transform="translate(80px,30px)"
          >
            Token Details
          </Button>
          <Box height="306px" width="412px" border="2px solid #DA0909">
            <br />
            <br />
            <div style={{ position: "relative", left: "80px" }}>
              <span
                style={{
                  fontFamily: "ZCOOL KuaiLe",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  color: "#FFFFFF",
                }}
              >
                Name
              </span>
              <span
                style={{
                  fontFamily: "ZCOOL KuaiLe",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  color: "#DF180A",
                  position: "relative",
                  left: "110px",
                }}
              >
                Saviour
              </span>
            </div>
            <br />
            <div style={{ position: "relative", left: "80px" }}>
              <span
                style={{
                  fontFamily: "ZCOOL KuaiLe",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  color: "#FFFFFF",
                }}
              >
                Symbol
              </span>
              <span
                style={{
                  fontFamily: "ZCOOL KuaiLe",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  color: "#DF180A",
                  position: "relative",
                  left: "100px",
                }}
              >
                SVR
              </span>
            </div>
            <br />
            <div style={{ position: "relative", left: "80px" }}>
              <span
                style={{
                  fontFamily: "ZCOOL KuaiLe",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  color: "#FFFFFF",
                }}
              >
                Total Supply
              </span>
              <span
                style={{
                  fontFamily: "ZCOOL KuaiLe",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  color: "#DF180A",
                  position: "relative",
                  left: "40px",
                }}
              >
                1000 Trilion
              </span>
            </div>
            <br />
            <div style={{ position: "relative", left: "80px" }}>
              <span
                style={{
                  fontFamily: "ZCOOL KuaiLe",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  color: "#FFFFFF",
                }}
              >
                Decimals
              </span>
              <span
                style={{
                  fontFamily: "ZCOOL KuaiLe",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  color: "#DF180A",
                  position: "relative",
                  left: "90px",
                }}
              >
                18
              </span>
            </div>
          </Box>
        </Box>
        <Box height="372px" width="885px">
    


        <Box
      w="750px" // Adjust width as needed
      h="300px" // Adjust height as needed
      backgroundImage={`url(${logo})`}
      
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
      top="130px"
      right="130px"
    ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Div4;
