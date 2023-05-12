import { GiHamburgerMenu } from 'react-icons/gi';
import { IoBag, IoCog, IoHappy } from 'react-icons/io5';
import header from './header.module.css';


function Header({ switchSideMenu }) {
    return (
        <header className={header.headerContainer}>
            <div className={header.headerMenu}>
                <GiHamburgerMenu
                    className={header.headerIcon}
                    onClick={switchSideMenu} /> 
                <h1 className={header.headerTitle}>Kimu Shop</h1>
            </div>

            <ul className={header.headerList}>
                <li className={header.headerListItem}><IoBag /></li>
                <li className={header.headerListItem}><IoHappy /></li>
                <li className={header.headerListItem}><IoCog /></li>
            </ul>
        </header>
    )
}

export default Header;