import React from 'react'
import { Stack, Box, Typography, Container } from '@mui/material';

const Hero = () => {
    return (
        <Box
            sx={{
                bgcolor: 'inherit.light',
                pt: 8,
                pb: 6,
            }}>

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