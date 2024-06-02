import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const Div3 = () => {
  const imageUrl =
    "https://s3-alpha-sig.figma.com/img/b6b9/0f7f/8e9b3d8d12c20152d7f3a9b31de44fe8?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NCYtvR~628jEbUTFcpnz6ogAaDE3ysJ5D5cUi0Wq9Wz1QKJEabU4zd1DnR9LWwclo~hvPTUlIlF3tGRUnx5wrv01asgSn~y8Ye9ahEVu-5T~IJAkKokvfO9qN0VQQl-wllJe2c7A-jVHEAqGqL1k0VZ1diNOLmGKLE4kj1eKp-PT7aiOjEXIXgMYnr5s2Idt-rV~ZWIljgtjXbbtnRgKt3igmvC6OFIsUjxBN958KL2We91IfvNZtO5HUI5dmYdmY8y1vEfp1oYedenQnxSWuFpgq4-y5cj0QHi8~8wC4veprvWG98DC9mmlkSCgpSfm7TpiZu4mnynRLkAsOspuBQ__";

  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "bottom center", // Adjusted background position
        backgroundSize: "cover",
        width: "1512px",
        height: "1000px", // Decreased height
       backgroundColor:"black",
        opacity: "0.71",
      }}
    >
      <Box
        width="823px"
        height="54px"
        gap="0px"
        opacity="0px"
        position="relative"
        left="344px"
        top="40px"
      >
        <Text
          fontFamily="Shojumaru"
          fontSize="40.92px"
          fontWeight={400}
          lineHeight="54.19px"
          color="#ED0137"
        >
          Participate in our IDO Event!
        </Text>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <Box display="flex" gap="8%">
        <Box>
          <Box
            width="539px"
            height="111px"
            gap="0px"
            opacity="0px"
            position="relative"
            left="80px"
          >
            <Text
              fontFamily="ZCOOL KuaiLe"
              fontSize="20.92px"
              fontWeight={400}
              lineHeight="36.51px"
              textAlign="center"
              color="#E6E3E3"
            >
              During our IDO event, you will gain early access to our
              revolutionary ecosystem, designed to empower everyone to share
              wealth and achieve success.
            </Text>
          </Box>
          <Box
            width="412px"
            height="382px"
            borderRadius="20px"
            border="3px solid red"
            position="relative"
            left="130px"
            top="80px"
            overflow="visible" // Allow content to overflow the box
          >
            <Box
              style={{
                position: "absolute",
                top: "-30px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Button
                width="244px"
                height="70px"
                color="#FFFFFF"
                borderRadius="20px"
                opacity="0px"
                fontFamily="Shojumaru"
                fontSize="18px"
                fontWeight={400}
                lineHeight="23.84px"
                textAlign="left"
                backgroundColor="#ED0137"
                zIndex="1" // Set z-index to make the button appear above the parent Box
              >
                Token Info
              </Button>
            </Box>
            <Box
              width="100%"
              height="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <br />
              <br />
              <Box
                display="flex"
                justifyContent="space-between"
                position="relative"
                right="50px"
                top="20px"
              >
                <Box
                  marginBottom="20px"
                  width="176px"
                  height="40px"
                  fontFamily="ZCOOL KuaiLe"
                  fontSize="20px"
                  fontWeight={400}
                  lineHeight="20px"
                  textAlign="center"
                  color="wheat"
                >
                  Total Token Supply
                </Box>
                <Box
                  width="39px"
                  height="20px"
                  top="1624.27px"
                  left="399px"
                  gap="0px"
                  opacity="0px"
                  fontFamily="ZCOOL KuaiLe"
                  fontSize="20px"
                  fontWeight={400}
                  lineHeight="20px"
                  textAlign="left"
                  color="#DF180A"
                >
                  20%
                </Box>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                position="relative"
                right="50px"
                top="15px"
              >
                <Box
                  marginBottom="20px"
                  width="176px"
                  height="40px"
                  fontFamily="ZCOOL KuaiLe"
                  fontSize="20px"
                  fontWeight={400}
                  lineHeight="20px"
                  textAlign="center"
                  color="wheat"
                >
                  Sodt Cap
                </Box>
                <Box
                  width="39px"
                  height="20px"
                  gap="0px"
                  fontFamily="ZCOOL KuaiLe"
                  fontSize="20px"
                  fontWeight={400}
                  lineHeight="20px"
                  textAlign="center"
                  color="#DF180A"
                  whiteSpace="nowrap" // Prevent text wrapping
                >
                  200BNB
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                position="relative"
                right="30px"
                top="1px"
              >
                <Box
                  marginBottom="20px"
                  width="176px"
                  height="40px"
                  fontFamily="ZCOOL KuaiLe"
                  fontSize="20px"
                  fontWeight={400}
                  lineHeight="20px"
                  textAlign="center"
                  color="wheat"
                >
                  Initil exchange rate
                </Box>
                <Box
                  width="39px"
                  height="20px"
                  gap="0px"
                  fontFamily="ZCOOL KuaiLe"
                  fontSize="20px"
                  fontWeight={400}
                  lineHeight="20px"
                  textAlign="center"
                  color="#DF180A"
                  whiteSpace="nowrap" // Prevent text wrapping
                >
                  1BNB
                </Box>
              </Box>
              <br />
              <Box
                position="relative"
                bottom="20px"
                width="176px"
                height="40px"
                fontFamily="ZCOOL KuaiLe"
                fontSize="20px"
                fontWeight={400}
                lineHeight="20px"
                textAlign="center"
                color="wheat"
                whiteSpace="nowrap"
                marginRight="100px"
              >
                Recommended Referral Commission
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                position="relative"
                right="30px"
                top="10px"
              >
                <Box
                  marginBottom="20px"
                  width="176px"
                  height="40px"
                  fontFamily="ZCOOL KuaiLe"
                  fontSize="20px"
                  fontWeight={400}
                  lineHeight="20px"
                  textAlign="center"
                  color="wheat"
                >
                  Ist generation
                </Box>
                <Box
                  width="39px"
                  height="20px"
                  gap="0px"
                  fontFamily="ZCOOL KuaiLe"
                  fontSize="20px"
                  fontWeight={400}
                  lineHeight="20px"
                  textAlign="center"
                  color="#DF180A"
                  whiteSpace="nowrap" // Prevent text wrapping
                >
                  5%
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                position="relative"
                right="30px"
                top="10px"
              >
                <Box
                  marginBottom="20px"
                  width="176px"
                  height="40px"
                  fontFamily="ZCOOL KuaiLe"
                  fontSize="20px"
                  fontWeight={400}
                  lineHeight="20px"
                  textAlign="center"
                  color="wheat"
                >
                  2nd generation
                </Box>
                <Box
                  width="39px"
                  height="20px"
                  gap="0px"
                  fontFamily="ZCOOL KuaiLe"
                  fontSize="20px"
                  fontWeight={400}
                  lineHeight="20px"
                  textAlign="center"
                  color="#DF180A"
                  whiteSpace="nowrap" // Prevent text wrapping
                >
                  2%
                </Box>
              </Box>
            </Box>
          </Box>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Button
            position="relative"
            left="250"
            height="39px"
            paddingRight="10px"
            paddingLeft="10px"
            paddingTop="20px"
            paddingBottom="20px"
            width="138px"
            borderRadius="16.21px"
            background="linear-gradient(93.73deg, #D51B46 10.19%, #EE6910 98.19%)"
            fontFamily="ZCOOL KuaiLe"
          >
            Connect Wallet
          </Button>
          <br />
          <br />
          <Text
            style={{
              fontFamily: "Shojumaru",
              fontSize: "28px",
              fontWeight: 400,
              lineHeight: "37.08px",
              color: "#ED0137",

              marginLeft: "100px",
              textAlign: "center",
            }}
          >
            Become an affiliate & Earn <br />
            7% as Commission!
          </Text>
          <br />
          <Box
            height="48px"
            width="467px"
            borderRadius="20px"
            border="1px solid red"
            marginLeft="100px"
            display="flex"
          >
            <Text
              fontFamily="ZCOOL KuaiLe"
              fontSize="16px"
              fontWeight={400}
              lineHeight="16px"
              paddingLeft="20px"
              color="#EDEBEB"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              Generate a unique referral link
            </Text>
            <Button
              fontFamily="ZCOOL KuaiLe"
              fontSize="16px"
              fontWeight={400}
              lineHeight="16px"
              position="relative"
              left="100px"
              top="3px"
              color="#EDEBEB"
              backgroundColor=" #ED0137;
              "
              borderRadius="20px"
            >
              Generate
            </Button>
          </Box>
        </Box>
        <Box>
          <Box
            height="80px"
            width="240px"
            display="flex"
            gap="2%"
            position="absolute"
            transform="translate(240px, 20px)"
          >
            <Box display="flex" gap="5%">
              <Box height="80px" width="51.75px" border="1px solid red">
                <Text
                  fontFamily="Roboto Mono"
                  fontSize="64.69px"
                  left="7px"
                  position="relative"
                  bottom="10px"
                  fontWeight={700}
                  textAlign="center"
                  color="#E1E1E6"
                  height="48px"
                  width="32px"
                >
                  0
                </Text>
              </Box>
              <Box height="80px" width="51.75px" border="1px solid red">
                <Text
                  fontFamily="Roboto Mono"
                  fontSize="64.69px"
                  left="7px"
                  position="relative"
                  bottom="10px"
                  fontWeight={700}
                  textAlign="center"
                  color="#E1E1E6"
                  height="48px"
                  width="32px"
                >
                  0
                </Text>
              </Box>
            </Box>
            <Box>
              <Text
                style={{
                  fontFamily: "Roboto Mono",
                  fontSize: "64.69px",
                  fontWeight: 700,
                  textAlign: "center",
                  color: "#ED0137",
                }}
              >
                :
              </Text>
            </Box>

            <Box display="flex" gap="5%">
              <Box height="80px" width="51.75px" border="1px solid red">
                <Text
                  fontFamily="Roboto Mono"
                  fontSize="64.69px"
                  left="7px"
                  position="relative"
                  bottom="10px"
                  fontWeight={700}
                  textAlign="center"
                  color="#E1E1E6"
                  height="48px"
                  width="32px"
                >
                  0
                </Text>
              </Box>

              <Box height="80px" width="51.75px" border="1px solid red">
                <Text
                  fontFamily="Roboto Mono"
                  fontSize="64.69px"
                  left="7px"
                  position="relative"
                  bottom="10px"
                  fontWeight={700}
                  textAlign="center"
                  color="#E1E1E6"
                  height="48px"
                  width="32px"
                >
                  0
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
  height="738px"
  width="708px"
  border="2px solid red"
  marginTop="60px"
  borderRadius="20px"
  display="flex"
  flexDirection="column"
  alignItems="center"
>
  <br />
  <Text
    position="relative"
    top="8%"
    width="312px"
    height="64px"
    gap="0px"
    opacity="0px"
    fontFamily="Shojumaru"
    fontSize="48px"
    fontWeight={400}
    lineHeight="63.56px"
    color="#ED0137"
  >
    PRESALE 1
  </Text>
  <br />
  <br />
  <br />
  <Text
    fontFamily="ZCOOL KuaiLe"
    fontSize="32px"
    fontWeight={400}
    lineHeight="32px"
    textAlign="left"
    color="#F5F1F1"
  >
    1 Saviour = 0.657 USDT
  </Text>
  <br />
  <Text
    fontFamily="ZCOOL KuaiLe"
    fontSize="32px"
    fontWeight={400}
    lineHeight="32px"
    textAlign="left"
    color="#F5F1F1"
  >
   Next Stage Price = 0.723 USDT
  </Text>
  <br />
  <Text
    fontFamily="ZCOOL KuaiLe"
    fontSize="32px"
    fontWeight={400}
    lineHeight="32px"
    textAlign="left"
    color="#F5F1F1"
  >
   Sold - $34,56,56,764/$50,00,00,000
  </Text>
  <br />
  <Text
    fontFamily="ZCOOL KuaiLe"
    fontSize="32px"
    fontWeight={400}
    lineHeight="32px"
    textAlign="left"
    color="#F5F1F1"
  >
   Raised - $34,56,56,764/$40,00,00,000
  </Text>
  <br />
  <Box
            height="48px"
            width="467px"
            borderRadius="20px"
            border="1px solid red"
            marginLeft="100px"
            display="flex"
          >
            <Text
              fontFamily="ZCOOL KuaiLe"
              fontSize="16px"
              fontWeight={400}
              lineHeight="16px"
              paddingLeft="20px"
              color="#EDEBEB"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
            Enter the amount (BNB)
            </Text>
          
          </Box>
          <br />
  <Box
            height="48px"
            width="467px"
            borderRadius="20px"
            border="1px solid red"
            marginLeft="100px"
            display="flex"
          >
            <Text
              fontFamily="ZCOOL KuaiLe"
              fontSize="16px"
              fontWeight={400}
              lineHeight="16px"
              paddingLeft="20px"
              color="#EDEBEB"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
            Minimum Quantity to Buy
            </Text>
          
          </Box>
          <br />
  <Box
            height="48px"
            width="467px"
            borderRadius="20px"
            border="1px solid red"
            marginLeft="100px"
            display="flex"
          >
            <Text
              fontFamily="ZCOOL KuaiLe"
              fontSize="16px"
              fontWeight={400}
              lineHeight="16px"
              paddingLeft="20px"
              color="#EDEBEB"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
            Maximum Quantity of Tokens
            </Text>
          
          </Box>
          <br />
            <Box display="flex" flexDirection="row" gap="10%" >
          <Button
              fontFamily="ZCOOL KuaiLe"
              fontSize="16px"
              fontWeight={400}
              lineHeight="16px"
              position="relative"
              
              color="#EDEBEB"
              backgroundColor=" #ED0137;
              "
              borderRadius="20px"
            >
              Buy
            </Button>
            <Button 
              fontFamily="ZCOOL KuaiLe"
              fontSize="16px"
              fontWeight={400}
              lineHeight="16px"
              position="relative"
              left="40px"
              color="#EDEBEB"
              backgroundColor=" #ED0137;
              "
              borderRadius="20px"
            >
              CalmDrop
            </Button>
          </Box>
</Box>

        </Box>
      </Box>
    </div>
  );
};

export default Div3;
