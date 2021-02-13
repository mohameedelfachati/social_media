import axios from 'axios';
import React,{useState, useEffect} from 'react'
import './Feed.css';
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";


const API_URL='https://facebookclone11.herokuapp.com/api/all'
export const  Feed =({
    name,
    imgUrl
}) => {
    const [listPost, setListPost] = useState([]);
    useEffect(() => {
        axios.get(API_URL).then(res => {
        
            setListPost(res.data)
        })
    }, [])
    return (
        <div className='feed'>
            <MessageSender name={name} imgUrl={imgUrl}/>
            {listPost.map(post => (
                <Post
                key={post.id}
                profilePic={imgUrl}
                image={post.imageUrl}
                username={name}
                timestamp={post.timestamp}
                message={post.message}/>
            ))}
        </div>
    )
}

