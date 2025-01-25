export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  email = 'email',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '',
  site: 'shovankarna.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/shovan-karna/',
    github: 'https://github.com/shovankarna',
    email: 'karnashovan1@gmail.com',
  },
};
