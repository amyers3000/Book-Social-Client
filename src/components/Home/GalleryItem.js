import { useState } from 'react'
import { Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Button, Icon, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions } from '@mui/material';
import { saveFavorite } from '../../lib';
import parse from 'html-react-parser'


const GalleryItem = ({ book }) => {
    let [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    async function handleSave(){
        await saveFavorite({id: book.id})
        setOpen(false)
    }

    

    if (book.volumeInfo.imageLinks) {
        return (
            <Grid item xs={12} md={4}>
                <CardActionArea onClick={handleOpen}>
                    <Card sx={{ height: 200, display: 'flex' }}>
                        <CardContent sx={{ flex: 1 }}>
                            <Typography gutterBottom component="h2" variant="h5">
                                {book.volumeInfo.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                { book.volumeInfo.authors ? book.volumeInfo.authors[0] : ""}
                            </Typography>
                            <Icon component='a' color="secondary">add_circle</Icon>
                        </CardContent>
                        <CardMedia
                            component="img"
                            sx={{ width: 130, display: { xs: 'none', sm: 'block' } }}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            alt={book.volumeInfo.title}
                        />
                    </Card>
                </CardActionArea>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll='paper'
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <DialogTitle id="modal-modal-title">
                        {book.volumeInfo.title}
                    </DialogTitle>
                    <DialogContentText sx={{ pl: 3 }}>
                        {book.volumeInfo.authors ? book.volumeInfo.authors[0] : ""}
                    </DialogContentText>
                    <DialogContent dividers>
                        <DialogContentText>
                            {book.volumeInfo.description ? parse(book.volumeInfo.description) : "None"}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleSave} variant="secondary">Add to Favorites</Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        )
    } else {
        return (
            <Grid item xs={12} md={4}>
                <CardActionArea onClick={handleOpen}>
                    <Card sx={{ height: 200, display: 'flex' }}>
                        <CardContent sx={{ flex: 1 }}>
                            <Typography component="h2" variant="h5">
                                {book.volumeInfo.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {book.volumeInfo.authors ? book.volumeInfo.authors[0] : ""}
                            </Typography>
                            <Icon color="secondary">add_circle</Icon>
                        </CardContent>
                        <CardMedia
                            component="img"
                            sx={{ width: 130, display: { xs: 'none', sm: 'block' } }}
                            image="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw"
                            alt={book.volumeInfo.title}
                        />
                    </Card>
                </CardActionArea>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll='paper'
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <DialogTitle id="modal-modal-title">
                        {book.volumeInfo.title}
                    </DialogTitle>
                    <DialogContentText sx={{ pl: 3 }}>
                        By: {book.volumeInfo.authors ? book.volumeInfo.authors[0] : ""}
                    </DialogContentText>
                    <DialogContent dividers>
                        <DialogContentText>
                            {book.volumeInfo.description ? parse(book.volumeInfo.description) : "None"}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleSave} variant="secondary">Add to Favorites</Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        )
    }
}

export default GalleryItem