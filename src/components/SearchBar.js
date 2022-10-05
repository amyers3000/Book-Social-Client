import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


function SearchBar(props) {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    return (
        <form style={{ display: 'flex', justifyContent: 'center', paddingBottom: 50 }} onSubmit={(e) => props.handleSearch(e, title, author)}>
            <div>
                <TextField fullWidth type="text" placeholder="Enter a title here" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <TextField fullWidth type="text" placeholder="Enter a author here" onChange={(e) => setAuthor(e.target.value)} />
            </div>


            <Button variant='contained' color='secondary' type='submit'>Submit</Button>

        </form>
    )
}


export default SearchBar
