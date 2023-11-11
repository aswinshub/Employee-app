
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <div>
 <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='success'>
        <Toolbar>
    
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EmployeeApp
          </Typography >
          <div className='NavLink'>
          <Button  color="inherit"  ><Link  style={{textDecoration:'none',color:'white'}} to='/'>Home</Link></Button>
          <Button color="inherit"><Link style={{textDecoration:'none',color:'white'}} to='/employee'>Employee Form</Link></Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>


      
    </div>
  )
}

export default Navbar
