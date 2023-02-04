
import { useRouter } from 'next/router';

import styles from './index.module.scss';
import { Layout } from '@platform/ui';
import { GetStaticProps } from 'next';
import Link from 'next/link';

type Props = {}

export function Index() {

  const router = useRouter();

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <>
      <Link 
        href="/modules/multi-verse/containers/open-estimates-container"
        as="multi-verse/open">
          Open Estimates
        </Link>
    </>
  );
}

// export const getStaticProps: GetStaticProps<Props> = async ({locale}) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ['layout'], null, ['en', 'no'])),
//   },
// })

export default Index;
