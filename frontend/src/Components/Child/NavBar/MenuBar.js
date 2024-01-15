const MenuBar = ({navRef}) => {
    return ( 
        <div className="menubar" ref={navRef}>
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