import React,{ useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography,FormControl } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PersonalDetails = () => {
  const navigate = useNavigate();
       const [values,setValues] = useState({
           firstName:"",
           lastName:"",
           email:"",
           confirmEmail:"",
       });
      const [errors,setErrors] = useState({});

       const handleChange = (e) => {
       //  console.log(e.target.value,e.target.name);
            const {name,value} = e.target;
       
            setValues((prevValues) => {
                 return {
                     ...prevValues,
                     [name]: value,
                  }
              })
         }
     
     // to validate given datas
  function validate(values){
            let errors = {};
     
       if(!values.firstName){
            errors.firstName = "firstName is required";
            document.getElementById("firstName").style.border = "1px solid red";
       } 
       else if(!/^[A-Z]*[a-zA-Z ]{3,30}$/.test(values.firstName)){
            errors.firstName = "Invalid First name";
            document.getElementById("firstName").style.border = "1px solid red";
       }
       else document.getElementById("firstName").style.border = "";
     
       if(!values.lastName){
            errors.lastName = "lastName is required";
           document.getElementById("lastName").style.border = "1px solid red";
        }
        else if(!/[a-zA-Z]{1,10}/.test(values.lastName)){
            errors.lastName = "Invalid lastName";
            document.getElementById("lastName").style.border = "1px solid red";
        }
       else document.getElementById("lastName").style.border = "";
      
       if(!values.email){
            errors.email = "email is required";
            document.getElementById("email").style.border = "1px solid red";
       }
       else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
            errors.email = "Invalid Email";
            document.getElementById("email").style.border = "1px solid red";
       }
       else document.getElementById("email").style.border = "";
        
       if(!values.confirmEmail){
             errors.confirmEmail= "confirmEmail is required";
             document.getElementById("confirmEmail").style.border = "1px solid red";
        }
        else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.confirmEmail)){
             errors.confirmEmail = "Invalid Email ";
             document.getElementById("confirmEmail").style.border = "1px solid red";
        }
        else if(values.confirmEmail != values.email ){
              errors.confirmEmail = "Emails doesn't match ";
              document.getElementById("confirmEmail").style.border = "1px solid red";
         }
        else document.getElementById("confirmEmail").style.border = "";
         
         if(!errors.firstName && !errors.lastName &&  !errors.email &&!errors.confirmEmail) {
              setErrors("");
          }
         else if(errors) {
               setErrors(errors);
               return false;
          }
        else {
            setErrors("");
          }
              return true;
     }


 const Submit =  (event) => {
            event.preventDefault();
             console.log(values);
            const valid = validate(values); 
            console.log(valid);

         if(valid == true) {
             navigate('/AddressDetails');
            console.log("Personal details are saved successfully");
            const personalDetails = {
               firstName: values.firstName,
               lastName: values.lastName,
               email: values.email,
               confirmEmail: values.confirmEmail
          };
          axios.post('http://localhost:4000/personalDetails',
          personalDetails, {
               headers: {
                    'Content-Type': 'application/json'
               }}).then(res => {
                    console.log(res);
                    console.log(res.data);
               });}
               else {
                    console.log("Sorry, Your Personal details are not saved ");
               }}
  
     
  function reset(){
         setValues({
              firstName : "",
              lastName: "",
              email : "",
              confirmEmail : "",
         });
         setErrors({});
         document.getElementById("firstName").style.border = "";
         document.getElementById("lastName").style.border = "";
         document.getElementById("email").style.border = "";
         document.getElementById("confirmEmail").style.border = "";
     console.log("Entered details have been resetted");
  }


    return (
        <Box sx={{maxWidth:1000,margin:"auto",paddingLeft:{xs:1,md:4}}}>
                 <Typography sx={{fontSize:25}}>Add a new address</Typography>
                 <Box sx={{display:"flex",borderBottom:"1px solid lightgrey",paddingTop:2,paddingBottom:1}}>
                        <Typography sx={{marginRight:4}}>Personal Details</Typography>
                        <Typography sx={{color:"lightgrey"}}>Address Details</Typography>
                </Box>
                <Box sx={{background:"#DAEAF1", marginTop:2,marginBottom:2,paddingLeft:2,paddingRight:2,width:"auto",paddingTop:1,paddingBottom:1}}>
                         <Typography sx={{fontSize:10.7}}>Note: All fields marked with asterisk '*' are mandatory. You are being asked to provide this information so that we can process your order and such information will only be used for this purpose.</Typography>
                </Box>
               <Box>
                     <FormControl>
                           <FormLabel sx={{color:"black",textIndent:-6}} htmlFor="firstName">* First name</FormLabel>
                            <TextField id="firstName" name="firstName" value={values.firstName} onChange={handleChange} helperText={errors.firstName} variant="outlined" sx={{ width: 350,marginBottom:1 }} size="small" FormHelperTextProps={{style:{color:"red"}}} />

                            <FormLabel sx={{color:"black",textIndent:-6}} htmlFor="lastName">* Last name</FormLabel>
                            <TextField id="lastName" name="lastName" value={values.lastName} onChange={handleChange} helperText={errors.lastName} variant="outlined"  sx={{ width: 350,marginBottom:1 }}  size="small" FormHelperTextProps={{style:{color:"red"}}} />

                            <FormLabel sx={{color:"black",textIndent:-6}} htmlFor="email">* Email Address</FormLabel>
                             <TextField id="email" name="email" value={values.email} onChange={handleChange} helperText={errors.email} variant="outlined"  sx={{ width: 350,marginBottom:1}}  size="small" FormHelperTextProps={{style:{color:"red"}}} />

                             <FormLabel sx={{color:"black",textIndent:-6}} htmlFor="confirmEmail">* Confirm Email Address</FormLabel>
                             <TextField id="confirmEmail" name="confirmEmail" value={values.confirmEmail} onChange={handleChange} helperText={errors.confirmEmail} variant="outlined"  sx={{ width: 350,marginBottom:1}}  size="small" FormHelperTextProps={{style:{color:"red"}}}  />
                    </FormControl>
                    <Stack sx={{borderTop:"1px solid lightgrey",marginTop:2,paddingTop:2}} spacing={2} direction="row" justifyContent="end">
                             <Button variant="text" sx={{color:"#080867",textTransform:"lowercase"}} onClick={reset}>Clear</Button>
                              <Button variant="contained" sx={{background:"#080867",["&:hover"]:{background:"#080867"},textTransform:"lowercase"}} onClick={Submit}>Continue</Button>
                    </Stack>
            </Box>   
        </Box>
    )
}

export default PersonalDetails;