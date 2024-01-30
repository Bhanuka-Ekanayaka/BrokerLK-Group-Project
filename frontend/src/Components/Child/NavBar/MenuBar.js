import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { IoMdHome, IoIosAlert, IoIosNotifications } from "react-icons/io";
import { LuPackageOpen } from "react-icons/lu";
import Button from 'react-bootstrap/Button';
import img1 from './assets/1.jpg';
import Image from 'react-bootstrap/Image';

const MenuBar = ({ navRef }) => {
    return (
        <div className="menubar" ref={navRef} >
            <ul>
                <li>
                    <div className="menu-icons">
                        <a href='/'><IoMdHome></IoMdHome></a>
                        <a href='/packages'><LuPackageOpen></LuPackageOpen></a>
                        <a href='about'><IoIosAlert></IoIosAlert></a>
                        <a href='/'><IoIosNotifications></IoIosNotifications></a>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div className="menubar-Signin">
                        <a href='/login'><Image src={img1} width={'85px'} height={'75px'} roundedCircle thumbnail/></a>
                    </div>
                    <div className="profile-deatils">
                        <h8>Bhanuka Ekanayaka</h8>
                        <p>epbhanuka98@gmail.com</p>
                        <Button variant="outline-dark">Sign Out</Button>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div className="menubar_content">
                        <a href='/' id="logo_imges"><MdDashboard></MdDashboard></a>
                        <a href='/' >Dashboard</a>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div className="menubar_content">
                        <a href='/profile' id="logo_imges"><MdManageAccounts></MdManageAccounts></a>
                        <a href='/profile' >Profile</a>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div className="menubar_content">
                        <a href='/' id="logo_imges"><IoIosAlert></IoIosAlert></a>
                        <a href='/about' >About</a>
                    </div>
                </li>
            </ul>

        </div>
    );
}

export default MenuBar;