import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <>
      <header>
        <div className="flex">
          <div className="column left">
            <h1>Full Stack Next App</h1>
          </div>
          <div className="column right">
            <nav></nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
