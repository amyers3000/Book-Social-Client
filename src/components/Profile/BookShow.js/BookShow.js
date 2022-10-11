import { useEffect, useState } from 'react'
import { Grid, Container, Typography, Box, Stack, TextField, Button, Card, CardContent } from '@mui/material'
import parse from 'html-react-parser'
import { displayFavorite } from '../../../lib/index'
import Comment from './Comment'
import { saveComment } from '../../../lib/index'


const BookShow = ({ id, currentUsername, handleRemove, username }) => {

  let [data, setData] = useState('')
  let [discussion, setDiscussion] = useState('')


  // Loads book data
  useEffect(() => {
    displayFavorite(id)
      .then((data) => setData(data))
  }, [data, id])


  // Saves new discussion posts/comments
  async function handleSave(e) {
    e.preventDefault()
    let id = data.bookId
    await saveComment(id, discussion)
    setDiscussion('')
  }

  // Adds remove book button
  function displayRemoveButton() {
    if (currentUsername === username) {
      return (
        <Button onClick={(e) => { handleRemove(e, data.bookId) }}>Remove</Button>
      )
    }
  }

  return (
    <>
      <Container maxWidth='lg' sx={{ mt: 20, boxShadow: 5, mb: 10 }}>
        <Grid container spacing={2}>
          <Grid item md={2} xs={12} sx={{ alignItems: 'center', alignContent: 'center', display: 'flex', justifyContent: 'center', mb: 5, flexDirection: 'column' }}>
            <Box
              component='img'
              src={data.image}
              sx={{ width: 180 }}
              name='bookShow'
            />
            {displayRemoveButton()}
          </Grid>
          <Grid item md={5} xs={12} sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h4' sx={{ pl: 3 }} >{data.title}</Typography>
            <Typography variant='h6' sx={{ pl: 3 }}>{data.authors}</Typography>
            <Box sx={{ overflowY: 'auto', overflowX: 'hidden', textalign: 'justify', width: 400, height: 420 }}>
              {parse(String(data.description))}
            </Box>
          </Grid>
          <Grid item md={5} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ overflowY: 'auto', overflowX: 'hidden', textalign: 'justify', width: 400, height: 500 }}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0.5}
              >
                <Card variant='outlined' sx={{ width: 380 }}>
                  <CardContent>
                    <Typography variant='body1'>"Welcome to the discussion board for this book! Because we are all friends here, please remember to keep topics appropriate and nice."</Typography>
                    <Typography variant='subtitle2'>-The Book Social Family</Typography>
                  </CardContent>
                </Card>
                {data.comments?.map((comment) => (<Comment comment={comment} key={comment.commentId} />))}
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

export default BookShow