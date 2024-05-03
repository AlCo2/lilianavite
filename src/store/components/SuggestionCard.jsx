import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react'
import { FaShoppingBasket } from 'react-icons/fa';

const SuggestionCard = ({title, image, price}) => {
  return (
    <Grid item >
      <Card sx={{width:220, ":hover":{boxShadow:5}, cursor:'pointer'}}>
        <Box display={'flex'} justifyContent={'center'}>
          <CardMedia component={'img'}
            sx={{height:150, width:150, borderRadius:5}}
            image={image}
            alt={title}
          />
        </Box>
        <Box display={'flex'} height={70} justifyContent={'center'}>
          <CardContent>
            <Typography sx={{fontFamily:'Roboto', fontWeight:'bold'}} textAlign={'left'} variant="body1">
              {title}
            </Typography>
          </CardContent>
        </Box>
        <Box display={'flex'} margin={2} justifyContent={'space-between'} alignItems={'center'}>
          <Typography fontFamily={'Poppins'} variant="body2">{price}.00DH</Typography>
        </Box>
        <Box display={'flex'} margin={2} justifyContent={'space-between'} alignItems={'center'}>
          <Button sx={{borderRadius:0}} fullWidth variant="contained" color='liliana_third'>ADD TO CART</Button>
        </Box>
      </Card>
    </Grid>
  )
}

export default SuggestionCard;