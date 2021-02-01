import s from './style.module.css'
import {useState} from 'react'
import cn from 'classnames'


const NavBar = ({onMenuClick}) => {
    const [isActive, setActive] = useState(false);
    const handleClick =() => {
        setActive(!isActive);
        onMenuClick && onMenuClick(!isActive)
    };
    return (
        <nav id={s.navbar}>
            <div className={cn(s.navWrapper)}>
                <p className={cn(s.brand)}>
                    LOGO
                </p>
                <a  onClick={handleClick}
                    className={cn(s.menuButton , {[s.active]: isActive})}>
                    <span/>
                </a>
            </div>
        </nav>
    )
};

export default NavBar;

