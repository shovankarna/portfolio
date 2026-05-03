export interface Position {
  title: string;
  badge?: string;
  range: string;
  description: string[];
}

export interface Experience {
  company: string;
  role?: string;
  location?: string;
  url?: string;
  positions: Position[];
  stack?: string[];
}

export const experienceData: Experience[] = [
  {
    company: 'FedEx',
    role: 'Full Stack Developer',
    location: 'Hyderabad, India',
    url: '',
    stack: [
      'Spring Boot',
      'Jenkins',
      'GitHub Actions',
      'Splunk',
      'AppDynamics',
      'Dynatrace',
      'Cloud Infrastructure',
    ],
    positions: [
      {
        title: 'Full Stack Developer',
        badge: 'Current',
        range: 'Oct 2025 – Present',
        description: [
          'Core member of the **Shipment Foundational Systems** team — owning microservices processing shipment modification workflows at a global scale across **100K+ daily transactions**, peaking at millions of requests.',
          'Implemented business logic for an **international expansion featureset** across 5 microservices, coordinating cross-team API contracts and maintaining strict backward compatibility.',
          'Refactored 3 legacy service modules, navigating zero-downtime constraints and deep service interdependencies in a live, high-throughput system processing millions of shipments.',
          'Debugged **15+ production incidents** using Splunk, AppDynamics & Dynatrace, performing root cause analysis across distributed traces to reduce repeat failures under global SLA obligations.',
          'Authored and maintained CI/CD pipelines (Jenkins & GitHub Actions), supporting continuous delivery with **zero tolerance for deployment failures**.',
          'Worked on **Cloud infrastructure** to deploy, configure, and manage services across multiple hosted environments.',
        ],
      },
    ],
  },
  {
    company: 'Centre for Development of Advanced Computing (C-DAC)',
    role: 'Project Engineer (FullStack Dev)',
    location: 'Hyderabad, India',
    url: 'https://cdac.in',
    stack: [
      'Spring Boot',
      'Spring Cloud Gateway',
      'WebFlux',
      'Keycloak',
      'RabbitMQ',
      'Redis',
      'MinIO',
      'PostgreSQL',
      'MySQL',
      'Docker Swarm',
      'NGINX',
      'AWS',
      'React.js',
    ],
    positions: [
      {
        title: 'Project Associate → Project Engineer',
        badge: 'Full Stack Engineer',
        range: 'May 2023 – Oct 2025',
        description: [
          'Owned end-to-end backend development for a national-scale accreditation platform and SaaS LMS, sustaining **99.5%+ uptime** under concurrent load.',
          'Architected a **centralised API Gateway** (Spring Cloud Gateway) with Keycloak OAuth2/JWT and Redis-based token caching, cutting authentication latency by **~35%**.',
          'Built a distributed file management service (Spring Boot + MinIO on multi-node Docker Swarm), delivering S3-compatible storage for **~12 TB** of files on-premise.',
          'Engineered RabbitMQ async pipelines and Redis caching strategies, increasing throughput by **~45%** and cutting average API response time from **~400ms → ~180ms**.',
          'Optimised PostgreSQL and MySQL via composite indexing, query rewriting, and read-replica setup, reducing P95 query latency by **~50%**.',
          'Scaled stateless microservices horizontally via **Docker Swarm**, handling **3–4× traffic spikes** with zero-downtime rolling deployments across on-prem and AWS (EC2/S3).',
          'Built modular SPAs using **React.lazy, Suspense, and code-splitting**, standardising UI patterns with a shared component library.',
          'Reduced initial bundle size by **~35%** via Webpack optimisation and tree-shaking, improving First Contentful Paint and TTI under low-bandwidth conditions.',
        ],
      },
    ],
  },
];
