import { useContext, useState } from 'react'
import { CardContent, Typography, Card, Button, Dialog, DialogContent, DialogActions, TextField } from '@mui/material'
import { CurrentUser } from '../../../context/CurrentUser';
import { deleteComment, editComment } from '../../../lib';

const Comment = ({ comment }) => {
    const { currentUsername } = useContext(CurrentUser)
    const [ newContent, setNewContent ] = useState('')
    let [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)


    // Deletes comment/discussion post
    async function handleDelete(e, commentId){
        e.preventDefault()
        deleteComment(commentId)
    }
    // Edits comment/discussion post
    async function handleEdit(e, commentId, newContent){
        e.preventDefault()
        editComment(commentId, newContent )
        setOpen(false)
    }
    

    // Only displays for users comments
     let displayButtons = currentUsername === comment.user.username ? <span> <Button size='small' variant='secondary' onClick={handleOpen}>Edit</Button><Button size='small' variant='secondary' onClick={(e) => handleDelete(e, comment.commentId)}>Delete</Button></span> : ''

    return (
        <Card variant='outlined' sx={{width:380}}>
        <CardContent>
            <Typography variant='body1'>"{comment.content}"</Typography>
            <Typography variant='subtitle2'>-{comment.user.username}</Typography>
            {displayButtons}
        </CardContent>
        
        <Dialog
        open={open}
        onClose={handleClose}
       
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
    >
        <DialogContent dividers>
            <TextField sx={{width:400}}type='text' placeholder={comment.content} onChange={(e) => setNewContent(e.target.value)}/>
        </DialogContent>
        <DialogActions>
            <Button variant="secondary" onClick={(e) => handleEdit(e, comment.commentId, newContent)}>Edit</Button>
        </DialogActions>
    </Dialog>
    </Card>
    )
}

export default Comment