import React, { ReactElement } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/app/layout';
import { NextPageWithLayout } from '@/pages/_app';
import { QuizModule } from '@/components/Quiz/QuizModule';
import { QuestionSlugs } from '@/components/Quiz/quiz.typedefs';
import { HowDoesItWork } from '@/components/Quiz/HowDoesItWork';
import { Results } from '@/components/Quiz/Results';
import quizConfig from '@/components/Quiz/quiz.config.json'

interface PageProps {
  slug: QuestionSlugs;
}

const QuizPage: NextPageWithLayout<PageProps> = ({ slug }) => {
  switch (slug) {
    case QuestionSlugs.HowDoesItWork:
      return <HowDoesItWork />;
    
      case QuestionSlugs.Results:
      return <Results />;

    default:
      return <QuizModule slug={slug} />;
  }
};

QuizPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = quizConfig.map(({ slug }) => ({ params: { slug } }));

  return {
    paths: slugs,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: QuestionSlugs };

  return {
    props: { slug },
  };
};

export default QuizPage;