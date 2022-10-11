import React from 'react'
import { Paper, Avatar, Typography } from '@mui/material'
import { deepPurple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display:'flex',
    
  }));

const SideBarItem = ({following}) => {
    
  return (
    <Item>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>{following.firstName[0]}{following.lastName[0]}</Avatar>
        <Box sx={{pl: 3, pt:1}}>
        <Typography> {following.username}</Typography>
        <Typography variant='subtitle2'>{following.firstName} {following.lastName}</Typography>
        </Box>
        
    </Item>
  )
}

export default SideBarItem