import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { shades } from "../theme";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import { addToCart } from "../state/index";

const Item = ({width , item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHoverd, setIsHoverd] = useState(false);
  return (
    <Box>
          <Box width={width} sx={{":hover": {transform:"scale(1.1)" , transition:"0.5s ease-in-out"}}}>
            <Box position="relative" onMouseOver={() => setIsHoverd(true)} onMouseOut={() => setIsHoverd(false)}>
              <img
                alt={item.name}
                width="300px"
                height="400px"
                src={item.image}
                style={{ cursor: "pointer" }}
              />
              <Box
                display={isHoverd ? "block" : "none"}
                position="absolute"
                bottom="10%"
                left="0"
                width="100%"
                padding="0 5%"
              >
                <Box display="flex" justifyContent="space-between">
                  {/* Amount */}
                  <Box display="flex" alignItems="center" borderRadius="3px" color="#fff" sx={{backgroundColor:"rgba(0, 0, 0, 0.4)"}}>
                    <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                      <RemoveIcon sx={{color:"#fff"}}/>
                    </IconButton>
                    <Typography>{count}</Typography>
                    <IconButton onClick={() => setCount(count + 1)}>
                      <AddIcon sx={{color:"#fff"}}/>
                    </IconButton>
                  </Box>
                  {/* Button */}
                  <Button onClick={() => {
                    dispatch(addToCart({...item, count}))
                  }}
                    sx={{backgroundColor:"rgba(0, 0, 0, 0.4)" , color: "white" }} >
                    Add To Cart
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box mt="3px" display="flex" justifyContent="space-around" pb="10px">
              <Box display="flex" justifyContent="space-between">
                <Typography fontWeight="bold">{item.name}</Typography>
              </Box>
              <Typography fontWeight="bold" textAlign="start">${item.price}</Typography>
            </Box>
          </Box>
    </Box>
  )
}

export default Item;