import { Box, Button, Card, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import React from 'react'
import { FaShoppingBasket } from 'react-icons/fa';

const DiscountCard = ({title, image, price, discountPrice}) => {
  return (
    <Grid item >
      <Card sx={{width:240, ":hover":{boxShadow:5}, cursor:'pointer', position:'relative'}}>
        <Box>
            <p className='absolute right-0 top-1 text-white text-xs font-Poppins bg-liliana-primary text-right px-2 py-1 rounded-l-lg'>{'-'+parseInt(((price - discountPrice) / (price)) * 100)+'%'}</p>
        </Box>
          <Box display={'flex'} justifyContent={'center'}>
              <CardMedia component={'img'}
                sx={{height:220, width:220}}
                image={image}
                alt={title}
              />
          </Box>
        <Box display={'flex'} height={70} justifyContent={'center'}>
          <CardContent>
            <p className='text-center font-bold'>{title}</p>
          </CardContent>
        </Box>
        <Box display={'flex'} mr={2} justifyContent={'space-between'} alignItems={'center'}>
            <Box>
                <p className='line-through font-Poppins text-sm pl-2'>{price}.00DH</p>
                <div className='bg-liliana-secondary rounded-tr-md'>
                    <p className='font-Poppins p-2 text-white font-bold'>{discountPrice}.00DH</p>
                </div>
            </Box>
          <Button variant="contained" color='liliana_third'><FaShoppingBasket/></Button>
        </Box>
      </Card>
    </Grid>
  )
}

export default DiscountCard;