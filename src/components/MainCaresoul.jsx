import React from 'react';
import { Box, IconButton, useMediaQuery, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../theme";
import image1 from "../assets/bg/jakob-owens-JzJSybPFb3s-unsplash.jpg";
import image2 from "../assets/bg/mnz-v13tnV6D9lw-unsplash.jpg";
import image3 from "../assets/bg/solesavy-LgzM6R0ojoE-unsplash.jpg";

const MainCaresoul = () => {
    const isNoneMobile = useMediaQuery("(min-width:600px)");
 
    return (
       <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
             <IconButton
                onClick={onClickHandler}
                sx={{
                   position: "absolute",
                   top: "50%",
                   left: "0",
                   color: "white",
                   padding: "5px",
                   zIndex: "10"
                }}
             >
                <NavigateBeforeIcon sx={{ fontSize: 40 }} />
             </IconButton>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
             <IconButton
                onClick={onClickHandler}
                sx={{
                   position: "absolute",
                   top: "50%",
                   right: "0",
                   color: "white",
                   padding: "5px",
                   zIndex: "10"
                }}
             >
                <NavigateNextIcon sx={{ fontSize: 40 }} />
             </IconButton>
          )}
       >
          <Box
             sx={{
                width: "100%",
             }}
          >
             <img
                src={image1}
                alt=""
                style={{
                   width: "100%",
                   height: "700px",
                   objectFit: "cover",
                   backgroundAttachment: "fixed"
                }}
                sx={{
                   width: "100%"
                }}
             />
             <Box
                color="white"
                padding="20px"
                borderRadius="1px"
                textAlign="center"
                backgroundColor="rgba(0, 0, 0, 0.4)"
                position="absolute"
                top="46%"
                left={isNoneMobile ? "10%" : "0"}
                right={isNoneMobile ? undefined : "0"}
                margin={isNoneMobile ? undefined : "0 auto"}
                maxWidth={isNoneMobile ? undefined : "240px"}
             >
                <Typography color={shades.secondary[200]}>-- NEW ITEMS</Typography>
                <Typography variant="h1">Summer Sale</Typography>
                <Typography fontWeight="bold" color={shades.secondary[300]} sx={{ textDecoration: "underline" }}>Discover More</Typography>
             </Box>
          </Box>
          <Box
             sx={{
                width: "100%"
             }}
          >
             <img
                src={image2}
                alt=""
                style={{
                   width: "100%",
                   height: "700px",
                   objectFit: "cover",
                   backgroundAttachment: "fixed"
                }}
             />
             <Box
                color="white"
                padding="20px"
                borderRadius="1px"
                textAlign="center"
                backgroundColor="rgba(0, 0, 0, 0.4)"
                position="absolute"
                top="46%"
                left={isNoneMobile ? "10%" : "0"}
                right={isNoneMobile ? undefined : "0"}
                margin={isNoneMobile ? undefined : "0 auto"}
                maxWidth={isNoneMobile ? undefined : "240px"}
             >
                <Typography color={shades.secondary[200]}>-- NEW ITEMS</Typography>
                <Typography variant="h1">Summer Sale</Typography>
                <Typography fontWeight="bold" color={shades.secondary[300]} sx={{ textDecoration: "underline" }}>Discover More</Typography>
             </Box>
          </Box>
          <Box
             sx={{
                width: "100%"
             }}
          >
             <img
                src={image3}
                alt=""
                style={{
                   width: "100%",
                   height: "700px",
                   objectFit: "cover",
                   backgroundAttachment: "fixed"
                }}
             />
             <Box
                color="white"
                padding="20px"
                borderRadius="1px"
                textAlign="center"
                backgroundColor="rgba(0, 0, 0, 0.4)"
                position="absolute"
                top="46%"
                left={isNoneMobile ? "10%" : "0"}
                right={isNoneMobile ? undefined : "0"}
                margin={isNoneMobile ? undefined : "0 auto"}
                maxWidth={isNoneMobile ? undefined : "240px"}
             >
                <Typography color={shades.secondary[200]}>-- NEW ITEMS</Typography>
                <Typography variant="h1">Summer Sale</Typography>
                <Typography fontWeight="bold" color={shades.secondary[300]} sx={{ textDecoration: "underline" }}>Discover More</Typography>
             </Box>
          </Box>
       </Carousel>
    );
 }
 
 export default MainCaresoul;