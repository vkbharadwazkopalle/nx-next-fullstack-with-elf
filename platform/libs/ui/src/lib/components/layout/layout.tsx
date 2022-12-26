import { FC } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './layout.module.scss';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: any
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  
  return (
    <>
      <div className="layout">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
