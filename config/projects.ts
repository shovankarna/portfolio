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
    title: '', // Add project title
    slug: '', // Add slug (unique identifier)
    banner: '', // Add URL for banner image
    website: '', // Add website or live demo link
    description: '', // Add detailed project description
    shortDescription: '', // Add a brief summary (optional)
    repository: null, // Add repository link or leave null
    stack: [], // Add related tech stack from Stack enum
    dimensions: defaultDimensions, // Default or custom dimensions
    screenshots: [], // Add URLs for screenshots
    deployment: {
      web: '', // Add web deployment link or leave empty
      android: '', // Add Android deployment link or leave empty
      ios: '', // Add iOS deployment link or leave empty
    },
    subProjects: [
      // Add sub-projects or leave as an empty array
      {
        title: '', // Add sub-project title
        description: '', // Add description
        repository: null, // Add repository link or leave null
        deployment: {
          web: '', // Add deployment link or leave empty
          android: '', // Add deployment link or leave empty
          ios: '', // Add deployment link or leave empty
        },
      },
    ],
  },
];
