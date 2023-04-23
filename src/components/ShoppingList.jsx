import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Tab, Tabs, useMediaQuery } from "@mui/material";
import Item from "./Item";
import * as data from "../data";


const ShoppingList = () => {
  const [value, setValue] = useState("all");
  const isNoneMobile = useMediaQuery("(min-width:600px)");
  const cart = useSelector((state) => state.cart.cart)
  const handelChange = (event, newValue) => {
    setValue(newValue)
  }
  const topRatedItems = data.products.filter((item) => item.category === "topRated");
  const newArrivals = data.products.filter((item) => item.category === "newArrivals");
  const bestSellers = data.products.filter((item) => item.category === "bestSellers");
  return (
    <Box width="80%" margin="80px auto">
      <Typography variant='h3' textAlign="center">
        Out Featured <b>Products</b>
      </Typography>
      <Tabs
        textColor='primary'
        indicatorColor='primary'
        value={value}
        onChange={handelChange}
        centered
        TabIndicatorProps={{ sx: { display: isNoneMobile ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap"
          }
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="newArrivals" />
        <Tab label="BEST SELLERS" value="bestSellers" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" && data.products.map((item) => (
          <Item item={item} key={`${item.name}-${item.id}`} />
        ))}
        {value === "newArrivals" && newArrivals.map((item) => (
          <Item item={item} key={`${item.name}-${item.id}`} />
        ))}
        {value === "bestSellers" && bestSellers.map((item) => (
          <Item item={item} key={`${item.name}-${item.id}`} />
        ))}
        {value === "topRated" && topRatedItems.map((item) => (
          <Item item={item} key={`${item.name}-${item.id}`} />
        ))}
      </Box>
    </Box>
  );
}

export default ShoppingList;