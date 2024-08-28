import React, { ReactElement } from 'react';
import Layout from '@/app/layout';
import store from '@/store/store';
import { NextPageWithLayout } from '@/pages/_app';

const ResultsPage: NextPageWithLayout = () => {
  const { answers } = store.getState().quizReducer;

  return (
    <div style={{ textAlign: 'center' }}>
      Thanks for completing my quiz! Here&apos;s your result:
      {Object.keys(answers).map((a, index) => (<div key={index}>{a}: {answers[a]}</div>))}
    </div>
  );
};

ResultsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default ResultsPage;
