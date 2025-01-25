import { Colors } from './colors';

export enum Stack {
  // Languages
  typescript,
  javascript,
  python,
  java,

  // Frontend
  reactjs,
  nextjs,

  // Backend
  springboot,
  springcloud,
  microservices,

  // Cloud
  aws,

  // Messaging
  nats,
  kafka,
  rabbitmq,

  // Databases
  sql,
  mysql,
  postgres,
  redis,

  // Tools
  docker,
  git,
  github,
}

export const WorkStack = [
  Stack.java,
  Stack.javascript,
  Stack.typescript,
  Stack.python,
  Stack.reactjs,
  Stack.springboot,
  Stack.springcloud,
  Stack.microservices,
  Stack.rabbitmq,
  Stack.mysql,
  Stack.postgres,
  Stack.redis,
  Stack.aws,
  Stack.docker,
  Stack.git,
  Stack.github,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.java]: {
    value: 'Java',
    color: Colors.java,
  },
  [Stack.reactjs]: {
    value: 'ReactJS',
    color: Colors.react,
  },
  [Stack.nextjs]: {
    value: 'Next.js',
    color: Colors.nextjs,
  },
  [Stack.springboot]: {
    value: 'Spring Boot',
    color: Colors.springboot,
  },
  [Stack.springcloud]: {
    value: 'Spring Cloud',
    color: Colors.springcloud,
  },
  [Stack.microservices]: {
    value: 'Microservices',
    color: Colors.microservices,
  },
  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },
  [Stack.nats]: {
    value: 'NATS',
    color: Colors.nats,
  },
  [Stack.kafka]: {
    value: 'Kafka',
    color: Colors.kafka,
  },
  [Stack.rabbitmq]: {
    value: 'RabbitMQ',
    color: Colors.rabbitmq,
  },
  [Stack.sql]: {
    value: 'SQL',
    color: Colors.sql,
  },
  [Stack.mysql]: {
    value: 'MySQL',
    color: Colors.mysql,
  },
  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: Colors.redis,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.git]: {
    value: 'Git',
    color: Colors.git,
  },
  [Stack.github]: {
    value: 'GitHub',
    color: Colors.github,
  },
};
