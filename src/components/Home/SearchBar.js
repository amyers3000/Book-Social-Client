import { useState } from 'react'
import { TextField, Button } from '@mui/material/'

function SearchBar({handleSearch}) {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    return (
        <form style={{ display: 'flex', justifyContent: 'center', paddingBottom: 50 }} onSubmit={(e) => handleSearch(e, title, author)}>
            <div>
                <TextField required={true} fullWidth type="text" placeholder="Enter a title here" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <TextField fullWidth type="text" placeholder="Enter a author here" onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <Button variant='contained' color='secondary' type='submit'>Search</Button>

        </form>
    )
}


export default SearchBar
