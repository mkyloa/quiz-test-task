export interface QuizQuestion {
  slug: string;
  text: string;
  subheader?: string;
  options: QuizOption[];
  next?: string;
}

export interface QuizOption {
  slug: string;
  text: string;
  next?: string;
}

export interface ReplacementValues {
  status: string;
  isParent: string;
}
