import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'My Portfolio',
    slug: 'my-portfolio', // Unique and descriptive slug
    banner: 'https://example.com/banner.png',
    website: 'https://example.com',
    description: 'A portfolio project showcasing my work.',
    shortDescription: 'A portfolio project.',
    repository: 'https://github.com/username/portfolio',
    stack: [], // Add related tech stack
    dimensions: defaultDimensions,
    screenshots: [
      'https://example.com/screenshot1.png',
      'https://example.com/screenshot2.png',
    ],
    deployment: {
      web: 'https://example.com',
      android: '',
      ios: '',
    },
    subProjects: [
      {
        title: 'Subproject 1',
        description: 'Details about Subproject 1.',
        repository: 'https://github.com/username/subproject1',
        deployment: {
          web: '',
          android: '',
          ios: '',
        },
      },
    ],
  },
];
