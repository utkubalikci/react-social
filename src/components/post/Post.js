// import React, {useState,useEffect} from "react";
import * as React from 'react';
// import ReactDOM from "react-dom";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(30deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



function Post(props){
    const {id,userId,userName,title,text} = props;

    const [expanded, setExpanded] = React.useState(false);
    const [liked, setLiked] = React.useState(false)

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleLike = () => {
        setLiked(!liked);
    }

    return(
        <div className="postContainer">
            <Card sx={{ maxWidth: 1200, margin: 2}}>
                <CardHeader
                    avatar={
                    <Link  style={{textDecoration: "none", color: "white"}} to={{pathname : '/users/' + userId}}>
                        <Avatar sx={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)' }} aria-label="recipe">
                            {userName.charAt(0).toUpperCase()}
                        </Avatar>
                    </Link>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={title}
                    subheader={userName}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    {text}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton 
                    onClick={handleLike}
                    aria-label="add to favorites">
                        <FavoriteIcon style={liked? {color:"red"} : {color:"black"}}/>
                    </IconButton>
                    
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <CommentIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}

export default Post;