import Menu from "../MenuComponent";
import NavBar from "../NavBarComponent";
import {useState} from 'react'

const MenuHeader = ({bgActive}) => {
    const [isOpen, setOpen] = useState(null);
    const handleClickHamburg = () => {
        setOpen(prevState => !prevState)
    };
    const handleMenuItemClick = () => {
        setOpen(prevState => !prevState)
    };
    return (
        <>
            <Menu isOpen={isOpen} onMenuItemClick={handleMenuItemClick}/>
            <NavBar isOpen={isOpen} bgActive={bgActive} onClickHamburg={handleClickHamburg}/>
        </>

    )
};

export default MenuHeader;

