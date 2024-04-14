import { Box, Button, Card, CardContent, CardMedia, Grid, Typography, ThemeProvider} from '@mui/material';
import React from 'react'
import { FaShoppingBasket } from 'react-icons/fa';
import {theme} from '../theme'
const IntroCard = ({title, image, price}) => {
  return (
    <Grid item >
      <Card sx={{width:240, ":hover":{boxShadow:5}, cursor:'pointer'}}>
        <Box display={'flex'} justifyContent={'center'}>
          <CardMedia component={'img'}
            sx={{height:200, width:200, borderRadius:5}}
            image={image}
            alt={title}
          />
        </Box>
        <Box display={'flex'} height={70} justifyContent={'center'}>
          <CardContent>              
            <Typography textAlign={'center'} variant="h6">
              {title}
            </Typography>
          </CardContent>
        </Box>
        <Box display={'flex'} margin={2} justifyContent={'space-between'} alignItems={'center'}>
          <Typography fontFamily={'Poppins'} variant="body2">{price}.00DH</Typography>
          <ThemeProvider theme={theme}>
          <Button variant="contained" color='liliana_secondary'><FaShoppingBasket/></Button>
          </ThemeProvider>
        </Box>
      </Card>
    </Grid>
  )
}

export default IntroCard;