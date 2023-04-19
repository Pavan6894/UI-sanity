import React from 'react';
import { Box,Typography,Button } from '@mui/material';
import tick from '../image/tick.jpg';


const Summary = () => {

    return (
      <Box sx={{maxWidth:1000,margin:"auto",textAlign:'center'}}>
          <Box sx={{paddingLeft:{xs:1,md:5},paddingRight:{md:3},paddingTop:2,marginBottom:{xs:22,sm:20,md:12},marginTop:4}}>
                   <Box component="img" src={tick} alt="tick" sx={{height:120,width:100}}></Box>
                  <Typography sx={{fontSize:25}}>Order Placed</Typography>
                  <Typography sx={{fontSize:25,marginBottom:6}}>Thank you for your purchase</Typography>
                  {/* <Button variant="contained" sx={{background:"white","&:hover":{background:"white",boxShadow:'none'},color:"#080867",boxShadow:'none',border:"1px solid #080867"}} onClick={homePage}>Continue Shopping</Button> */}
          </Box>
     </Box>
    )
}

export default Summary;