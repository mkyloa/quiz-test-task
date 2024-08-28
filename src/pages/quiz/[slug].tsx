import React, { ReactElement } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { QuizModule } from '@/components/Quiz/QuizModule';
import Layout from '@/app/layout';
import { NextPageWithLayout } from '@/pages/_app';

const QuizPage: NextPageWithLayout = () => (
  <QuizModule />
);

QuizPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { slug: 'gender' } },
    { params: { slug: 'relationship-status' } },
    { params: { slug: 'parent' } },
    { params: { slug: 'happiness' } },
    { params: { slug: 'partner-temperament' } },
    { params: { slug: 'partner-gender' } },
    { params: { slug: 'sex' } },
    { params: { slug: 'goals' } },
    { params: { slug: 'about-us' } },
    { params: { slug: 'single-parent' } },
    { params: { slug: 'single-happiness' } },
    { params: { slug: 'overthink' } },
    { params: { slug: 'most-important' } },
    { params: { slug: 'emotional-control' } },
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => ({ props: {}, });

export default QuizPage;