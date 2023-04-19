import React from "react";
import { Box } from '@mui/material';
import emptyCart from "../image/emptyCart.png";

const EmptyCart = () => {
    return (
        <Box sx={{maxWidth:1000,margin:"auto"}}>
             <Box sx={{textAlign:"center",marginBottom:{xs:24,sm:55,md:10}}}>
                      <Box component="img" sx={{height:250,marginTop:3}} src={emptyCart} alt="image"></Box>
              </Box>
        </Box>
    )
}

export default EmptyCart;