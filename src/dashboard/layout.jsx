
import { Grid } from '@mui/material'
import Sidebar from './components/Sidebar';
import { Outlet } from "react-router-dom";

const page = () => { 
  return (
    <>
        <div className='min-h-screen bg-liliana-background'>
          <Grid container className='min-h-screen'>
            <Sidebar/>
            <Grid item xs={10} className=''>
              <Outlet/>
            </Grid>
          </Grid>
        </div>
    </>
  )
}

export default page;