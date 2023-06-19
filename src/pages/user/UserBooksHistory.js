import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CardElement from '../../component/CardElement'


const UserBooksHistory = () => {
    const { user } = useSelector(state => state.userProfile);


    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: "#fafafa" }}> Books History</Typography>
                <Box>
                    {
                        user && user.booksHistory.map((history, i) => (
                            <CardElement
                                key={i}
                                id={history._id}
                                bookTitle={history.title}
                                description={history.description}
                                category=''
                                location={history.location}
                            />
                        ))
                    }
                </Box>
            </Box>
        </>
    )
}

export default UserBooksHistory