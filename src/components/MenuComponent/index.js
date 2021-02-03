import s from './style.module.css'
import cn from 'classnames'
import {Link} from 'react-router-dom'

const MENU = [
    {
        title: 'HOME',
        to: '/'
    },
    {
        title: 'GAME',
        to: '/game'
    },
    {
        title: 'ABOUT',
        to: '/about'
    },
    {
        title: 'CONTACT',
        to: '/contact'
    },
];

const Menu = ({isOpen, onMenuItemClick}) => {
    const handleClick = ()=> {
      onMenuItemClick()
    };
    return (
        <div className={cn(s.menuContainer, {[s.active]: isOpen === true, [s.deactive]: isOpen === false})}>
            <div className={cn(s.overlay)}/>
            <div className={cn(s.menuItems)}>
                <ul>
                    {
                        MENU.map(({title, to}, index) =>
                            <li key={index}>
                                <Link
                                    onClick={handleClick}
                                    to={to}>
                                    {title}
                                </Link>
                            </li>)
                    }
                </ul>
            </div>
        </div>
    )
};

export default Menu;

