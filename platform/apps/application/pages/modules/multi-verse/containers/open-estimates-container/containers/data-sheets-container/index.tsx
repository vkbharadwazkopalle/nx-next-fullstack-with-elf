import React from 'react';
import styles from './data-sheets-container.module.scss';

/* eslint-disable-next-line */
export interface DataSheetsContainerProps {
  data: any;
}

const data = {
  headers: [
    { order: 1, name: 'Daypart' },
    { order: 2, name: 'Prime' },
    { order: 3, name: 'CF' },
    { order: 4, name: 'Average' },
  ],
  dataSet: [
    {
      id: 1,
      daypart: 'Prime AA',
      isVisible: true,
      nested: [
        {
          id: 1,
          type: 'Premiers',
          isVisible: true,
          data: [
            {
              id: 1,
              name: 'The Ghost hunters',
              prime: 123,
              cf: 0.5,
              average: 120
            }
          ]
        }
      ]
    }
  ]
};

export class DataSheetsContainer extends React.Component {
  constructor(props: DataSheetsContainerProps) {
    super(props);
    this.toggleSection = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  const toggleSection = (attr: boolean) => {
    attr = !attr;
  };

  const dayparts = (it) => {
    let show;
    if(it.isVisible) {
      show = <div className={'p-l-1 ' + it.isVisible + (it.isVisible ? " show" : " hide" )}> 
      {
        it.nested.map((itt) => {
          return (
            <div key={itt.id}>
              <span onClick={() => { itt.isVisible = !itt.isVisible; console.log(itt.isVisible); }}>{itt.type}</span>
              <div className={'p-l-1 ' + (itt.isVisible ? "show" : "hide" )}>
                {
                  itt.data.map(that => {
                    return (
                      <div className='flex' key={that.id}>
                        <div className='column p-1'>{that.name}</div>
                        <div className='column p-1'>{that.prime}</div>
                        <div className='column p-1'>{that.cf}</div>
                        <div className='column p-1'>{that.average}</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
      </div>
    } else {
      show = <div>Nothing found</div>
    }
    console.log({ show });
    return show;

  };

  return (
    <div className='p-l-1'>
      <h1 className=''>Data Sheets Container</h1>
      <div>
        <div>
          <div className='flex'>
            {
              data.headers.map((it) => {
                return <div className='column p-1' key={it.order}>{it.name}</div>
              })
            }
          </div>
        </div>
        <div>
          <div>
            {
              data.dataSet.map((it) => {
                return (
                  <div key={it.id}>
                    <>
                      <span onClick={() => { it.isVisible = !it.isVisible; console.log(it.isVisible) }}>{it.daypart}</span>
                      { dayparts(it) }
                      { it.isVisible }
                    </>
                  </div>
                  
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataSheetsContainer;
