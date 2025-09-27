import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {grey, red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Rating from '@mui/material/Rating';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

export default function RecipeReviewCard({data}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ height:400, width:'100%', border:'2px solid green' }} >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <span className="text-[10px] bg-red-800 text-white font-semibold rounded p-1">Hot</span>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={data?.title}
                subheader={data?.timePost}
            />
            <div className="verify px-4 py-1">
                <Rating role={1} value={3} ></Rating>
            </div>

            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary', bgcolor: grey[200],padding: '10px', overflowY:'scroll', height:80}}>
                    {data?.desc}
                </Typography>
                <p className="text-[12px]  font-semibold rounded p-1 mt-2">
                    <strong>Buyer From: </strong> {data?.national_target}
                </p>
                <p className="text-[12px]  font-semibold  p-1">
                   <strong>Payment-Term: </strong>  {data?.payment_term}
                </p>
                <p className="text-[12px]  font-semibold  p-1">
                   <strong>Quantity: </strong> {data?.quantity}
                </p>
                <p className="text-[12px]  font-semibold rounded p-1">
                    <strong>Product type: </strong> <a href="#" className="text-green-800" rel="noopener noreferrer">Banana/Mango/Coconut</a>
                </p>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
        </Card>
    );
}
