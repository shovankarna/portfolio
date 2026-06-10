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
      'Kafka',
      'Jenkins',
      'GitHub Actions',
      'Splunk',
      'AppDynamics',
      'Dynatrace',
      'Cloud',
    ],
    positions: [
      {
        title: 'Full Stack Developer',
        badge: 'Current',
        range: 'Oct 2025 – Present',
        description: [
          'Core member of the **Shipment Foundational Systems** team — owning microservices that process shipment modification workflows (hold requests, address changes, fraud alerts, last-mile routing) at a global scale across **100K+ daily transactions**, peaking at **millions** of requests during peak seasons.',
          'Developed and enhanced backend services for a **major international expansion initiative**, partnering with globally distributed engineering teams to implement business requirements, validate cross-system integrations, and ensure seamless adoption across dependent applications.',
          'Contributed to the **architectural redesign and modernization** of 3 legacy service modules, implementing service-level improvements that reduced technical debt, aligned systems with current microservices standards, and lowered recurring production issues by **~20%**.',
          'Worked on **Kafka-based event-driven workflows**, implementing and maintaining producers and consumers, handling message serialization, retry mechanisms, consumer group configurations, and monitoring message processing across distributed services.',
          'Investigated and resolved **15+ production incidents** using **Splunk, AppDynamics, and Dynatrace**, performing root cause analysis across distributed service traces and implementing preventive fixes for recurring issues impacting business-critical workflows.',
          'Authored and maintained **CI/CD pipelines (Jenkins & GitHub Actions)** — pipeline scripting, build optimisation, and migration from Jenkins to GitHub Actions workflows directly supporting continuous delivery with **zero tolerance for deployment failures**.',
          'Collaborated with platform and DevOps teams to deploy, configure, and maintain microservices across development, staging, and production environments, supporting reliable and repeatable release processes.',
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
      'RabbitMQ',
      'Redis',
      'PostgreSQL',
      'MySQL',
      'Docker',
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
          'End-to-end development for an accreditation platform & SaaS LMS, maintaining **99.5%+ uptime** across a distributed microservices architecture.',
          'Built a centralized **Spring Cloud Gateway** integrating Keycloak (**OAuth2/JWT**), RBAC, rate limiting, and custom reactive filters; implemented Redis-based token caching, reducing authentication latency by **~35%**.',
          'Built a **distributed document management** platform using Spring Boot, MinIO, Docker Swarm, and NGINX, providing version-controlled S3-compatible storage for **~12 TB** of files and replacing a legacy file-server architecture.',
          'Async & Caching: RabbitMQ pipelines + Redis, increased throughput by **~45%** and cut avg API response time from **~400 ms → ~180 ms** under peak load.',
          'Optimized **PostgreSQL and MySQL** through composite indexing, query tuning, connection-pool optimization, and read-replica configurations, reducing P95 query latency by **~30%** under high-concurrency workloads.',
          'Scaling & Deployment: Scaled stateless microservices horizontally via Docker Swarm to handle **3–4× traffic** spikes during peak usage periods; maintained **zero-downtime rolling deployments** across on-prem and **AWS (EC2, S3)** via Docker Swarm + NGINX.',
          'Developed modular React.js applications and a shared component library adopted across LMS modules; reduced frontend bundle size by **~35%** through code-splitting, lazy loading, and Webpack optimization, improving application responsiveness under low-bandwidth conditions.',
        ],
      },
    ],
  },
];
