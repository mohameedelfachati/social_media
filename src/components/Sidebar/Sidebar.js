
import React from 'react';
import './SideBar.css'
import SidebareRow from './SidebareRow/SidebareRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';

export const  Sidebar=({
    name,
    imgUrl
})=> {
    return <div className='sidebare'>
        <SidebareRow src={imgUrl} title={name}/>
        <SidebareRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>
        <SidebareRow Icon={EmojiFlagsIcon} title='Pages'/>
        <SidebareRow Icon={PeopleIcon} title='Friends'/>
        <SidebareRow Icon={ChatIcon} title='Messenger'/>
        <SidebareRow Icon={StorefrontIcon} title='MarketPlace'/>
    </div>;
}

