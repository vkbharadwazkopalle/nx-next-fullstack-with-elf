
import { useRouter } from 'next/router';

import styles from './index.module.scss';
import { Layout } from '@platform/ui';
import { GetStaticProps } from 'next';
import OpenEstimatesContainer from '../modules/multi-verse/containers/open-estimates-container/open-estimates-container';

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
      <OpenEstimatesContainer />
    </>
  );
}

// export const getStaticProps: GetStaticProps<Props> = async ({locale}) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ['layout'], null, ['en', 'no'])),
//   },
// })

export default Index;
