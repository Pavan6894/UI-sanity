import React from 'react';
import { Box } from '@mui/material';
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
         <Box sx={{borderBottom:"1px solid #080867",paddingTop:1,paddingBottom:1,paddingLeft:{xs:1.2,sm:1.2,md:4}}}>
              <Box sx={{maxWidth:1000,margin:"auto"}}>
                    <Link to="/" style={{paddingRight:30,cursor:"pointer",color:"#080867",fontSize:15,fontWeight:700,textDecoration:"none"}}>Electronics</Link>
                    <Link to="/Sports" style={{paddingRight:30,cursor:"pointer",color:"#080867",fontSize:15,fontWeight:700,textDecoration:"none"}}>Sports</Link >
                    <Link to="/Outdoor" style={{paddingRight:30,cursor:"pointer",color:"#080867",fontSize:15,fontWeight:700,textDecoration:"none"}}>Outdoor</Link>
                    <Link to="/Travel" style={{paddingRight:30,cursor:"pointer",color:"#080867",fontSize:15,fontWeight:700,textDecoration:"none"}}>Travel</Link>
                    <Link to="/Health" style={{cursor:"pointer",color:"#080867",fontSize:15,fontWeight:700,textDecoration:"none"}}>Health</Link > 
              </Box>
         </Box>
    )
}

export default Navigation;