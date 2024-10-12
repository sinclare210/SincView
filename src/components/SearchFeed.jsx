import React from 'react'
import { useState,useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { useParams } from 'react-router-dom'

import { fetchFromApi } from './utils/FetchFromApi'

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
.then((data) => {
  setVideos(data.items)
})  },[searchTerm])
  return (
    <Box p={2} sx={{
        overflowY:"auto", height:"90vh", flex:"2"
      }}>
          <Typography variant='h4' fontWeight="bold" mb={2} sx={{
        color: "white"
      }}>
        Search result for:<span style={{color: "#113d8a"}}> {searchTerm} Videos</span>
      </Typography>
      <Videos videos={videos}/>
      </Box>
    
  )
}

export default SearchFeed