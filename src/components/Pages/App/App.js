import './App.css';
import {Header} from '../../Header/Header';
import {Sidebar} from '../../Sidebar/Sidebar';
import {Feed} from '../../Feed/Feed'
export const App = () => {
    const data = {
        name : 'Mohammed',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg'
    }
    return (
    <div className="App">
        <Header name={data.name} imgUrl={data.imgUrl} />
        <div className='App_body'>
            <Sidebar name={data.name} imgUrl={data.imgUrl}/>
            <Feed name={data.name} imgUrl={data.imgUrl}/>
        </div>
    </div>)
}