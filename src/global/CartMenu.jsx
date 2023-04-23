import { Box, Button, Divider, IconButton, Typography} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { decreaseCount, increaseCount, removeFromCart, setIsCartOpen } from "../state/index";
import { useNavigate } from "react-router-dom";


const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
   const totalPrice = cart.reduce((total, item) => {
     return total + item.count * item.price;
   }, 0)
 console.log(cart)
  return (
    <Box
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      {/* Modal */}
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          <Box mb="15px" display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h3">SHOPPING BAG ({cart.length})</Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <CloseIcon />
            </IconButton>
          </Box>
          {/* Cart List */}
          <Box>
            {cart.map((item) => (
              <Box key={`${item.name}-${item.id}`}>
                <Box p="15px 0" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Box flex="1 1 40%">
                    <img
                      alt={item.name}
                      width="123px"
                      height="164px"
                      src={item.image}
                    />
                  </Box>
                  <Box flex="1 1 60%">
                    <Box mb="5px" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography fontWeight="bold">
                        {item.name}
                      </Typography>
                      <IconButton onClick={() => dispatch(removeFromCart(item))}>
                        <CloseIcon />
                      </IconButton>
                    </Box>
                    <Typography>{item.shortDescription}</Typography>
                    <Box m="15px 0" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Box display="flex" alignItems="center" border={`1.5px solid ${shades.netural[500]}`}>
                        <IconButton onClick={() => dispatch(decreaseCount(item))}>
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.count}</Typography>
                        <IconButton onClick={() => dispatch(increaseCount(item))}>
                          <AddIcon />
                        </IconButton>
                      </Box>
                      {/* Price */}
                      <Typography fontWeight="bold">
                        ${item.price}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Divider />
              </Box>
            ))}
          </Box>
          {/* Actions */}
          <Box m="20px 0">
            <Box m="20px 0" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">$ {totalPrice}</Typography>
            </Box>
            <Button
              sx={{
                backgroundColor: shades.primary[400],
                color: "white",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "20px 0",
              }}
              onClick={() => {
                navigate("/checkout")
                dispatch(setIsCartOpen({}))
              }}
            >
              CHECKOUT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CartMenu;