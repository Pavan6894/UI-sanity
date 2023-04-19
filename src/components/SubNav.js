import React from 'react';
import { Box,Typography } from '@mui/material';
import { Link } from "react-router-dom";

const SubNav = () => {  
    return (
         <Box sx={{maxWidth:1000,margin:"auto",display:"flex",paddingTop:2,paddingBottom:1,paddingLeft:{xs:1.2,sm:1.2,md:4}}}>
                 <Link to="/" style={{textDecoration:"none",color:"#080867",paddingRight:5}}>
                            <Typography sx={{cursor:"pointer"}}>Home</Typography>
                </Link>
                <Typography sx={{paddingRight:1}}>|</Typography>
                 <Link to="/Cart" style={{textDecoration:"none",color:"#080867",paddingRight:5}}>
                           <Typography sx={{cursor:"pointer"}}>ShoppingCart</Typography>
                </Link>
        </Box>
      )
}

export default SubNav;