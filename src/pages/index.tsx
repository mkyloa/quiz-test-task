import Layout from '@/app/layout';
import type { ReactElement } from 'react';
import { NextPageWithLayout } from '@/pages/_app';
import { QuizStart } from '@/components/Quiz/QuizStart';

const Page: NextPageWithLayout = () => <QuizStart />;

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Page