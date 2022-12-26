import styles from './data-sheets-container.module.scss';

/* eslint-disable-next-line */
export interface DataSheetsContainerProps {}

export function DataSheetsContainer(props: DataSheetsContainerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DataSheetsContainer!</h1>
    </div>
  );
}

export default DataSheetsContainer;
