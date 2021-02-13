import { Avatar } from '@material-ui/core';
import React , { useState} from 'react'
import   "./MessageSender.css";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import axios from "axios";
const API_URL = "https://facebookclone11.herokuapp.com/api/post";
function MessageSender({
    name,
    imgUrl
}) {
    const [message, setMessage] = useState("");
    const [image, setImage] = useState("");
    const poste= ()=>{
        return axios.post(API_URL,{
            imageUrl: image,
            message: message 
        }).then(()=>console.log(image)).catch((err)=>console.log(err));
       
    }
    return (
        <div className="messageSender">
          <div className="messageSender__top">
              <Avatar src={imgUrl} />
              <form>
              <input
               onChange ={(e)=> setMessage(e.target.value)}
               value={message} 
               type="text"
               placeholder={`What's on your mind ${name}`} 
               className="messageSender__input" />
              <input 
               value={image}
               onChange={(e)=>setImage(e.target.value)}
               placeholder={'image url'}
               className="messageSender__input" />

              <button onClick={poste} >Hidden submit</button>
              </form>
          </div>
          <div className="messageSender__bottom">
              <div className="messageSender__option">
                  <PhotoLibraryIcon style={{color: "green"}}/>
                  <h3>Photo/Video</h3>
              </div>
              <div className="messageSender__option">
                  <InsertEmoticonIcon style={{color: "orange"}}/>
                  <h3>Feeling/Activity</h3>
              </div>
          </div> 
        </div>
    )
}

export default MessageSender;
