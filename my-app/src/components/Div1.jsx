import React, { useState } from "react";
import {
  Flex,
  Box,
  ButtonGroup,
  Button,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
const Ham=()=>{
  return(<>
  <div
          style={{
            width: "583px",
            height: "52px",
            top: "46px",
            left: "498px",
            borderRadius: "20px",
            padding: "16px 24px", // Top, Right, Bottom, Left
            gap: "20px",
            background: "#191818",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              fontFamily: "ZCOOL KuaiLe",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "20px",

              color: "#FFFFFF",
            }}
          >
            Home
          </Text>
          <Text
            style={{
              fontFamily: "ZCOOL KuaiLe",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "20px",

              color: "#FFFFFF",
            }}
          >
            IDO
          </Text>
          <Text
            style={{
              fontFamily: "ZCOOL KuaiLe",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "20px",

              color: "#FFFFFF",
            }}
          >
            Tokenomics
          </Text>
          <Text
            style={{
              fontFamily: "ZCOOL KuaiLe",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "20px",

              color: "#FFFFFF",
            }}
          >
            RoadMap
          </Text>
          <Text
            style={{
              fontFamily: "ZCOOL KuaiLe",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "20px",

              color: "#FFFFFF",
            }}
          >
            Coming Soon
          </Text>

          <FontAwesomeIcon
            icon={faArrowDown}
            style={{
              width: "16px",
              height: "16px",
              padding: "5px 1.36px 3.34px 1.34px", // Top, Right, Bottom, Left
              gap: "0px",
              color: "wheat",
            }}
          />
        </div>
  </>)
}
const Div1 = () => {
  const [isOpen, setOpen] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  

  return (
    <div>
      {isMobile && (
        <div className="hamburger-menu">
          <FontAwesomeIcon
            icon={faBars}
            size={20}
            onClick={() => setOpen(!isOpen)}
          />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  overflow: "hidden",
                  background: "#191818",
                  padding: "16px 24px",
                  borderRadius: "20px",
                  gap: "20px",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    fontFamily: "ZCOOL KuaiLe",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                  }}
                >
                  Home
                </Text>
                <Text
                  style={{
                    fontFamily: "ZCOOL KuaiLe",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                  }}
                >
                  IDO
                </Text>
                <Text
                  style={{
                    fontFamily: "ZCOOL KuaiLe",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                  }}
                >
                  Tokenomics
                </Text>
                <Text
                  style={{
                    fontFamily: "ZCOOL KuaiLe",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                  }}
                >
                  RoadMap
                </Text>
                <Text
                  style={{
                    fontFamily: "ZCOOL KuaiLe",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                  }}
                >
                  Coming Soon
                </Text>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
  


      <div
        className="h-588 w-1512"
        style={{
          backgroundImage:
            'url("https://s3-alpha-sig.figma.com/img/894b/df6e/56b90bbef82ad188765f40d12a46caef?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jBniJIIabUM5Sz2MptOUCZcISt5SJUkYa~32yo4k4uKIZOnsv2UPfRCUlYo-w2quEcv9rqDuuafokBaRla7zZMxJf6ILz1UBaSYRjEtjO9Is-QiWLUdkXnOgDQSf2oZEvHTyyPZkokWIVlUlyVkawK~OaqKGqcoGccfLpefDMbC4Gzb9p8Ta~8QmdfAVadD~0KfT8IvJYgefdHWYAyFSSAUkE35Ne4jTu0pXAH61KDcvPipctfKO-Pkq3j3Q9ADYxg-c8H2970mBZ8c7Ap8dDwtCB3Nx7ZseV8CNB-SnNW4TjDWGB9wVYeRtEnABJmkKot4pxdnjs04l5mKHfXR4VA__")',
          height: "588px",
          width: "1512px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Flex alignItems="center" gap="40">
          <Box
            pl="80px"
            pt="27px"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              style={{
                backgroundImage:
                  'url("https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__")',
                height: "117px",
                width: "106px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginRight: "16px", // Adjust the gap between image and text
              }}
            />
            <Text
              pb="50px"
              style={{
                width: "122px",
                height: "32px",
                color: "blue",
                fontFamily: "ZCOOL KuaiLe, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "32px",
                lineHeight: "32px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              Saviour
            </Text>
          </Box>
          <Ham/>

          <div>
            <Button
              style={{
                width: "127px",
                height: "38px",
                padding: "10px 16px",
                borderRadius: "15.44px",
                color: "white",
                background:
                  "linear-gradient(93.73deg, #ED0137 20.19%, #F05733 88.3%)",
                // The gap property doesn't apply directly to the Button component
                // If you need space between buttons, consider adding margin or padding to the parent container.
              }}
            >
              Connect Wallet
            </Button>
          </div>
        </Flex>
        <Box
          width="1262px"
          height="108px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingTop="200px"
          paddingLeft="139px"
        >
          <Text
            color="#FBF6F6"
            fontFamily="Shojumaru, system-ui"
            fontSize="45px"
            fontWeight="400"
            lineHeight="53.55px"
            textAlign="center"
          >
            Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
          </Text>
        </Box>
      </div>
    </div>
  );
};

export default Div1;
