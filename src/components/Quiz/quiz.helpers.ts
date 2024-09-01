
import { QuestionSlugs, QuizQuestion, ReplacementValues } from '@/components/Quiz/quiz.typedefs';
import quizConfig from '@/components/Quiz/quiz.config.json'
import store from '@/store/store';

export const getQuestionUrl = (slug: QuestionSlugs) => (`/quiz/${slug}`);

export const getAnswer = (slug: QuestionSlugs) => {
  const { answers } = store.getState().quizReducer;

  return answers[slug] || null;
};

export const getGender = () => {
  const gender = getAnswer(QuestionSlugs.Gender);

  return gender || '';
};

const getIsSingle = () => {
  const answer = getAnswer(QuestionSlugs.RelationshipStatus);

  return answer === 'Single';
};

export const getIsParent = () => {
  const isParent = getAnswer(QuestionSlugs.Parent) === 'Yes';
  const isSingleParent = getAnswer(QuestionSlugs.SingleParent) === 'Yes';

  return isParent || isSingleParent;
};

const replaceValues = (jsonString: string, values: ReplacementValues) => {
  return jsonString.replace(/\${(.*?)}/g, (_, key) => (
    values[key as keyof ReplacementValues] || ''
  ));
};

const prepareConfig = (
  config: QuizQuestion[],
  replacements: ReplacementValues
) => {
  const jsonString = JSON.stringify(config);

  const replacedString = replaceValues(jsonString, replacements);
  return JSON.parse(replacedString);
};

export const getQuizConfig = (): QuizQuestion[] => {
  const gender = getGender();
  const isParent = getIsParent();
  const isSingle = getIsSingle();

  const status = isSingle
    ? `Single ${gender.toLowerCase()}`
    : gender;

  const isParentSubstring = isParent
    ? 'who have children '
    : '';

  const replacements = {
    status,
    isParent: isParentSubstring,
  }

  return prepareConfig(
    quizConfig as QuizQuestion[],
    replacements,
  );
}

export const getQuestion = (slug: QuestionSlugs): QuizQuestion => {
  const quizConfig = getQuizConfig();
  const question = quizConfig.find(q => q.slug === slug);

  if (!question) {
    throw new Error(`Question with slug "${slug}" not found`);
  };

  return question;
};

