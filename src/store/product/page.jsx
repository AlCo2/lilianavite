import { Box, Button, Container, Divider, Grid} from '@mui/material';
import React from 'react'
import SuggestionCard from '../components/SuggestionCard';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const product = () => {
  return (
    <>
    <Navbar/>
    <div>
        <Grid container className='h-screen'>
            <Grid item xs={12} sm={6} className='bg-liliana-background sm:p-4'>
                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <img src="/assets/amirataraboriginal.jpg" className='sm:w-1/2 max-sm:w-full rounded-md' alt="AmiratArabOriginal"/>
                </Box>
                <Box sx={{display:'flex', gap:1, justifyContent:'center', my:2}}>
                    <img src="/assets/amirataraboriginal.jpg" className='max-w-20 cursor-pointer hover:scale-105 duration-300 border-2 border-liliana-primary rounded-md' alt="kiko"/>
                    <img src="https://www.oudmalaki.com/wp-content/uploads/2021/10/ameerat-al-arab-100ml-oudmalaki-2.webp" className='max-w-20 border cursor-pointer hover:scale-105 duration-300 hover:border-2 hover:border-liliana-primary hover:rounded-md' alt="amiratarab" />
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} p={4} bgcolor={"white"} >
                <div className='my-5'>
                    <p className='font-Roboto uppercase opacity-40 font-semibold'>Parfum</p>
                </div>
                <div className='flex justify-between'>
                    <div className='w-4/6'>
                        <p className='font-Roboto font-semibold uppercase text-2xl'>Ameerat Al Arab de LATTAFA 100ml asdad as das dasd</p>
                    </div>
                    <p className='font-Poppins text-xl'>199DH</p>
                </div>
                <div className='my-5'>
                    <p className='font-Roboto text-sm'>Découvrez l’élégance et la sophistication de Maison Alhambra Alpine Homme Sport, un parfum luxueux et sophistiqué pour homme, inspiré de Chanel Allure Sport. Ce parfum combine des notes fraîches d’agrumes, des fleurs succulentes et de l’ambre chaud dès son ouverture, créant une expérience olfactive captivante.</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-xs'>Make every gift special 10% off <br /> any two products</p>
                    <Button sx={{borderRadius:0}} variant="contained" color='liliana_third'>ADD TO CART +</Button>
                </div>
            </Grid>
        </Grid>
        <Container>
        <p className='font-Poppins text-xl my-4'>Produits similaires</p>
        <Divider/>
        <Grid container gap={1} justifyContent={{xs:'center', sm:'left'}} my={2}>
            <SuggestionCard title='اميرة العرب ORIGINAL 100ML' image='/assets/amirataraboriginal.jpg' price={250}/>
            <SuggestionCard title='GLOSSE KIKO MILANO' image='/assets/kiko.jpg' price={70}/>
            <SuggestionCard title='PHILOS 100ML ORIGINAL' image='/assets/philos.jpg' price={300}/>
            <SuggestionCard title='Pack AL FAKHAMA' image='/assets/packalfakhama.jpeg' price={300}/>
            <SuggestionCard title='Pack ITARA' image='/assets/packitara.jpeg' price={210}/>
        </Grid>
        </Container>
    </div>
    <Footer/> 
    </>
  )
}

export default product;