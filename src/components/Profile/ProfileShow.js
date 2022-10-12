import {useContext, useEffect, useState} from 'react'
import Navbar from '../NavbarLayout/Navbar'
import { Container, Grid, Box, Typography, Button, Alert} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'
import SwiperInit from './SwiperInit'
import FavoriteBook from './FavoriteBook'
import BookShow from './BookShow.js/BookShow'
import { CurrentUser } from '../../context/CurrentUser'
import { deleteBook, profileInfo, addFollower, removeFollower } from '../../lib'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Link } from 'react-scroll'



const ProfileShow = () => {
let { username } = useParams()
let { id } = useParams()
let [userData, setUserData] = useState('')
let [bookRemoved, setBookRemoved] = useState(false)
let [isFollowing, setIsFollowing] = useState(false)
let [isNotFollowing, setIsNotFollowing] = useState(false)
let [displayBookSelected, setDisplayBookSelected] = useState(false)
let { currentUsername, currentFollowing } = useContext(CurrentUser)
let navigate = useNavigate()

 
// Loads user info
 useEffect( () =>{
profileInfo(username)
.then((data) => setUserData(data))
if(userData.message === 'unauthorized'){
    navigate('/')
}  
}, [bookRemoved, username, isFollowing, navigate, userData.message])

// Handles removing book
async function handleRemove(e, id){
    e.preventDefault()
    await deleteBook(id)
    setBookRemoved(true)
    
}

// Handles adding follower
async function handleFollow(e, id){
e.preventDefault()
setIsFollowing(true)
await addFollower(id)
}

// Handles removing follower
async function handleRemoveFollow(e, id){
e.preventDefault()
setIsNotFollowing(true)
await removeFollower(id)
}


let viewBookButton = displayBookSelected ? <Link smooth={true} duration={500} to='bookShow'><Button>View Book Discussion</Button></Link> : ''

function handleViewBookButton(){
    setDisplayBookSelected(true)
}

let successfulConnection = isFollowing ? <Alert severity="success">You have successfully followed user!</Alert> : ""
let succesfulRemoval = isNotFollowing ? <Alert severity="success">You have successfully unfollowed user!</Alert> : ""
// Display follow button
function displayFollowButton(){
    let Following= currentFollowing?.find(following => following.username === username)
    if(currentUsername !== username ){
        if(!Following ){
        return <Button onClick={(e) => {handleFollow(e, userData.userId )}} variant='secondary'>
            <PersonAddIcon color='secondary' sx={{pr:1}}/>
            Follow
            </Button>
        }else if(Following){
            return <Button variant='secondary' onClick={(e) => {handleRemoveFollow(e, userData.userId )}}>
                <PersonRemoveIcon color='secondary' sx={{pr:1}}/>
                Unfollow
                </Button>
        }
    }
}

// Displays selected book
function displayBook(id){
    if(id){
        return(
        <BookShow id={id} handleRemove={handleRemove} currentUsername={currentUsername} username={username} />
        )
    }
}
  return (
    <>
        <Navbar/>
        {successfulConnection}
        {succesfulRemoval}
        <Container maxWidth='lg' sx={{ mt: 10 }}>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12} sx={{ alignItems: 'center', alignContent: 'center', display: 'flex', justifyContent: 'center', mb: 5}}>
            <Box
              component='img'
              src='https://images.unsplash.com/photo-1471440671318-55bdbb772f93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2lsb3VldHRlJTIwcmVhZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              sx={{ width: 350 }}
            />
          </Grid>
          <Grid item md={8} xs={12} sx={{ alignItems: 'center', display:'flex', justifyContent:'center', alignContent: 'center'}}>
            <Box sx={{pl: 5}}>
            <Typography variant='h2'>{userData.firstName} {userData.lastName} </Typography>
            <Typography variant='h4'>{userData.city}, {userData.state}</Typography>
            {displayFollowButton()}
            {viewBookButton}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{mb:5}} >
      <SwiperInit >
        {userData.books?.map((book) => (
            <SwiperSlide key={book.bookId}>
            <FavoriteBook book={book} key={book.bookId} username={username} handleViewBookButton={handleViewBookButton}/>
            </SwiperSlide>
        ))}
      </SwiperInit>
      </Container>
      
      
      {displayBook(id)}
    </>
  )
}

export default ProfileShow