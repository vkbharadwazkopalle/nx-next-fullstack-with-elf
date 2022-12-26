import React from 'react';

import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Paper from '@mui/material/Paper';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import styles from './open-estimates.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface OpenEstimatesProps {}

export interface LinkTabProps {
  children: any;
}

function LinkTab(props: any) {

  const router = useRouter();

  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        router.push(props.href, 'data-sheets-container', { shallow: false });
      }}
      {...props} />
  );
}

export function OpenEstimatesContainer(props: OpenEstimatesProps) {

  const router = useRouter();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className='open-estimates-container'>
      <Paper elevation={3}>
        <Box sx={{ width: '100%' }}>
          {/* <Link 
            href="/containers/data-sheets-container"
            onClick={() => {
              router.push(
                '/containers/data-sheets-container', 
                'data-sheets-container', 
                { shallow: false }
              );
            }}>Open Data sheets</Link> */}
          <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
            <LinkTab label="Open Data sheets" href="/containers/data-sheets-container" />
          </Tabs>
        </Box>
      </Paper>
    </div>
  );
}

export default OpenEstimatesContainer;
