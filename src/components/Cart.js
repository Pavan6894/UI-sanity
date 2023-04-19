import React, { useState} from 'react';
import Data from './Data.json';
import { Box, Typography,Button,Grid,Stack } from '@mui/material';
import { useNavigate } from "react-router-dom";
import EmptyCart from './EmptyCart';


const Cart = () => {
    const [items,setItems] = useState(Data.products);
    const len = items.length;

    const navigate = useNavigate();
    function PersonalDetailsPage() {
             navigate('/PersonalDetails');
    } 

    const removeSingleProduct = (name) => {
        const newList = items.filter((product) => product.name !== name);
        setItems(newList);
     }

     var totalPrice = 0;
        items.map(cartFinalPrice => {
            console.log(cartFinalPrice);
            totalPrice = totalPrice + cartFinalPrice.quantity*cartFinalPrice.price;
         }) 


const handleIncrement = (prod_id) =>{
   setItems(items =>
        items.map(val => (
            val.id === prod_id ? {...val,quantity:val.quantity + (val.quantity < 5 ?1:0) } : val
        ))
     )
      
}

const handleDecrement = (prod_id) =>{
    setItems(items =>
        items.map(val => (
            val.id === prod_id ? {...val,quantity:val.quantity - (val.quantity > 1 ?1:0)} : val
            ))
    ) 
}


return ( 
   <Box sx={{maxWidth:1000,margin:"auto",paddingLeft:{xs:2,sm:2,md:6},paddingRight:{xs:1,sm:2}}}>
    {
      len > 0 ? (
         <Box sx={{marginBottom:20}}>
            <Typography sx={{fontSize:35,paddingBottom:1,borderBottom:"1px solid lightgray"}}>My Shopping Cart</Typography> 
                {
                    items.map(singleItem => {
                                return(  
                                    <Grid container spacing={2} sx={{borderBottom:"1px solid lightgray",paddingTop:2,paddingBottom:2}}>
                                    <Grid item md={8} sm={8} xs={8}>
                                        <Box sx={{display:"flex"}} >
                                       <Box component="img" src={singleItem.image} alt="image" sx={{height:120,minWidth:100,maxWidth:100,border:"1px solid black",padding:1}}></Box>
                                           
                                            <Box sx={{paddingLeft:4,paddingTop:1}}>
                                             <Typography sx={{marginBottom:1}}>{singleItem.name}</Typography>
                                                <Box sx={{display:"flex"}}>
                                                     <Box sx={{display:"flex",marginRight:4}}>
                                                           <Box onClick={()=>handleDecrement(singleItem.id)} sx={{height:"auto",width:10,border:"1px solid grey",padding:1,borderRight:"none",background:"lightgrey",cursor:"pointer"}}>-</Box>
                                                           <Box sx={{height:"auto",width:15,border:"1px solid grey",padding:1}}>{singleItem.quantity}</Box>
                                                           <Box onClick={()=>handleIncrement(singleItem.id)} sx={{height:"auto",width:10,border:"1px solid grey",padding:1,borderLeft:"none",background:"lightgrey",cursor:"pointer"}} >+</Box>
                                                    </Box>
                                                     <Button variant="text" sx={{padding:0,color:"#080867"}} onClick={()=>removeSingleProduct(singleItem.name)}>Remove</Button>
                                                </Box> 
                                             </Box> 
                                        </Box> 
                                        </Grid>
                                    <Grid item md={4} sm={4} xs={4}>
                                        <Typography sx={{float:"right",fontWeight:700,marginTop:6}}>Rs.{singleItem.price*singleItem.quantity}</Typography>
                                    </Grid>          
                                </Grid> 
             
                         )
                             })
                            }
                <Box sx={{float:"right"}}>
                    <Typography sx={{float:"right",fontWeight:700,marginTop:2,marginBottom:2}}>Rs.{totalPrice}</Typography>
                    <Typography sx={{clear:"both",color:"gray",marginBottom:2}}>Item price includes shipping and handling</Typography>
                    <Stack direction="row" sx={{paddingRight:0}} >
                         <Button variant="contained" color="warning" sx={{fontSize:10,marginRight:3}}>Continue Shopping</Button>
                        <Button variant="contained" sx={{fontSize:10,background:"#080867","&:hover":{background:"#080867"}}} onClick={PersonalDetailsPage}>Secure Checkout</Button>
                    </Stack>
                  </Box>
         </Box>
    ): (<EmptyCart/>)
}
 </Box>
    )
}

export default Cart;