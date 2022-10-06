import { useState } from 'react'
import { Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Modal, Box, Button, Icon, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions } from '@mui/material';
import Error from '../Error/Error'

const GalleryItem = ({ book }) => {
    let [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    async function handleSave() {

    }

    const style = {

        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
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
                                {book.volumeInfo.authors[0]}
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
                    <DialogContentText sx={{ pl:3}}>
                        By: {book.volumeInfo.authors[0]}
                    </DialogContentText>
                    <DialogContent dividers>
                        <DialogContentText>
                            {book.volumeInfo.description}
                        </DialogContentText>
                    </DialogContent>
                <DialogActions>
                    <Button variant="secondary">Add to Favorites</Button>
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
                                {book.volumeInfo.authors}
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
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {book.volumeInfo.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {book.volumeInfo.authors}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {book.volumeInfo.description}
                        </Typography>
                        <Button onClick={handleSave} color='secondary'>Add to Favorites</Button>
                    </Box>
                </Modal>
            </Grid>
        )
    }
}

export default GalleryItem