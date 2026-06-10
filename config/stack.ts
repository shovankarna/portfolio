import { Colors } from './colors';

export enum Stack {
  // Languages
  javascript,
  java,

  // Frontend
  reactjs,

  // Backend & Identity
  springboot,
  springcloud,
  microservices,

  // Cloud & Storage
  aws,

  // Messaging
  kafka,
  rabbitmq,

  // Databases
  sql,
  mysql,
  postgres,
  redis,

  // DevOps & Tools
  docker,
  git,
  github,
  jenkins,
  githubactions,

  // Observability
  splunk,
  appdynamics,
  dynatrace,
}

export const WorkStack = [
  Stack.java,
  Stack.javascript,
  Stack.reactjs,
  Stack.springboot,
  Stack.springcloud,
  Stack.microservices,
  Stack.kafka,
  Stack.rabbitmq,
  Stack.mysql,
  Stack.postgres,
  Stack.redis,
  Stack.aws,
  Stack.docker,
  Stack.jenkins,
  Stack.githubactions,
  Stack.splunk,
  Stack.appdynamics,
  Stack.dynatrace,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.java]: {
    value: 'Java',
    color: Colors.java,
  },
  [Stack.reactjs]: {
    value: 'ReactJS',
    color: Colors.react,
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
  [Stack.jenkins]: {
    value: 'Jenkins',
    color: Colors.jenkins,
  },
  [Stack.githubactions]: {
    value: 'GitHub Actions',
    color: Colors.githubactions,
  },
  [Stack.splunk]: {
    value: 'Splunk',
    color: Colors.splunk,
  },
  [Stack.appdynamics]: {
    value: 'AppDynamics',
    color: Colors.appdynamics,
  },
  [Stack.dynatrace]: {
    value: 'Dynatrace',
    color: Colors.dynatrace,
  },
};
