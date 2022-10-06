import { styled, useTheme } from '@mui/material/styles';
import { Divider, IconButton, Box, Typography, Drawer } from '@mui/material'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CurrentUser } from '../../context/CurrentUser';
import { useContext } from 'react';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));





const SideBar = ({ open, handleDrawerClose }) => {
  const theme = useTheme()
  const { currentUser } = useContext(CurrentUser)

  let displayUser = currentUser == undefined? "Please Log In" : `Welcome ${currentUser}`

  return (
    <Drawer
      variant='persistent'
      anchor='right'
      open={open}
      sx={{ width: 240 }}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        <Typography variant='h6' component='div' align='center' sx={{pl:1}}> 
          {displayUser}
        </Typography>
      </DrawerHeader>
      <Divider />
      <Box p={2} width='250px' textAlign="center" role="presentation">
      
        
        <Typography variant='h6' component='div'>
          BookBuds
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Stack spacing={2}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </Box>
      </Box>

    </Drawer>
  )
}

export default SideBar

