import { Outlet } from 'react-router-dom';
import ListEmails from './component/Emails/listEmails';
import Header from './component/Header/header';
import SideBar from './component/Sidebar/SideBar';

const Main = () => {
    return (
        <>
            <Header />
            <SideBar />
            <Outlet />
        </>
    )
}

export default Main;