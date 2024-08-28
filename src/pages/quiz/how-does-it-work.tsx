import React, { ReactElement } from 'react';
import Layout from '@/app/layout';
import { HowDoesItWork } from '@/components/Quiz/HowDoesItWork';
import { NextPageWithLayout } from '@/pages/_app';

const HowDoesItWorkPage: NextPageWithLayout = () => (
  <HowDoesItWork />
);

HowDoesItWorkPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default HowDoesItWorkPage;
