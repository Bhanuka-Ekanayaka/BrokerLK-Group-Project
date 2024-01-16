import { MdDashboard,MdManageAccounts} from "react-icons/md";
import { IoMdHome,IoIosAlert,IoIosNotifications } from "react-icons/io";
import { LuPackageOpen } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";


const MenuBar = ({ navRef }) => {
    return (
        <div className="menubar" ref={navRef}>
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
                        <a href='/login' id="logo_imge"><CgProfile></CgProfile></a>
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
                        <a href='/' id="logo_imges"><MdManageAccounts></MdManageAccounts></a>
                        <a href='/' >Profile</a>
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