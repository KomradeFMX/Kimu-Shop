import Head from 'next/head';
import { useState } from 'react';
import ScrollObserver from '../utils/ScrollObserver.js';

// Components
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import SideMenu from '../components/SideMenu.jsx';
// CSS
import category from '../styles/category.module.css';


export default function Home({ categories }) {
  const [isSideMenuOpened, setIsSideMenuOpened] = useState(false);

  function switchSideMenu() {
    setIsSideMenuOpened(!isSideMenuOpened);
  }

  return (<>
    <Head>
      <title>Wallpapers | Kimu Shop</title>
    </Head>

    <Header switchSideMenu={switchSideMenu} />
    <SideMenu show={isSideMenuOpened} categories={categories} />

    <div className={category.categoryMainContainer}>
        <h1>Wallpapers</h1>
    </div>

    <Footer />

    <ScrollObserver />
  </>)
}
