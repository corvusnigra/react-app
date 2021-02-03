import s from './style.module.css'
import {useState} from 'react'
import cn from 'classnames'


const NavBar = ({isOpen, bgActive = false, onClickHamburg}) => {
    return (
        <nav id={s.navbar} className={cn(
            {[s.bgActive]: bgActive}
        )}>
            <div className={cn(s.navWrapper)}>
                <p className={cn(s.brand)}>
                    LOGO
                </p>
                <a  onClick={onClickHamburg}
                    className={cn(s.menuButton , {[s.active]: isOpen})}>
                    <span/>
                </a>
            </div>
        </nav>
    )
};

export default NavBar;

