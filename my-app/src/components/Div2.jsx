import { Box, Button, Grid, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Div2 = () => {
  return (
    <Box bg="black" width="100%" py={{ base: "20px", md: "50px" }}>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="0">
        <Box>
          <Box pl={{ base: "0", md: "152px" }} pt={{ base: "0", md: "50px" }} textAlign={{ base: "center", md: "left" }}>
            <Text
              fontFamily="Shojumaru"
              fontSize={{ base: "32px", md: "44px" }}
              fontWeight={400}
              lineHeight={{ base: "40px", md: "52.36px" }}
              color="#ED0137"
            >
              Introduction
            </Text>
          </Box>

          {/* Display image first on mobile */}
          <Box
            display={{ base: "block", md: "none" }}
            position="relative"
            bottom="0"
            width="100%"
            height="300px"
            bgImage='url("https://s3-alpha-sig.figma.com/img/72d9/2d64/713f95c34c945a62844515044f63fcd4?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PH7-UOlccPF8t3q~uRPdjm-eXO6SvLELF6nO9w4LUU6BfSr6nbxJUS4VgrLNBE5kYPYre7L1iuNvZA~Ls2g3A7pJHrajP-wVdseuNITWEKfb9GHsGq9Z6RlqyutRBmEZ8yCUM-OrNElnieCQ3W6SMy4uYHUvnKEOwgjgFxtdw9NIuZ1NeGmkpzr8L8qoexAsa2BhvpJAmrgVJrtFJGvXMMKz3DZDEOhmaZQubI3H31OA9rOo-T5uVEsX4Q6yLvPvhR0yC2dB-IRVZ-U~9bMtl869PX2xvbXyMtYTGjvi7gnEr6fu3NEGmQk6MJIFWX2zS~dweCYm3~Hzo-AE-0EhBw__")'
            backgroundSize="cover"
            backgroundPosition="center"
          />

          <Box textAlign={{ base: "center", md: "left" }}>
            <Text
              fontFamily="ZCOOL KuaiLe"
              fontSize={{ base: "18px", md: "24px" }}
              fontWeight={400}
              lineHeight={{ base: "22px", md: "28.56px" }}
              color="wheat"
              pl={{ base: "0", md: "152px" }}
              pt={{ base: "20px", md: "50px" }}
            >
              We've all been in the mud once, and now we've decided to fight it out. 
              Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future! 
              Our mission is to empower everyone to share wealth and succeed.
            </Text>
            <Text
              fontFamily="ZCOOL KuaiLe"
              fontSize={{ base: "18px", md: "24px" }}
              fontWeight={400}
              lineHeight={{ base: "22px", md: "28.56px" }}
              color="wheat"
              pl={{ base: "0", md: "152px" }}
              pt={{ base: "10px", md: "20px" }}
              style={{ opacity: '0.71' }}
            >
              read more...
            </Text>
            <Box textAlign={{ base: "center", md: "left" }} pt={{ base: "20px", md: "50px" }}>
  <Button
    width={{ base: "140px", md: "178.94px" }}
    height={{ base: "40px", md: "54.06px" }}
    borderRadius="21.92px"
    bg="linear-gradient(93.73deg, #D51B46 10.19%, #EE6910 98.19%)"
    color="wheat"
    fontFamily="ZCOOL KuaiLe"
    mx={{ base: "auto", md: "40" }} // Center the button on mobile screens
  >
    Documents
    <FontAwesomeIcon
      icon={faArrowDown}
      style={{
        width: "16px",
        height: "16px",
        color: "wheat",
        marginLeft: "8px"
      }}
    />
  </Button>
</Box>

          </Box>
        </Box>

        {/* Display image on right for desktop */}
        <Box
          display={{ base: "none", md: "block" }}
          position="relative"
          bottom="70px"
          width="100%"
          height="795px"
          bgImage='url("https://s3-alpha-sig.figma.com/img/72d9/2d64/713f95c34c945a62844515044f63fcd4?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PH7-UOlccPF8t3q~uRPdjm-eXO6SvLELF6nO9w4LUU6BfSr6nbxJUS4VgrLNBE5kYPYre7L1iuNvZA~Ls2g3A7pJHrajP-wVdseuNITWEKfb9GHsGq9Z6RlqyutRBmEZ8yCUM-OrNElnieCQ3W6SMy4uYHUvnKEOwgjgFxtdw9NIuZ1NeGmkpzr8L8qoexAsa2BhvpJAmrgVJrtFJGvXMMKz3DZDEOhmaZQubI3H31OA9rOo-T5uVEsX4Q6yLvPvhR0yC2dB-IRVZ-U~9bMtl869PX2xvbXyMtYTGjvi7gnEr6fu3NEGmQk6MJIFWX2zS~dweCYm3~Hzo-AE-0EhBw__")'
          backgroundSize="cover"
          backgroundPosition="center"
        />
      </Grid>
    </Box>
  );
};

export default Div2;
