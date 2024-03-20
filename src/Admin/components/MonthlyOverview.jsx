import { TrendingUp } from '@mui/icons-material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DevicesIcon from '@mui/icons-material/Devices';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const salesData = [
    {
        stats: '245k',
        title: 'Sales',
        color: '#2475B0',
        icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />
    },
    {
        stats: '12.5k',
        title: 'Customers',
        color: '#43BE31',
        icon: <AccountCircleIcon sx={{ fontSize: "1.75rem" }} />
    },
    {
        stats: '1.54k',
        title: 'Products',
        color: '#BB2CD9',
        icon: <DevicesIcon sx={{ fontSize: "1.75rem" }} />
    },
    {
        stats: '88k',
        title: 'Revenue',
        color: '#FAD02E',
        icon: <AttachMoneyIcon sx={{ fontSize: "1.75rem" }} />
    }
]

const renderStats=()=>{
    return salesData.map((item,index)=>
    {
        return ( <Grid item xs={12} sm={3} key={index}>
             <Box sx={{display:"flex",alignItems:"center"}}>
                  <Avatar variant='rounded' sx={{mr:3,width:44,height:44,boxShadow:3,color:"white",backgroundColor:`${item.color}`}}>
                      {item.icon}
                  </Avatar>
                  <Box sx={{display:"flex",flexDirection:"column"}}>
                      <Typography variant='caption'>{item.title}</Typography>
                      <Typography  variant='h6'>{item.stats}</Typography>
                  </Box>
             </Box>
        </Grid>);
       
    })
}

const MonthlyOverview = () => {
    return (
            <Card >
                <CardHeader title="Monthly Overview" sx={{textAlign:'left'}} action={
                    <IconButton size='small'>
                        <MoreVertIcon/>
                    </IconButton>
                }
                subheader={
                    <Typography variant='body2' sx={{textAlign:'left'}}>
                        <Box component="span" sx={{fontWeight:600,color:'text.primary',mr:1}}>
                            Total 48.5% growth 😎
                        </Box>
                          this month
                    </Typography>
                }
                titleTypographyProps={{
                    sx:{
                        mb:2.5,
                        lineHeight:'2rem !important',
                        letterSpacing:'.15px !important'
                        
                    }
                }}
                />
                <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
                    <Grid container spacing={[5,0]}>
                        {renderStats()}
                    </Grid>

                </CardContent>
            </Card>
    )
}

export default MonthlyOverview