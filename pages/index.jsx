import Head from 'next/head';
import { useState } from 'react';
import ScrollObserver from '../utils/ScrollObserver.js';

// Components
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import SideMenu from '../components/SideMenu.jsx';
// CSS
import index from '../styles/index.module.css';
// Dependencies

export const getStaticProps = async () => {
  const categoriesData = await import('../database/categories.json');
  const latestData = await import('../database/latest.json');

  const categories = categoriesData.categories;
  const latest = latestData.items;
  return {
    props: {
      categories,
      latest
    }
  };
};


export default function Home({ categories, latest }) {
  const [isSideMenuOpened, setIsSideMenuOpened] = useState(false);

  function switchSideMenu() {
    setIsSideMenuOpened(!isSideMenuOpened);
  }

  return (<>
    <Head>
      <title>Kimu Shop</title>
    </Head>

    <Header switchSideMenu={switchSideMenu} />
    <SideMenu show={isSideMenuOpened} categories={categories} />

    <div className={index.productShowcase}>
      <div className={index.webPresentation}>
        <div className={index.webWelcomeText}>
          <h1 className='scrollHidden'>We are not trying to sell.</h1>
          <h3 className='scrollHidden'>Just show you cute thingys</h3>
          <button className={`${index.goButton} scrollHidden`}><h2>Explore</h2></button>
        </div>
      </div>

      <img className={index.backgroundImage} src='/images/cuteCity.jpg' />
    </div>

    <div className={index.categoryShowcase}>
      {categories.map(category => (
        <div key={category.id} className={index.categoryDisplay}>
          <h2 className={`scrollHidden ${index.categoryDisplayTitle}`}>{category.name}</h2>
          <img className={`${index.backgroundImage} ${index.categoryDisplayImage}`} src={category.image} />
        </div>
      ))}
    </div>

    <div className={index.latestDisplay}>
      <h1 className='scrollHidden'>Latest</h1>
      <div className={index.latestItems}>
        {latest.map(item => (
          <div key={item.id} className='item-compact'>
            <img className='item-compact-image' src={item.image} />
            <div className='item-compact-info'>
              <h2>{item.name}</h2>
              <h3>{item.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>

    <Footer />

    <ScrollObserver />
  </>)
}
