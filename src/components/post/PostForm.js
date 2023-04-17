// import React, {useState,useEffect} from "react";
import * as React from 'react';
// import ReactDOM from "react-dom";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { Button, InputAdornment, OutlinedInput } from '@mui/material';



function PostForm(props){
    const {userId,userName} = props;
    const [text,setText] = React.useState("");
    const [title,setTitle] = React.useState("");

    const savePost = () => {
        fetch("/posts",
        {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                title: title,
                userId: userId,
                text: text,
            }),
        })
            .then((res) => res.json())
            .catch((err) => console.log("error"))
    }

    
    const handleSubmit = () => {
        savePost();
        console.log(text,title);
    };

    const handleText = (value) => {
        setText(value);
    }

    const handleTitle = (value) => {
        setTitle(value);
    }

    return(
        <div className="postContainer">
            <Card sx={{ maxWidth: 1200, margin: 2}}>
                <CardHeader
                    avatar={
                    <Link  style={{textDecoration: "none", color: "white"}} to={{pathname : '/users/' + userId}}>
                        <Avatar sx={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'}} aria-label="recipe">
                            {userName.charAt(0).toUpperCase()}
                        </Avatar>
                    </Link>
                    }
                    
                    title={<OutlinedInput 
                    id="outlined-adornment-amount"
                    multiline
                    placeholder='Title'
                    inputProps={{maxLength : 40}}
                    fullWidth
                    onChange={ (i) => handleTitle(i.target.value)}
                    >
                    </OutlinedInput>}
                    subheader={userName}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    {<OutlinedInput 
                    id="outlined-adornment-amount"
                    multiline
                    placeholder='Text'
                    inputProps={{maxLength : 240}}
                    fullWidth
                    onChange={ (i) => handleText(i.target.value)}
                    endAdornment={
                        <InputAdornment position='end'>
                            <Button 
                            variant = "contained"
                            style = {{background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                            color: 'white'}}
                            onClick = {handleSubmit}
                            >
                                Save
                            </Button>
                        </InputAdornment>
                    }
                    >
                    </OutlinedInput>}
                    </Typography>
                </CardContent>
                
            </Card>
        </div>
    )
}

export default PostForm;