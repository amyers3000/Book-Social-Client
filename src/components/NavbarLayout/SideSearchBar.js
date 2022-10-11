import { useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import {InputBase, Box} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '17ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const SideSearchBar = ({handleSearch}) => {
  const [userSearch, setUserSearch] = useState('')

  return (
    <Box component='form'sx={{pb:1}} onSubmit={(e) => handleSearch(e, userSearch)} >
    <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search users..."
              inputProps={{ 'aria-label': 'search' }}
              type="text" onChange={(e) => setUserSearch(e.target.value)} 
            />
          </Search>

      </Box>
  )
}

export default SideSearchBar

