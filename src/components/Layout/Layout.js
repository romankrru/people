import React from 'react';

import styles from './Layout.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = (props) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <div className={styles.LayoutContent}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;