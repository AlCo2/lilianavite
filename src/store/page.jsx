import { Box, List, Button, Checkbox, Container, FormControlLabel, FormGroup, Grid, IconButton, Menu, MenuItem, Paper, Slider, InputLabel, FormControl, OutlinedInput, InputAdornment, Input, TextField } from '@mui/material';
import { useState } from 'react';
import { CgSortAz } from "react-icons/cg";
import SuggestionCard from './components/SuggestionCard';
import Navbar from '../components/Navbar';
import { BiSearch } from 'react-icons/bi';
import { RiArrowUpDownFill } from 'react-icons/ri';
import Footer from '../components/Footer';
import { FaCheckCircle } from 'react-icons/fa';

const SortMenu = () =>{
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const options = [
    'Best Match',
    'Price Low - High',
    'Price High - Low',
    'Newest',
  ];
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
      >
        <IconButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <RiArrowUpDownFill className='text-sm'/>
        </IconButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

const CategoryMenu = () =>{
  const [categories, setCategories] = useState([
    {id:1,name:'Brum', status:false},
    {id:2,name:'Corps et bain', status:false},
    {id:3,name:'Packs', status:false},
    {id:4,name:'Parfum', status:false},
    {id:5,name:'Maquillage', status:false},
    {id:6,name:'Soin de visage', status:false},
  ])
  const [selectAll, setSelectAll] = useState(false);
  const handleSelectAllChange = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    setCategories(categories.map(category => ({ ...category, status: checked })));
  };

  const handleCheckboxChange = (id) => (e) => {
    setCategories(prevCategories =>
      prevCategories.map(category =>
        category.id === id ? { ...category, status: e.target.checked } : category
      )
    );
  };
  return (
        <List
          id="basic-menu"
        >
          <FormControlLabel className='pl-2' control={<Checkbox onChange={handleSelectAllChange}/>} label="All" />
          <FormGroup className='pl-5'>
            {categories.map(category=>(
              <FormControlLabel key={category.id} control={<Checkbox checked={category.status} size='small' onChange={handleCheckboxChange(category.id)} />} label={category.name} />  
            ))}
          </FormGroup>
        </List>
  )
}


const FilterPrice = () =>{
  const [value1, setValue1] = useState([300, 1250]);
  function valuetext(value) {
    return `${value}°C`;
  }
  const minDistance = 10;

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  return (
    <>
        <Slider
          getAriaLabel={() => 'Minimum distance'}
          color='liliana_third'
          value={value1}
          onChange={handleChange1}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
          min={0}
          max={3000}
        />
        <div className='flex flex-wrap gap-1'>
          <FormControl fullWidth sx={{width:85}}>
            <TextField
              id="outlined-start-adornment"
              sx={{bgcolor:'white'}}
              InputProps={{
                startAdornment: <InputAdornment position="start">DH</InputAdornment>,
                style:{fontSize:'12px'}
              }}
              size='small'
              value={value1[0]}
            />
          </FormControl>
          -
          <FormControl fullWidth sx={{width:85}}>
            <TextField
              id="outlined-start-adornment"
              sx={{bgcolor:'white'}}
              InputProps={{
                startAdornment: <InputAdornment position="start">DH</InputAdornment>,
                style:{fontSize:'12px'}
              }}
              size='small'
              value={value1[1]}
            />
          </FormControl>
          <IconButton size='small'>
            <FaCheckCircle className='text-green-600'/>
          </IconButton>
        </div>
      </>
  )
}

