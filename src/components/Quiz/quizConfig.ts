import { QuizQuestion } from '@/components/Quiz/quiz.typedefs';

export const initQuizConfig = (gender: string, isParent: boolean): QuizQuestion[] => {
  return [
    {
      slug: 'gender',
      text: 'Select your gender:',
      next: 'relationship-status',
      options: [
        {
          slug: 'm',
          text: 'Male',
        },
        {
          slug: 'f',
          text: 'Female',
        },
      ],
    },
    {
      slug: 'relationship-status',
      text: 'So we can get to know you better, tell us about your relationship status.',
      options: [
        {
          slug: 'single',
          text: 'Single',
          next: 'single-parent',
        },
        {
          slug: 'relationship',
          text: 'In a relationship',
          next: 'parent',
        },
      ],
    },
    {
      slug: 'parent',
      text: 'Are you a parent?',
      next: 'happiness',
      options: [
        {
          slug: 'yes',
          text: 'Yes',
        },
        {
          slug: 'no',
          text: 'No',
        },
      ],
    },
    {
      slug: 'happiness',
      text: `${gender}s ${isParent ? 'who have children ' : ''}need a slightly different approach to improve their relationship. Which statement best describes you?`,
      next: 'partner-temperament',
      options: [
        {
          slug: 'very-unhappy',
          text: 'I’m very unhappy with how things are going in my relationship',
        },
        {
          slug: 'unhappy',
          text: 'I’m unhappy with parts of my relationship, but some things are working well',
        },
        {
          slug: 'happy',
          text: 'I’m generally happy in my relationship',
        },
      ],
    },

    {
      slug: 'partner-temperament',
      text: 'Is your partner an introvert or extrovert?',
      next: 'partner-gender',
      options: [
        {
          slug: 'introvert',
          text: 'Introvert',
        },
        {
          slug: 'extrovert',
          text: 'Extrovert',
        },
        {
          slug: 'both',
          text: 'A bit of both',
        },
      ],
    },
    {
      slug: 'partner-gender',
      text: 'What is your partner’s gender?',
      next: 'sex',
      options: [
        {
          slug: 'male',
          text: 'Male',
        },
        {
          slug: 'female',
          text: 'Female',
        },
      ],
    },
    {
      slug: 'sex',
      text: 'Do you agree with the statement below?',
      subheader: '“My partner and I make sex a priority in our relationship”',
      next: 'goals',
      options: [
        {
          slug: 'strongly-agree',
          text: 'Strongly agree',
        },
        {
          slug: 'agree',
          text: 'Agree',
        },
        {
          slug: 'neutral',
          text: 'Neutral',
        },
        {
          slug: 'disagree',
          text: 'Disagree',
        },
        {
          slug: 'strongly-disagree',
          text: 'Strongly disagree',
        },
      ],
    },
    {
      slug: 'goals',
      text: 'When you think about your relationship goals, you feel...?',
      next: 'about-us',
      options: [
        {
          slug: 'optimistic',
          text: 'Optimistic! They are totally doable, with some guidance.',
        },
        {
          slug: 'cautious',
          text: 'Cautious. I’ve struggled before, but I’m hopeful.',
        },
        {
          slug: 'anxoious',
          text: 'I’m feeling a little anxious, honestly.',
        },
      ],
    },
    {
      slug: 'about-us',
      text: 'Where did you hear about us?',
      next: 'results',
      options: [
        {
          slug: 'poster',
          text: 'Poster or Billboard',
        },
        {
          slug: 'friends-family',
          text: 'Friend or Family',
        },
        {
          slug: 'instagram',
          text: 'Instagram',
        },
        {
          slug: 'mail',
          text: 'Direct Mail or Package Insert',
        },
        {
          slug: 'streaming-tv',
          text: 'Online TV or Streaming TV',
        },
        {
          slug: 'tv',
          text: 'TV',
        },
        {
          slug: 'radio',
          text: 'Radio',
        },
        {
          slug: 'search',
          text: 'Search Engine (Google, Bing, etc.)',
        },
        {
          slug: 'newspaper',
          text: 'Newspaper or Magazine',
        },
        {
          slug: 'facebook',
          text: 'Facebook',
        },
        {
          slug: 'blog',
          text: 'Blog Post or Website Review',
        },
        {
          slug: 'podcast',
          text: 'Podcast',
        },
        {
          slug: 'influencer',
          text: 'Influencer',
        },
        {
          slug: 'youtube',
          text: 'Youtube',
        },
        {
          slug: 'pinterest',
          text: 'Pinterest',
        },
        {
          slug: 'other',
          text: 'Other',
        },
      ],
    },
    {
      slug: 'single-parent',
      text: 'Are you a single parent?',
      next: 'single-happiness',
      options: [
        {
          slug: 'yes',
          text: 'Yes',
        },
        {
          slug: 'no',
          text: 'No',
        },
      ],
    },
    {
      slug: 'single-happiness',
      text: `Single ${gender.toLowerCase()}s ${isParent ? 'who have children ' : ''}need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?`,
      next: 'overthink',
      options: [
        {
          slug: 'unhappy',
          text: 'I was unhappy with low things were going in my relationship',
        },
        {
          slug: 'partially',
          text: 'I was unhappy with parts of my relationship, but some thing were working',
        },
        {
          slug: 'happy',
          text: 'I was generally happy with my relationship',
        },
        {
          slug: 'no-relationship',
          text: 'I’ve never been in a relationship',
        },
      ],
    },
    {
      slug: 'overthink',
      text: 'Do you tend to overthink?',
      next: 'how-does-it-work',
      options: [
        {
          slug: 'yes',
          text: 'Yes',
        },
        {
          slug: 'no',
          text: 'No',
        },
      ],
    },
    {
      slug: 'most-important',
      text: 'What is most important to you?',
      next: 'about-us',
      options: [
        {
          slug: 'success',
          text: 'Success',
        },
        {
          slug: 'romance',
          text: 'Romance',
        },
        {
          slug: 'stability',
          text: 'Stability',
        },
        {
          slug: 'freedom',
          text: 'Freedom',
        },
      ],
    },
    {
      slug: 'emotional-control',
      text: 'Is emotional control tricky for you?',
      next: 'about-us',
      options: [
        {
          slug: 'yes',
          text: 'Yes',
        },
        {
          slug: 'sometimes',
          text: 'Sometimes',
        },
        {
          slug: 'rarely',
          text: 'Rarely',
        },
        {
          slug: 'no',
          text: 'Not at all',
        },
      ],
    },
  ];
}
