import React , {useState}from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './Sign_In.css'
import LearningImage from '../../../../assets/learning.png';

const SignIn = () => {
  const [informationSignIn , setinformationSignIn] = useState({
    email : '',
    password : ''
  })
  return (
    <>
       <Box className="signIn">
      {/* الحاوية اليسرى */}
      <Box className='BoxImage'
      >
       <img className='image_in_Mobile' style={{
        objectFit:"cover",
        }} src={LearningImage} alt='Error'/>
      </Box>

      {/* الحاوية اليمنى */}
      <Box className='BoxInput'
      component="form"
      noValidate
      autoComplete="off"
      >
        <h1>
          Sign In
        </h1>
        <h1 className='detailsSignIn'>
          Welcome to my first project
        </h1>
        <TextField onChange={(text)=>{
            setinformationSignIn({
              ...informationSignIn,
              email:text.target.value
            }
            )
        }}
        value={informationSignIn.email}
          sx={{marginTop:'30px'}}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type='email'
          fullWidth
        />

        <TextField 
        sx={{marginTop:'20px'}}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type='password'
          fullWidth
        />

        <Button 
        sx={{marginTop:'25px', height:'50px', textTransform:'none'}}

         variant="contained">Sign In</Button>

        <Button 
        sx={{marginTop:'10px', height:'50px' , textTransform:'none'}}

         variant="text">Create new account</Button>

      </Box>
    </Box>
    </>
   
  );
};

export default SignIn;
