import Menu from "../MenuComponent";
import NavBar from "../NavBarComponent";
import {useState} from 'react'

const MenuHeader = () => {
    const [isActive, setActive] = useState(false);
    const handleMenuClick = (isActive) => {
        setActive(isActive)
    };
    return (
        <>
            <NavBar onMenuClick={handleMenuClick}/>
            <Menu openMenu={isActive}/>
        </>

    )
};

export default MenuHeader;

