import React,{ useState } from 'react';
import { Box,Grid,Typography,FormLabel,FormControl,RadioGroup,FormControlLabel,Radio,TextField,InputAdornment,FormGroup,Checkbox,Stack,Button,FormHelperText } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddressDetails = () => {
      const navigate = useNavigate();
      const [details,setDetails] = useState({
            addrType:"",
            addr1:"",
            addr2:"",
            city:"",
            state:"",
            pinCode:"",
            phone:""
       });

const [detailsErrors,setDetailsErrors] = useState("");

const handleChange = (e) => {
  //  console.log(e.target.value,e.target.name);
  const {name,value} = e.target;
       setDetails((prevValues) => {
          return {
             ...prevValues,
             [name]: value,
          }
       })
  }


function validate(details){
  let detailsErrors = {};

    if(!details.addrType ){
          detailsErrors.addrType = "Please select Address type";
    }
   
    if(!details.addr1){
     detailsErrors.addr1 = "Please enter address";
         document.getElementById("addr1").style.border = "1px solid red";
    }
    else document.getElementById("addr1").style.border = "";

    if(!details.city){
         detailsErrors.city = "City is required";
         document.getElementById("city").style.border = "1px solid red";
    }
    else if(!/^[A-Za-z]+$/.test(details.city)){
         detailsErrors.city = "Invalid City";
         document.getElementById("city").style.border = "1px solid red";
    }
    else document.getElementById("city").style.border = "";
    
    if(!details.pinCode){
         detailsErrors.pinCode = "Enter a valid 6 digit code";
         document.getElementById("pinCode").style.border = "1px solid red";
     }
    else if(!/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/.test(details.pinCode)){
         detailsErrors.pinCode = "Invalid Pin Code";
         document.getElementById("pinCode").style.border = "1px solid red";
     }
    else document.getElementById("pinCode").style.border = "";

    if(!details.phone){
         detailsErrors.phone = "Mobile num is required";
         document.getElementById("phone").style.border = "1px solid red";
     }
     else if(!/^[6-9]\d{9}$/.test(details.phone)) {
          detailsErrors.phone = "Invalid mobile num";
          document.getElementById("phone").style.border = "1px solid red";
      }
     else document.getElementById("phone").style.border = "";
  
     //to update errors state
     if(!detailsErrors.addrType && !detailsErrors.addr1 && !detailsErrors.city && !detailsErrors.pinCode && !detailsErrors.phone) {
          setDetailsErrors("");
     }
     else if(detailsErrors) {
          setDetailsErrors(detailsErrors);
          return false;
     }
     else {
          setDetailsErrors("");
     }
     return true;
}


  const handleSubmit =  (event) => {
       event.preventDefault();
       console.log(details);
       const valid = validate(details);
       console.log(valid);

       if(valid == true) {
           navigate('/Summary')
           console.log("Address details are saved successfully");
           const addressDetails = {
               addrType: details.addrType,
               addr1: details.addr1,
               addr2: details.addr2,
               city: details.city,
               state: details.state,
               pinCode: details.pinCode,
               phone: details.phone
          };
          axios.post('http://localhost:4000/addressDetails', addressDetails, {
               headers: {
                    'Content-Type': 'application/json'
               }})
               .then(res => {
                    console.log(res);
                    console.log(res.data);
               });}
               else {
                    console.log("Sorry, Your address details are not saved ");
               }}

     function resetData(){
         setDetails({
              addrType:"",
              addr1:"",
              addr2:"",
              city:"",
              state:"",  
              pinCode:"",
              phone:""
     });
     setDetailsErrors({});
     document.getElementById("addr1").style.border = "";
     document.getElementById("city").style.border = "";
     document.getElementById("pinCode").style.border = "";
     document.getElementById("phone").style.border = "";

     console.log("Entered details have been resetted");
    }


 return (
  <Box sx={{maxWidth:1000,margin:"auto",paddingLeft:{xs:2,md:6}}}>
        <Typography sx={{fontSize:25}}>Add a new address</Typography>
        <Box sx={{display:"flex",borderBottom:"1px solid lightgrey",paddingTop:2,paddingBottom:1}}>
               <Typography sx={{marginRight:4,color:"lightgrey"}}>Personal Details</Typography>
               <Typography>Address Details</Typography>
        </Box>
        <Box sx={{background:"#DAEAF1", marginTop:2,marginBottom:2,paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1}}>
                <Typography sx={{fontSize:11.7}}>Note: All merchandise will require a signature on delivery. It will not be possible to deliver your order to a PO Box Address.
                </Typography>
         </Box>

         <Box>
            <Grid container spacing={2}>
               <Grid item sm={12} md={6} >
                  <FormLabel sx={{color:"black"}}>Country</FormLabel>
                      <Box sx={{display:"flex"}}>
                       <Typography sx={{color:"lightgrey",paddingRight:1,marginBottom:3}}>India</Typography>
                      <ErrorOutlineIcon  sx={{color:"lightgrey",height:18,paddingTop:0.4}}/>
                  </Box>

                   {/*address type*/}
                  <FormControl>
                       <FormLabel sx={{color:"black",textIndent:-7,"&.Mui-focused":{color:"black"}}}>* Address Type</FormLabel>
                       <RadioGroup row onChange={handleChange} value={details.addrType} name="addrType">
                            <FormControlLabel  label="Residential" value="Residential" control={<Radio/>}/>
                           <FormControlLabel label="Business" value="Business" control={<Radio/>}/>
                       </RadioGroup>
                  </FormControl>
                  <FormHelperText sx={{color:"red"}}>{detailsErrors.addrType}</FormHelperText>

                    {/*address line1*/}
                  <FormControl>
                       <FormLabel sx={{color:"black",textIndent:-5,marginTop:1}}>* Address Line 1</FormLabel>
                       <TextField sx={{"&.MuiOutlinedInput-root":{"&.Mui-focused fieldset":{"borderColor":"yellow"}},width:350,marginBottom:1}} id="addr1" name="addr1" variant="outlined" size="small" onChange={handleChange} value={details.addr1} helperText="Flat/house number,floor,building,colony/society"></TextField>
                       <FormHelperText sx={{color:"red"}} >{detailsErrors.addr1}</FormHelperText>
                       {/*address line2*/}
                       <FormLabel sx={{color:"black"}}>Address Line 2</FormLabel>
                       <TextField variant="outlined" size="small" helperText="Street,locality/area,landmark" name="addr2" value={details.addr2} onChange={handleChange}></TextField>
                  </FormControl>
              </Grid>

              <Grid item sm={12} md={6}>
                  <FormControl>
                      {/*city*/}
                       <FormLabel sx={{color:"black",textIndent:-6}}>* City</FormLabel>
                       <TextField name="city" id="city" variant="outlined" size="small" sx={{width:350,marginBottom:1}} value={details.city} onChange={handleChange} helperText={detailsErrors.city}  FormHelperTextProps={{style:{color:"red"}}}></TextField>

                       {/*state*/}
                       <FormLabel sx={{color:"black"}}>State</FormLabel>
                       <TextField variant="outlined" size="small" placeholder="Optional" sx={{marginBottom:1}} name="state" value={details.state} onChange={handleChange}></TextField>

                       {/*pin code*/}
                        <FormLabel sx={{color:"black",textIndent:-5}}>* Pin Code</FormLabel>
                        <TextField name="pinCode" id="pinCode" size="small" sx={{marginBottom:1}} onChange={handleChange} value={details.pinCode} helperText="Enter a valid 6 digit code"></TextField>

                        {/*mobile num*/}
                        <FormLabel sx={{color:"black",textIndent:-5}}>* Cell Phone</FormLabel>
                        <TextField id="phone" name="phone" size="small" InputProps={{
                         startAdornment:
                         <InputAdornment position="start">+91</InputAdornment>}} onChange={handleChange} value={details.phone} helperText={detailsErrors.phone} FormHelperTextProps={{style:{color:"red"}}} />
                         <FormHelperText >This will be used to assist delivery</FormHelperText>
                  </FormControl>
              </Grid>
            </Grid>

            <Box sx={{borderBottom:"1px solid lightgrey"}}>
                <FormControl>
                    <FormGroup>
                         <FormControlLabel control={<Checkbox defaultChecked={true}/>}  label="Save my Shipping Address"></FormControlLabel>
                    </FormGroup>
                  </FormControl>
            </Box>

            <Box sx={{paddingTop:2}}>
                  <Stack direction="row" justifyContent="end">
                      <Button variant="text" sx={{marginRight:3,color:"#080867",textTransform:"lowercase"}}onClick={resetData}>Clear</Button>
                      <Button variant="contained" sx={{background:"#080867",["&:hover"]:{background:"#080867"},textTransform:"lowercase"}} onClick={handleSubmit}>Continue</Button>
                  </Stack>
             </Box>
        </Box>
    </Box>
    )
 }


export default AddressDetails;
    
 
 
   