import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoBag, IoCog, IoHappy } from 'react-icons/io5';
import sidemenu from './sidemenu.module.css';

import ScrollObserver from '../utils/ScrollObserver.js';


function SideMenu({ show, categories }) {
    return (
        <div className={`${sidemenu.sideMenu} ${show ? sidemenu.show : ''}`}>
            <div className={sidemenu.sideMenuContainer}>
            <ul className={sidemenu.sideMenuOptions}>
                    <li className={sidemenu.sideMenuOption}><IoBag /></li>
                    <li className={sidemenu.sideMenuOption}><IoHappy /></li>
                    <li className={sidemenu.sideMenuOption}><IoCog /></li>
                </ul>

                <h1>Categories</h1>
                <div className={sidemenu.sideMenuCategories}>
                    {categories.map(category => (
                        <Link key={category.id} className={`${sidemenu.sideMenuItem} scrollHidden`} href={category.website}>
                            <h2>{category.name}</h2>
                        </Link>
                    ))}
                </div>
            </div>

            <div className={sidemenu.sideMenuVigentte}></div>
        </div>
    )
}

export default SideMenu;