import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'
import { Box, Container, Divider, Grid } from '@mui/material';

const page = ({order}) => {
  return (
    <>
    <Navbar/>
    <Container className='min-h-80'>
      <Box>
        <p className='font-bold font-Poppins mt-5'>Your order from 14/03/2024</p>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <p className='font-bold text-sm font-Poppins mt-5'>Order number</p>
          <Box sx={{mt:1}}>
            <p className='opacity-70 text-sm font-Poppins'>15435832471414</p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className='font-bold text-sm font-Poppins mt-5'>Payment Option</p>
          <Box sx={{mt:1}}>
            <p className='opacity-70 text-sm font-Poppins'>On delivery</p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className='font-bold text-sm font-Poppins mt-5'>Delivery address</p>
          <Box sx={{mt:1}}>
            <p className='opacity-70 text-sm font-Poppins'>Kenitra</p>
            <p className='opacity-70 text-sm font-Poppins'>Hay Elmanzah, 1332</p>
            <p className='opacity-70 text-sm font-Poppins'>53443</p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className='font-bold text-sm font-Poppins mt-5'>Customer Info</p>
          <Box sx={{mt:1}}>
            <p className='opacity-70 text-sm font-Poppins'>John Alberto</p>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{my:2, display:'flex', alignItems:'center', justifyContent:'space-between',gap:5}}>
        <Box sx={{display:'flex', alignItems:'center', gap:5}}>
          <Box sx={{maxWidth:50, maxHeight:50}}>
            <img src="assets/kiko.jpg" alt="sss" />
          </Box>
          <p className='opacity-70 text-sm font-Poppins'>Polairoid Originals One stepe</p>
        </Box>
        <p className='font-Poppins text-sm font-bold'>340DH</p>
      </Box>
      <Divider/>
      <Box sx={{display:'flex', justifyContent:'right', mt:1}}>
        <Box sx={{width:250,display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <p className='opacity-70 text-sm font-medium font-Poppins'>Subtotal</p>
          <p className='font-Poppins text-sm font-bold'>340DH</p>
        </Box>
      </Box>
      <Box sx={{display:'flex', justifyContent:'right', mt:1}}>
        <Box sx={{width:250,display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <p className='opacity-70 text-sm font-medium font-Poppins'>Shipping</p>
          <p className='font-Poppins text-sm font-bold'>Free</p>
        </Box>
      </Box>
      <Box sx={{display:'flex', justifyContent:'right', mt:1}}>
        <Box sx={{width:250,display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <p className='opacity-70 text-sm font-medium font-Poppins'>Total</p>
          <p className='font-Poppins text-sm font-bold'>340DH</p>
        </Box>
      </Box>
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',my:5}}>
      <p className='opacity-70 text-sm font-Poppins max-w-md'>
          Feel free to contact us if you have any questions or comments! We are happy to help. Contact us via <a className='text-blue-600' href="">lilianashop@gmail.com</a>
        </p>
      </Box>
    </Container>
    <Footer/>
  </>
  )
}

export default page;