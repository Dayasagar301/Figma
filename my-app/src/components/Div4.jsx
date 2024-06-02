import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const Div4 = () => {
  const imageUrl =
    "https://s3-alpha-sig.figma.com/img/c869/1086/fe977eb60a56b9a690490c109cbb1a69?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WNtglA2Gz2epU-1a2Ozh30fZewTYeQXla3H0u-elayvseL80rZ2~KMi1DbHEhy0-1uZqXcGGventbMstH91zqKLJbs7dFoMP~FkyBmSA9RrwZTa5cAUsZXk6PNOvKUkHE6X5xbySw34QukmRk28lx6JDTIYh9c1QeZrh-0vbn6Kqbid-8EstrOgAS7ptSkVksx5Gd-bsAKHj0IMG7P3f51CoyfY6xvDzF2bUJvZvBeoPRocdnkwfqOA2xDIF3894egqBnGI65r7xaKLmEvnSjeF4HIc4PfA1Bxy54ipI4QI9pjN9gehokkP25JntOm0iuGfBj0mq0NdLFZuKfZBMPA__";

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
      w="300px" // Adjust width as needed
      h="400px" // Adjust height as needed
      backgroundImage="url('https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__')"
      
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
      top="130px"
    ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Div4;
