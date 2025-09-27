import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating({role, value}) {
    const ratingValue = value || 2.5;
    return (
        <Stack spacing={1}>
            {role === 0 && (
                <Rating name="half-rating" defaultValue={ratingValue} precision={0.5} />
            )}
            {role === 1 && (
                <Rating name="half-rating-read" defaultValue={ratingValue} precision={0.5} readOnly />
            )}
        </Stack>
    );
}