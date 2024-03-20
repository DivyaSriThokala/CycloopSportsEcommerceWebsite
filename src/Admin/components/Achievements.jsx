import { Button, Card, CardContent, Typography, styled } from '@mui/material'
import React from 'react'

const TriangleImage=styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute",
})

const TrophyImage=styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute",
})

const Achievements = () => {
  return (
   <Card className='' sx={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <CardContent>
         <Typography variant='h6' sx={{letterSpacing:".25px"}}>
            Shop With Cycloop
         </Typography>
         <Typography variant='body2'>Congratulations 🥳</Typography>
         <Typography sx={{my:3.1}}variant='h5'>420.8k</Typography>
         <Button size='small' variant='contained'>View Sales</Button>
         <TriangleImage src=''></TriangleImage>
         <TrophyImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSponXq-FEffW2IIpGx0BmJBypViHyxi8NFqw&usqp=CAU'/>
           </CardContent>
   </Card>
  )
}

export default Achievements