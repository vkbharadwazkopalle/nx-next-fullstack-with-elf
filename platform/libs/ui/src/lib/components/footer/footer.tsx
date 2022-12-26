import styles from './footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <>
      <footer className='t-center'>
        <p>&copy; All Copyrights Reserved 2022-23.</p>
        <a href="https://github.com/vkbharadwazkopalle/nx-next-fullstack-with-elf">Browse Code</a>
      </footer>
    </>
  );
}

export default Footer;
