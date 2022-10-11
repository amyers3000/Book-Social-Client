import { useEffect, useState } from 'react'
import { Grid, Container, Typography, Box, Stack, TextField, Button } from '@mui/material'
import Navbar from '../NavbarLayout/Navbar'
import parse from 'html-react-parser'
import { useParams } from 'react-router-dom'
import { displayFavorite } from '../../lib/index'
import Comment from './Comment'
import { saveComment } from '../../lib/index'





const BookGallery = () => {
  let { id } = useParams()
  let [data, setData] = useState('')
  let [discussion, setDiscussion] = useState('')

  // Loads book data
  useEffect(() => {
    displayFavorite(id)
      .then((data) => setData(data))
  }, [ data])

  // displays discusssion board
  function commentCard(data) {
    if (data.comments !== undefined) {
      return data.comments.map((comment) => (<Comment comment={comment} key={comment.commentId} />))
    }
  }
  // Saves new discussion posts/comments
  async function handleSave(e) {
    e.preventDefault()
    let id = data.bookId
    await saveComment(id, discussion)
    setDiscussion('')
  }




  return (
    <>
      <Navbar />
      <Container maxWidth='lg' sx={{ mt: 20 }}>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12} sx={{ alignItems: 'center', alignContent: 'center', display: 'flex', justifyContent: 'center', mb: 5, pl: 0, ml: 0 }}>
            <Box
              component='img'
              src={data.image}
              sx={{ width: 180 }}
            >
            </Box>
          </Grid>
          <Grid item md={4} xs={12} sx={{ alignItems: 'center', pr: 5 }}>
            <Typography variant='h4'>{data.title}</Typography>
            <Typography variant='h5'>{data.authors}</Typography>
            {parse(String(data.description))}
          </Grid>
          <Grid item md={4} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ overflowY: 'auto', overflowX: 'hidden', textAlign: 'justify', width: 400, height: 500 }}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0.5}
              >
                {commentCard(data)}

              </Stack>


            </Box>
            <Box>
              <form style={{ justifyContent: 'center', paddingBottom: 50, width: 400 }} onSubmit={(e) => handleSave(e, discussion)}>
                <div>
                  <TextField fullWidth type="text" placeholder="Discuss here" onChange={(e) => setDiscussion(e.target.value)} />
                </div>
                <Button fullWidth variant='contained' color='secondary' type='submit'>Enter</Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default BookGallery