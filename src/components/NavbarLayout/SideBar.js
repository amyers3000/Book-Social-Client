import { styled, useTheme } from '@mui/material/styles';
import { Divider, IconButton, Box, Typography, Drawer, Stack } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CurrentUser } from '../../context/CurrentUser';
import { useContext, useEffect, useState } from 'react';
import { displayBuds } from '../../lib';
import SideBarItem from './SideBarItem';
import SideSearchBar from './SideSearchBar'
import { displaySearch } from '../../lib';

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
  const { currentUsername } = useContext(CurrentUser)
  const [following, setFollowing] = useState([])
  let [userSearch, setUserSearch] = useState('')
  let [userFound, setUserFound] = useState('')
  const [error, setError] = useState('')

  // Find current user and followers
  useEffect(() => {
    if (currentUsername != null) {
      displayBuds(currentUsername)
        .then(data => (setFollowing(data.Following)))
      
    }
  }, [currentUsername])

  function listBuds(following){
    if(following.length >= 1){
     return following.map((user) => ( <SideBarItem following={user} key={user.userId} />))}
    }
  // Handle searching for other users
    const handleSearch = (e, userSearch) => {
      e.preventDefault()
      setUserSearch(userSearch)
    }

    useEffect(() => {
    
      if (userSearch) {
        displaySearch(userSearch)
        .then(data => (setUserFound(data)))
        .catch(data => (setError(data)))
      }
    }, [userSearch])
  
  

  

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
      </DrawerHeader>
      <Divider />
      <Box p={2} width='250px' textAlign="center" role="presentation">
        <Box sx={{ width: '100%' }}>
        <SideSearchBar handleSearch={handleSearch}/>
          <Stack spacing={2}>
            {listBuds(userFound)}
          </Stack>
        </Box>
        <Divider sx={{pt:5}} />
        <Typography variant='subtitle1' component='div'>BookBuds:</Typography>
        <Box sx={{ width: '100%' }}>
          <Stack spacing={2}>
            {listBuds(following)}
          </Stack>
        </Box>
      </Box>

    </Drawer>
  )
}

export default SideBar

