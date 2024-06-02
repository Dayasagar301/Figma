import { Box, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Divs6 = () => {
  return (
    <div>
      <Box height="716px" width="1512px" backgroundColor="black" display="flex" >
        <Box
          height="349px"
          width="237px"
          transform="scaleX(-1)"
          backgroundPosition="center"
          position="relative"
          top="120px"
          left="200px"
          backgroundSize="cover"
          backgroundImage="url('https://s3-alpha-sig.figma.com/img/7624/956b/bb5893d955ab92e34ab86102a42d6d23?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1~NO03ErsYsNkWmXnSA4~DC7Miz~9BKRyLhfzbi4ncI2EtBpBikP6Ab9oWmJVCnbuvL5M5KQsrgtlkmEBero7xZoJOf-Dsq9HdEoOFfY0rtiFaC11Gc8600aJ2ZvcdEpmBl8cgjjqe6TVxO0IoTRFQx~yiKw~39A0RKm0N8Wba4ea5hDFCHkW7BV16Y~VhWxYbmVNwdN9RDfRhcVhTLovmGIoF6f5EQsHvNQzYFMkeStp4P2jypS7Sp1oHkTSrbEsH-NPnAiEJmfZf-Otbo3k0SXA~O5loOObJ6PqmF9VjlpIIdyk1ABF42YExaEu5QDj~1qeCtmXC0XClPMX2WQg__')"
        ></Box>
        <Box position="relative" left="500px" display="flex" flexDirection='column' gap="5%">
          <br />
          <br />
          <Text
            fontFamily="Shojumaru"
            fontSize="44px"
            fontWeight={400}
            lineHeight="52.36px"
            position="relative"
            color="#ED0137"
            left="170px"
          >
            FAQ
          </Text>
          <Box
            height="48px"
            width="467px"
            borderRadius="20px"
            border="1px solid red"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <Text color="wheat" lineHeight="16px">
              1
            </Text>
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
              Why Choose "Saviour"?
            </Text>
            <FontAwesomeIcon
              icon={faArrowDown}
              style={{
                width: "16px",
                height: "16px",
                // Top, Right, Bottom, Left

                gap: "0px",
                color: "wheat",
              }}
            />
          </Box>
          <Box
            height="48px"
            width="467px"
            borderRadius="20px"
            border="1px solid red"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <Text color="wheat" lineHeight="16px">
              1
            </Text>
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
              Why is the IDO direction so long ?
            </Text>
            <FontAwesomeIcon
              icon={faArrowDown}
              style={{
                width: "16px",
                height: "16px",
                // Top, Right, Bottom, Left

                gap: "0px",
                color: "wheat",
              }}
            />
          </Box>
          <Box
            height="48px"
            width="467px"
            borderRadius="20px"
            border="1px solid red"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <Text color="wheat" lineHeight="16px">
              1
            </Text>
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
              When will Reading so live?
            </Text>
            <FontAwesomeIcon
              icon={faArrowDown}
              style={{
                width: "16px",
                height: "16px",
                // Top, Right, Bottom, Left

                gap: "0px",
                color: "wheat",
              }}
            />
          </Box>
          <Box
            height="48px"
            width="467px"
            borderRadius="20px"
            border="1px solid red"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <Text color="wheat" lineHeight="16px">
              1
            </Text>
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
              Where we can Claim the Tokens
            </Text>
            <FontAwesomeIcon
              icon={faArrowUp}
              style={{
                width: "16px",
                height: "16px",
                // Top, Right, Bottom, Left

                gap: "0px",
                color: "wheat",
              }}
            />
        
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Divs6;
