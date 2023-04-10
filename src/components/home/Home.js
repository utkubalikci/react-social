import React, {useState, useEffect} from "react";
import Post from '../post/Post';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


function Home(){

    const [error,setError] = useState(null);
    const [isLoaded, setIsLoaded ] = useState(null);
    const [postList, setPostList ] = useState([]);

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


            <div className="container">
                {postList.map(post => (
                    <React.Fragment>
                        <CssBaseline />
                        <Container maxWidth="sm">
                            <Post title={post.title} text={post.text}></Post>
                        </Container>
                    </React.Fragment>
                    
                ))}
            </div>
                
        );
    }




}

export default Home;