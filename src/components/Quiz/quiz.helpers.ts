
import { QuizQuestion, ReplacementValues } from '@/components/Quiz/quiz.typedefs';
import quizConfig from '@/components/Quiz/quiz.config.json'
import store from '@/store/store';

export const getQuestionUrl = (slug: string) => {

  return `/quiz/${slug}`;
};

export const getAnswer = (slug: string) => {
  const { answers } = store.getState().quizReducer;

  return answers[slug] || null;
};

export const getGender = () => {
  const gender = getAnswer('gender');

  return gender || '';
};

const getIsSingle = () => {
  const answer = getAnswer('relationship-status');

  return answer === 'Single';
};

export const getIsParent = () => {
  const isParent = getAnswer('parent') === 'Yes';
  const isSingleParent = getAnswer('single-parent') === 'Yes';

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
    quizConfig,
    replacements,
  );
}

export const getQuestion = (slug: string): QuizQuestion => {
  const quizConfig = getQuizConfig();
  const question = quizConfig.find(q => q.slug === slug);

  if (!question) {
    throw new Error(`Question with slug "${slug}" not found`);
  };

  return question;
};

