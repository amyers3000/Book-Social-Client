
import { useState, useContext } from 'react'
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './SideBar';
import PersonIcon from '@mui/icons-material/Person';
import { CurrentUser } from '../../context/CurrentUser';
import { Link } from 'react-router-dom';




const Navbar = () => {
    const { currentUsername, currentUser } = useContext(CurrentUser)
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [open, setOpen] = useState(false)
    

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        console.log(currentUsername)
    };

    let displayUser = currentUser === undefined ? "Please Log In" : `Welcome ${currentUser}!`

    return (
        <div>
            <AppBar color='secondary' position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Book Social
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Link to={'/books'} textalign="center">Home</Link>
                                    </MenuItem>
                                
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Book Social
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            
                                <Link  style={{textDecoration:'none'}} to={'/books'} textalign="center">
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Typography>Home</Typography>
                                </Button>
                                </Link>
                                <Link  style={{textDecoration:'none'}} to={`/user/${currentUsername}`} textalign="center">
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Typography>Profile</Typography>
                                </Button>
                                </Link>
                        </Box>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <PersonIcon />
                            <Typography variant='h6' component='div' sx={{ pl: 1, display: { xs: 'none', md: 'flex' }}}> {displayUser}</Typography>
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <SideBar open={open} handleDrawerClose={handleDrawerClose} />
        </div>

    );
};
export default Navbar;