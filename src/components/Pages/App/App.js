import './App.css';
import {Header} from '../../Header/Header';
import {Sidebar} from '../../Sidebar/Sidebar';
import {Feed} from '../../Feed/Feed';
import { useParams } from "react-router-dom";

export const App = () => {
   
    let { name,url } = useParams();
    console.log(name,url)
    let newUrl = url.replaceAll("***","/");
    return (
    <div className="App">
        <Header name={name} imgUrl={newUrl} />
        <div className='App_body'>
            <Sidebar name={name} imgUrl={newUrl}/>
            <Feed name={name} imgUrl={newUrl}/>
        </div>
    </div>)
}