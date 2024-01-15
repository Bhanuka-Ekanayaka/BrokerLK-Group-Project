const MenuBar = ({navRef}) => {
    return ( 
        <div className="menubar" ref={navRef}>
            <ul>
                <li><a href='/login'>Sign-In</a></li>
            </ul>
            <ul>
                <li><a href='/'>Post-Add</a></li>
            </ul>
            <ul>
                <li><a href='/'>Home</a></li>
            </ul>
            <ul>
                <li><a href='/packages'>Packages</a></li>
            </ul>
            <ul>
                <li><a href='/about'>About Us</a></li>
            </ul>
        </div>
     );
}
 
export default MenuBar;