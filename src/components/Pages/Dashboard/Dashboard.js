import {useContext} from 'react';
import {Context} from '../../../Providers/ContextProvider';
import Register from '../Login/LoginPage';
import {App} from "../App/App";
export const Dashboard = () => {

    const { connected } = useContext(Context) ;

    return <div>{
        !connected ? <Register /> : <App />
        }</div>
}