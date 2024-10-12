import React from 'react'
import { Stack  } from '@mui/material'
import {Link} from "react-router-dom"
import {logo} from "./utils/constants"
import SearchBar from './SearchBar'
import log from "/Public/Images/tv-svgrepo-com (1).svg";

const Navbar = () => {
  return (
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position:"sticky", 
    background:"#000", 
    top: 0, 
    justifyContent:"space-between"}}>
     <Link to="/" style={{display:"flex", alignItems:"center"}}>
      <img src={log} alt="logo" height={45}/>

     </Link>
     <SearchBar/>
    </Stack>
  )
}

export default Navbar