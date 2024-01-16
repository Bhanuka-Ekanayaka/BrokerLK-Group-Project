import { MdAssignmentInd} from "react-icons/md";
import { IoMdHome,IoIosAlert } from "react-icons/io";
import { LuPackageOpen } from "react-icons/lu";



const MenuBar = ({ navRef }) => {
    return (
        <div className="menubar" ref={navRef}>
            <ul>
                <li>
                    <div className="menubar-Signin">
                        <a href='/' id="logo_imge"><MdAssignmentInd></MdAssignmentInd></a>
                        <a href='/login'>Sign-In</a>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div className="menubar_content">
                        <a href='/' id="logo_imge"><IoMdHome></IoMdHome></a>
                        <a href='/' >Home</a>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div className="menubar_content">
                        <a href='/' id="logo_imge"><LuPackageOpen></LuPackageOpen></a>
                        <a href='/packages' >Packages</a>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div className="menubar_content">
                        <a href='/' id="logo_imge"><IoIosAlert></IoIosAlert></a>
                        <a href='/about' >About</a>
                    </div>
                </li>
            </ul>
          
        </div>
    );
}

export default MenuBar;