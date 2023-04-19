import React,{ useState }from 'react';
import Logo from '../image/logo.jpg';
import { Link } from "react-router-dom";
import { AppBar,Typography,Button,Toolbar,Box,TextField,InputAdornment,List,ListItem,ListItemText,Drawer,IconButton,ListItemButton,ListItemIcon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



//Mobile view
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Navigation from './Navigation';



const Header = () => {
  const[drawerOpen,setDrawerOpen] = useState(false);
  
    
    return(
      <Box>
      <Box sx={{display:{xs:"none",sm:"block",md:"block"}}}>
      <Box sx={{borderBottom:"1px solid #080867"}}>
            <AppBar position="static" sx={{backgroundColor:"white",boxShadow:"none",maxWidth:1000,margin:"auto"}}>
                 <Toolbar disableGutters={true}>
                       <Box component="img" sx={{height:60,width:190,cursor:"pointer"}} alt="logo" src={Logo} />
                        <Typography variant="h6" sx={{color:"#080867",fontSize:{sm:20,md:25}}}>| Cheers</Typography>
                        <TextField sx={{marginLeft:{xs:"auto",sm:"auto",md:"auto"},width:{xs:120,sm:240,md:220},[`& fieldset`]:{borderRadius:20,borderColor:"#080867"}}} size="small" variant="outlined" 
                               InputProps={{
                                      endAdornment:(
                                             <InputAdornment position="end">
                                             <SearchIcon sx={{cursor:"pointer"}}/>
                                             </InputAdornment>
                                       )
                                }}
                        /> 
                       <AccountCircleIcon fontSize="large" sx={{color:"#080867",marginLeft:{xs:"auto",sm:"auto",md:3}}}/>
                      
                       <Link to="/Cart"><ShoppingCartOutlinedIcon fontSize="large" sx={{color:"#080867",position:"relative",marginLeft:{xs:"auto",sm:"auto",md:3,cursor:"pointer"}}} ></ShoppingCartOutlinedIcon></Link>
               </Toolbar>
               </AppBar>
               </Box>
             <Navigation/>
             </Box>


{/* Mobile view */}
             <Box sx={{display:{xs:"block",sm:"none",md:"none"}}}>
        <Box sx={{borderBottom:"1px solid #080867"}}>
              <AppBar position="static" sx={{backgroundColor:"white",boxShadow:"none",maxWidth:1000,margin:"auto"}}>
                <Toolbar disableGutters={true}>
                     <Box component="img" sx={{height:60,width:160,cursor:"pointer"}} alt="logo" src={Logo} />
                      <Typography variant="h6" sx={{color:"#080867",fontSize:12,paddingRight:0.4}}>|</Typography>
                      <Typography variant="h6" sx={{color:"#080867",fontSize:17}}>Cheers</Typography>
                
                       <IconButton sx={{color:"#080867",marginLeft:"auto"}} onClick={() => setDrawerOpen(!drawerOpen)}>
                            <MenuIcon />
                        </IconButton>
              
                        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} anchor="right" sx={{display:{xs:"block",sm:"none",md:"none"}}}>
                        <Box sx={{width:200,height:"100%"}}>

                         <List >
                              <ListItemButton sx={{"&:hover":{background:"none"}}}>
                                    <CloseIcon sx={{paddingRight:2}} onClick={() => setDrawerOpen(false)}/>
                                    <Typography sx={{textTransform:"uppercase"}}>Menu</Typography>
                              </ListItemButton>
                              <ListItemButton sx={{"&:hover":{background:"#42C2FF"}}}> 
                                    <Link to="/" style={{cursor:"pointer",color:"#080868",fontSize:15,fontWeight:700,textDecoration:"none",borderRadius:100}}><Typography sx={{padding:1}}>Electronics</Typography></Link>
                              </ListItemButton>
                              <ListItemButton sx={{"&:hover":{background:"#42C2FF"}}}>
                                    <Link to="/Sports" style={{cursor:"pointer",color:"#080867",fontSize:15,fontWeight:700,textDecoration:"none",width:"100%"}}><Typography sx={{padding:1}}>Sports</Typography></Link >
                              </ListItemButton >
                              <ListItemButton sx={{"&:hover":{background:"#42C2FF"}}}>
                                     <Link to="/Outdoor" style={{cursor:"pointer",color:"#080867",fontSize:15,fontWeight:700,textDecoration:"none",width:"100%"}}><Typography sx={{padding:1}}>Outdoor</Typography></Link>
                              </ListItemButton >
                              <ListItemButton sx={{"&:hover":{background:"#42C2FF"}}}>
                                     <Link to="/Travel" style={{cursor:"pointer",color:"#080867",fontSize:15,fontWeight:700,textDecoration:"none",width:"100%"}}><Typography sx={{padding:1}}>Travel</Typography></Link>
                              </ListItemButton>
                             <ListItemButton sx={{"&:hover":{background:"#42C2FF"}}}>
                                     <Link to="/Health" style={{cursor:"pointer",color:"#080867",fontSize:15,fontWeight:700,textDecoration:"none",width:"100%"}}><Typography sx={{padding:1}}>Health</Typography></Link >
                             </ListItemButton>
                            <ListItemButton sx={{"&:hover":{background:"white"}}}>
                                    <TextField sx={{[`& fieldset`]:{borderColor:"#080867"}}} size="small" variant="outlined" 
                                         InputProps={{
                                              endAdornment:(
                                                   <InputAdornment position="end">
                                                   <SearchIcon sx={{cursor:"pointer"}}/>
                                                   </InputAdornment>
                                              )
                                         }}
                                     /> 
                            </ListItemButton>
                            <ListItemButton sx={{"&:hover":{background:"none"}}}>
                                     <AccountCircleIcon fontSize="large" sx={{color:"#080867",paddingRight:2}}/>
                                     <Link to="/Cart"><ShoppingCartOutlinedIcon fontSize="large" sx={{color:"#080867",position:"relative",cursor:"pointer"}} ></ShoppingCartOutlinedIcon></Link>
                           </ListItemButton>
                </List>
                      </Box>
                  </Drawer>
              </Toolbar>
            </AppBar>
           </Box>     
        </Box>  
  </Box>  
     
    )
}

export default Header;

