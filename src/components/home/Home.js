import React, {useState, useEffect} from "react";
import Post from '../post/Post';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { styled } from "@mui/system";
import PostForm from "../post/PostForm";


const useStyles = styled((theme) => ({

    container: {
        display: "flex",
        backgroundColor: "#f0f5ff"
    }

}));


function Home(){

    const [error,setError] = useState(null);
    const [isLoaded, setIsLoaded ] = useState(null);
    const [postList, setPostList ] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        fetch("/posts")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setPostList(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )


    }, [])

    if (error){
        return <div>Error!</div>;
    }
    else if (!isLoaded){
        return <div>Loading...</div>;
    }
    else {
        return(

            <div className={classes.container}>

                {postList.map(post => (
                    // <React.Fragment>
                    //     <CssBaseline />
                    //     <Container maxWidth="md">
                    //         <Post id={post.id} userId={post.userId} userName={post.userName} title={post.title} text={post.text} ></Post>
                    //     </Container>
                    // </React.Fragment>
                    
                    //<PostForm id={post.id} userId={post.userId} userName={post.userName} title={post.title} text={post.text}>
                    
                    <Post id={post.id} userId={post.userId} userName={post.userName} title={post.title} text={post.text} ></Post>
                    
                    ))}
            </div>
                
        );
    }




}

export default Home;