const FilterMenu = () =>{
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
      id="demo-positioned-button"
      aria-controls={open ? 'demo-positioned-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      >
        <CgSortAz className='text-xl'/>
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        <div className='w-52'>
          <Container>
            <Grid container>
              <Grid item xs={12} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <p className='font-Poppins'>Filters</p>
                <Button variant='text' size='small' className='text-xs text-liliana-secondary'>Clear ALL</Button>
              </Grid>
              <Grid item xs={12} my={1}>
                <label className='relative'>
                  <BiSearch className='absolute top-0 right-2'/>
                  <input type="text" placeholder='Search' className='border h-8 focus:outline-blue-400 p-1 text-sm w-full' name="" id="" />
                </label>
              </Grid>
              <Grid item xs={12}>
                <p className='font-Poppins'>price</p>
                <FilterPrice/>
              </Grid>
              <Grid item xs={12}>
                <p className='font-Poppins'>Categories</p>
              </Grid>
              <Grid item xs={12}>
               <CategoryMenu/> 
              </Grid>
            </Grid>
          </Container>
        </div>
      </Menu>
    </div>
  );
}

const store = () => {
  const [categories, setCategories] = useState([
    {id:1,name:'Brum', status:false},
    {id:2,name:'Corps et bain', status:false},
    {id:3,name:'Packs', status:false},
    {id:4,name:'Parfum', status:false},
    {id:5,name:'Maquillage', status:false},
    {id:6,name:'Soin de visage', status:false},
  ])
  const [selectAll, setSelectAll] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelectAllChange = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    setCategories(categories.map(category => ({ ...category, status: checked })));
  };

  const handleCheckboxChange = (id) => (e) => {
    setCategories(prevCategories =>
      prevCategories.map(category =>
        category.id === id ? { ...category, status: e.target.checked } : category
      )
    );
  };

  return (
    <>
    <Navbar page={'store'}/>
      <div className='min-h-screen pt-5 bg-liliana-background max-sm:px-4'>
          <Grid container columns={12} justifyContent={'center'}>
            <Grid xs={2.5} item sx={{p:"1.25rem", pb:'0.25rem', pt:'1.9rem'}} className='max-lg:hidden '>
              <p className='font-bold font-Opensans text-xl'>Filters</p>
              <p className='font-Opensans font-semibold mt-5'>Price</p>
              <FilterPrice/>
              <p className='font-Opensans font-semibold mt-5'>Categories</p>
              <FormControlLabel control={<Checkbox color='liliana_third' size='small' onChange={handleSelectAllChange}/>} label="All" />
              <FormGroup className='pl-2 font-Opensans'>
                {categories.map(category=>(
                  <FormControlLabel key={category.id} control={<Checkbox color='liliana_third' checked={category.status} size='small' onChange={handleCheckboxChange(category.id)} />} label={category.name} />  
                ))}
              </FormGroup>
            </Grid>
            <Grid md={9.5} sx={{p:"1.25rem", pb:'0.25rem'}} item>
                <Grid container alignItems={'center'} justifyContent={'space-between'}>
                  <Grid item>
                    <p className='font-bold text-sm opacity-70'>23 Items</p>
                  </Grid>
                  <Grid item display={'flex'} alignItems={'center'} gap={2}>
                    <Box display={'flex'} alignItems={'center'}>
                      <div className='flex items-center lg:hidden'>
                        <p className='text-sm'>Filters</p>
                        <FilterMenu/>
                      </div>
                      <p className='text-sm'>Sort</p>
                      <SortMenu/>
                    </Box>
                  </Grid>
                </Grid>
              <Grid container gap={2} marginY={5} justifyContent={{xs:'center'}} mt={2}>
                <SuggestionCard title='اميرة العرب ORIGINAL 100ML' image='/assets/amirataraboriginal.jpg' price={250}/>
                <SuggestionCard title='Alpine Homme Sport Maison Alhambra' image='https://parfumstore.ma/wp-content/uploads/2024/04/alpine-homme-sport-maison-alhambra-prix-maroc.webp' price={199}/>
                <SuggestionCard title='GLOSSE KIKO MILANO' image='/assets/kiko.jpg' price={70}/>
                <SuggestionCard title='اميرة العرب ORIGINAL 100ML' image='/assets/amirataraboriginal.jpg' price={250}/>
              </Grid>
            </Grid>
          </Grid>
      </div>
      <Footer/>
    </>
  )
}

export default store;