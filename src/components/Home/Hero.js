import * as React from 'react';
import { useRef } from 'react'

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const Hero = () => {
    let titleInput = useRef('')
    let authorInput = useRef('')


    return (
    
        <Box
            sx={{
                bgcolor: 'inherit.light',
                pt: 8,
                pb: 6,
            }}
        >
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Let's Get Reading!
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Share books by adding them to your collection:
                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    
                    
                </Stack>
            </Container>
        </Box>
    )
}

export default Hero