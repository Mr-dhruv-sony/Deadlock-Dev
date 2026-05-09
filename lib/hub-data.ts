export type HubIdea = {
  id: string;
  title: string;
  category: 'AI/ML' | 'Full-Stack' | 'Systems' | 'Tooling';
  summary: string;
  votes: number;
  stage: 'draft' | 'validating' | 'building';
};

export const hubSeedIdeas: HubIdea[] = [
  {
    id: 'placement-interview-simulator',
    title: 'Placement Interview Simulator',
    category: 'AI/ML',
    summary: 'A mock panel engine with feedback analytics and improvement loops.',
    votes: 28,
    stage: 'validating',
  },
  {
    id: 'campus-resource-exchange',
    title: 'Campus Resource Exchange',
    category: 'Full-Stack',
    summary: 'A discovery layer for labs, notes, tools, and peer-contributed resources.',
    votes: 19,
    stage: 'draft',
  },
  {
    id: 'contest-tracker',
    title: 'Contest Tracker',
    category: 'Systems',
    summary: 'Rankings, practice heatmaps, and accountability for competitive programming.',
    votes: 24,
    stage: 'building',
  },
];
