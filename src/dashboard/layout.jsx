
import { Avatar, Box, Container, Grid, IconButton } from '@mui/material'
import Sidebar from './components/Sidebar';
import { Outlet } from "react-router-dom";
import { BiBell, BiSearch } from 'react-icons/bi';

const page = () => { 
  return (
    <>
        <div className='min-h-screen bg-liliana-background'>
          <Grid container className='min-h-screen'>
            <Sidebar/>
            <Grid item xs >
              <Outlet/>
            </Grid>
          </Grid>
        </div>
    </>
  )
}

export default page;