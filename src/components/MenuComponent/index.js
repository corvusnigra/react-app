import s from './style.module.css'
import cn from 'classnames'


const Menu = ({openMenu}) => {
    return (
        <div className={cn(s.menuContainer, {[s.active]: openMenu, [s.deactive]: !openMenu})}>
            <div className={cn(s.overlay)}/>
            <div className={cn(s.menuItems)}>
                <ul>
                    <li>
                        <a href="#welcome">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#game">
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Menu;
