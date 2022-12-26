import styles from './data-table.module.scss';
import { Datasheets } from '@platform/utils';

export function DataTable(props: Datasheets.Grid) {
  return (
    <div className={styles['container']}>
      <table>
        <thead>
          This is header
        </thead>
        <tbody>
          this is body
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
