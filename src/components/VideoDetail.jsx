import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { fetchFromApi } from './utils/FetchFromApi'
import Videos from './Videos'
import { CheckCircle } from '@mui/icons-material'
import { Link, useParams} from "react-router-dom"

const VideoDetail = () => {
    const [videoDetail,setVideoDetail] = useState(null)
    const [relatedVideos, setRelatedVideos] = useState(null); 
  const {id} = useParams();



  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))

    fetchFromApi(`search?relatedToVideoId=${id}&part=snippet&type=video`)
      .then((data) => setRelatedVideos(data.items))

  },[id])

    if (!videoDetail) return <Typography>Loading...</Typography>;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;


  return (
    <Box minHeight="95vh">
      <Stack direction={{xs: "column", md: "row"}}>
        <Box flex={1}>
          <Box sx={{width:"100%", position:"sticky", top:"86px"}}>
            <ReactPlayer className="react-player" url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            <Typography color='#FFF' variant='h5' fontWeight="bold" p={2}>
                {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{color:"#FFF"}} py={1} px={2}>

              <Link to={`/channel/${channelId}`} style={{ color: '#FFF' }}>
              <Typography color='#FFF' variant={{sm: "subtitle1", md:"h6"}}>
                {channelTitle}
                <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                  </Typography>
              </Link>
               
            <Stack direction="row" gap="20px" alignItems="center" px={2} py={1}>
              <Typography variant="body1" sx={{ opacity: 0.7 }} color="#FFF">
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.7 }} color="#FFF">
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          
            </Stack>
           
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={relatedVideos} direction="column"/>  
        </Box>

      </Stack>
       

    </Box>
  )
}

export default VideoDetail