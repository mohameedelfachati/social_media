import {useContext} from 'react';
import {Context} from '../../../Providers/ContextProvider';
import {LoginPage} from '../Login/LoginPage'
export const Dashboard = () => {

    const { connected } = useContext(Context) ;

    return <div>{
        !connected ? <LoginPage /> : 'not connected'
        }</div>
}