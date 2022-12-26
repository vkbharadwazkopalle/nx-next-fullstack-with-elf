import { FC } from 'react';

import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';

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
          <main>
            <Paper elevation={3}>
              <Box sx={{ width: '100%' }}>
                {children}
              </Box>
            </Paper>
          </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
