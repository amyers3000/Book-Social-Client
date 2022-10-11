
import { DataContext } from '../../context/DataContext'
import { useContext } from 'react'
import { Grid, Container} from '@mui/material';
import GalleryItem from './GalleryItem';



function Gallery() {
    const data = useContext(DataContext)
    return (

        <Container maxWidth='lg'>
            <Grid container  spacing={2}>
                {data.map((book) => (
                    <GalleryItem key={book.id} book={book} />
                ))}
            </Grid>
        </Container>


    )
}

export default Gallery
