
import { DataContext } from '../context/DataContext'
import { useContext } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container'



function Gallery() {
    const data = useContext(DataContext)

    const display = data.map((item) => {
        if (item.volumeInfo.imageLinks) {
            return (
                <Grid item xs={12} md={6} key={item.id}>
                <CardActionArea component="a" href="#">
                    <Card sx={{ height:150, display: 'flex' }}>
                        <CardContent sx={{ flex: 1 }}>
                            <Typography component="h2" variant="h5">
                            {item.volumeInfo.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                            {item.volumeInfo.authors}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                View Details
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            sx={{ width: 100, display: { xs: 'none', sm: 'block' } }}
                            image={item.volumeInfo.imageLinks.thumbnail}
                            alt={item.volumeInfo.title}
                        />
                    </Card>
                </CardActionArea>
                </Grid>
            )
        } else {
            return (
                <Grid item xs={12} md={6} key={item.id}>
                <CardActionArea component="a" href="#">
                    <Card sx={{ display: 'flex' }}>
                        <CardContent sx={{ flex: 1 }}>
                            <Typography component="h2" variant="h5">
                            {item.volumeInfo.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                            {item.volumeInfo.authors}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                View Details
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            sx={{ width: 100, display: { xs: 'none', sm: 'block' } }}
                            image="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw"
                            alt={item.volumeInfo.title}
                        />
                    </Card>
                </CardActionArea>
                </Grid>
            )
        }


    })
    return (
        <Container maxWidth='lg'>
        <Grid container spacing={2}>
            {display}
        </Grid>
        </Container>
    )
}

export default Gallery
