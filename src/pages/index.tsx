import Layout from '@/app/layout';
import type { ReactElement } from 'react';
import { NextPageWithLayout } from '@/pages/_app';
import { Button } from '@/components/common/Button/Button';

const Page: NextPageWithLayout = () => {
  return (
    <div style={{ margin: '30px auto', width: 'fit-content' }}>
      <Button
        text='Start the quiz'
        href='/quiz/gender'
      />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Page