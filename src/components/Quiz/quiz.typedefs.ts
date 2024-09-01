export interface QuizQuestion {
  slug: QuestionSlugs;
  text: string;
  subheader?: string;
  options: QuizOption[];
  next?: QuestionSlugs;
}

export interface QuizOption {
  slug: string;
  text: string;
  next?: QuestionSlugs;
}

export interface ReplacementValues {
  status: string;
  isParent: string;
}

export enum QuestionSlugs {
  Gender = "gender",
  RelationshipStatus= "relationship-status",
  Parent = "parent",
  Happiness = "happiness",
  PartnerTemperament = "partner-temperament",
  PartnerGender = "partner-gender",
  Sex = "sex",
  Goals = "goals",
  AboutUs = "about-us",
  SingleParent = "single-parent",
  SingleHappiness = "single-happiness",
  Overthink = "overthink",
  HowDoesItWork = "how-does-it-work",
  MostImportant = "most-important",
  EmotionalControl = "emotional-control",
  Results = "results",
}
