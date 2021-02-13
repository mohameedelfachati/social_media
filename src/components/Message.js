import React from 'react';
import axios from 'axios';
import {useState ,useEffect} from 'react';
import { withRouter } from 'react-router-dom';
const API_URL="https://facebookclone11.herokuapp.com/users";
function Message() {
    const [users, setusers] = useState('');
    useEffect(() => {
        axios.get(API_URL).then((res)=>{console.log(res.data);
            setusers(res.data)})
        .catch((err)=>console.log(err));
        
    }, [])
    
    return (
        <div>
            {users.map(user=>(
                <div key={user.id}>{user}</div>
            ))}
        </div>
    )
}

export default withRouter(Message);