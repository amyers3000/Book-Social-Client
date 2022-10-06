
import { DataContext } from '../../context/DataContext'
import { useContext, useState } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Error from '../Error/Error'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import GalleryItem from './GalleryItem';



function Gallery() {
    const data = useContext(DataContext)
    return (

        <Container maxWidth='lg'>
            <Grid container spacing={2}>
                {data.map((book) => (
                    <GalleryItem key={book.id} book={book} />
                ))}
            </Grid>
        </Container>


    )
}

export default Gallery
