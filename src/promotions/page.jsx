import { Box, Grid } from "@mui/material"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import DiscountCard from "../components/DiscountCard"


const page = () => {
  return (
    <>
    <Navbar/>
    <Box className="min-h-screen bg-liliana-background">
      <Grid container>
        <Grid item xs={12}>
          <img src="assets/promo.jpg" alt="promo" />
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent={'center'} rowGap={2} columnGap={5} className="my-10">
            <DiscountCard title='ASPIR RO4873/RO4B63EA' image='https://prod2-media.electroplanet.ma/media/catalog/product/cache/14e469c4a70431355c88f88fd8855f6e/1/1/1100.jpg' price={799} discountPrice={399}/>
            <DiscountCard title='ASPIRATEUR BALAI HOMELAND 22,2V' image='https://prod2-media.electroplanet.ma/media/catalog/product/cache/14e469c4a70431355c88f88fd8855f6e/3/0/3010558_2.jpg' price={2399} discountPrice={1899}/>
            <DiscountCard title='ASPIRATEUR BALAI BBHL21435' image='https://prod2-media.electroplanet.ma/media/catalog/product/cache/14e469c4a70431355c88f88fd8855f6e/2/9/2911149-1.jpg' price={2299} discountPrice={1999}/>
            <DiscountCard title='ASP BALAI RH9879WO/RH98A9WO' image='https://prod2-media.electroplanet.ma/media/catalog/product/cache/14e469c4a70431355c88f88fd8855f6e/2/9/2911149-1.jpg' price={2299} discountPrice={1999}/>
            <DiscountCard title='ASPIR RO4873/RO4B63EA' image='https://prod2-media.electroplanet.ma/media/catalog/product/cache/14e469c4a70431355c88f88fd8855f6e/1/1/1100.jpg' price={799} discountPrice={399}/>
            <DiscountCard title='ASPIRATEUR BALAI HOMELAND 22,2V' image='https://prod2-media.electroplanet.ma/media/catalog/product/cache/14e469c4a70431355c88f88fd8855f6e/3/0/3010558_2.jpg' price={2399} discountPrice={1899}/>
            <DiscountCard title='ASPIRATEUR BALAI BBHL21435' image='https://prod2-media.electroplanet.ma/media/catalog/product/cache/14e469c4a70431355c88f88fd8855f6e/2/9/2911149-1.jpg' price={2299} discountPrice={1999}/>
            <DiscountCard title='ASP BALAI RH9879WO/RH98A9WO' image='https://prod2-media.electroplanet.ma/media/catalog/product/cache/14e469c4a70431355c88f88fd8855f6e/2/9/2911149-1.jpg' price={2299} discountPrice={1999}/>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{display:'flex', justifyContent:'center', gap:5, flexWrap:'wrap', mb:2}}>
          <img src="assets/lots-img-09.jpg" alt="lots" />
          <img src="assets/lots-img-22.jpg" alt="lots" />
        </Grid>
        <Grid item xs={12}>
          <img src="assets/promo4.jpg" alt="promo" />
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent={'center'} rowGap={2} columnGap={5} className="my-10">
            <DiscountCard title='ASPIR RO4873/RO4B63EA' image='https://prod2-media.electroplanet.ma/media/catalog/product/cache/14e469c4a70431355c88f88fd8855f6e/1/1/1100.jpg' price={799} discountPrice={399}/>
            <DiscountCard title='ASPIRATEUR BALAI HOMELAND 22,2V' image='https://prod2-media.electroplanet.ma/media/catalog/product/cache/14e469c4a70431355c88f88fd8855f6e/3/0/3010558_2.jpg' price={2399} discountPrice={1899}/>
            <DiscountCard title='ASPIRATEUR BALAI BBHL21435' image='https://prod2-media.electroplanet.ma/media/catalog/product/cache/14e469c4a70431355c88f88fd8855f6e/2/9/2911149-1.jpg' price={2299} discountPrice={1999}/>
            <DiscountCard title='ASP BALAI RH9879WO/RH98A9WO' image='https://prod2-media.electroplanet.ma/media/catalog/product/cache/14e469c4a70431355c88f88fd8855f6e/2/9/2911149-1.jpg' price={2299} discountPrice={1999}/>
            <DiscountCard title='ASPIR RO4873/RO4B63EA' image='https://prod2-media.electroplanet.ma/media/catalog/product/cache/14e469c4a70431355c88f88fd8855f6e/1/1/1100.jpg' price={799} discountPrice={399}/>
            <DiscountCard title='ASPIRATEUR BALAI HOMELAND 22,2V' image='https://prod2-media.electroplanet.ma/media/catalog/product/cache/14e469c4a70431355c88f88fd8855f6e/3/0/3010558_2.jpg' price={2399} discountPrice={1899}/>
            <DiscountCard title='ASPIRATEUR BALAI BBHL21435' image='https://prod2-media.electroplanet.ma/media/catalog/product/cache/14e469c4a70431355c88f88fd8855f6e/2/9/2911149-1.jpg' price={2299} discountPrice={1999}/>
            <DiscountCard title='ASP BALAI RH9879WO/RH98A9WO' image='https://prod2-media.electroplanet.ma/media/catalog/product/cache/14e469c4a70431355c88f88fd8855f6e/2/9/2911149-1.jpg' price={2299} discountPrice={1999}/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    <Footer/>
    </>
  )
}

export default page