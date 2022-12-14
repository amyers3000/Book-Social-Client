import { Card, CardActionArea, CardContent } from '@mui/material'
import { Link as Link1 } from 'react-router-dom'






const FavoriteBook = ({ book, username, handleViewBookButton }) => {
    const bookId = book.bookId
    
    return (
        <Card>
            <Link1 to={`/user/${username}/${bookId}`}>
                <CardActionArea onClick={() => handleViewBookButton(true)}>
                    <CardContent
                        component='img'
                        src={book.image}
                        sx={{ width: 150, height: 220 }}
                    />
                </CardActionArea>
                
            </Link1>
            
        </Card>
    )
}

export default FavoriteBook