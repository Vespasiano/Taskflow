import { Task } from "@/types/core/task";

export const mockTasks: Task[] = [
  {
    id: 1,
    title: 'Learn Next.js',
    description: 'Complete the official Next.js tutorial',
    completed: false,
    subtasks: [
      {
        id: 101,
        title: 'Set up development environment',
        description: 'Can you run tests locally?',
        completed: true,
        subtasks: [
          {
            id: 1011,
            title: 'Install Node.js and npm',
            completed: true
          },
          {
            id: 1012,
            title: 'Create a new Next.js project',
            completed: true
          }
        ]
      },
      {
        id: 102,
        title: 'Create first Next.js page',
        description: 'Name it something interesting!',
        completed: false
      }
    ]
  },
  {
    id: 2,
    title: 'Build a task manager',
    description: 'Create a React-based task management application',
    completed: false,
    subtasks: [
      {
        id: 201,
        title: 'Design UI components',
        completed: true
      },
      {
        id: 202,
        title: 'Implement state management',
        completed: false
      }
    ]
  },
  {
    id: 3,
    title: 'Deploy to production',
    description: 'Deploy the application to Vercel',
    completed: true
  },
  {
    id: 4,
    title: 'Write unit tests',
    description: 'Add Jest and React Testing Library to the project',
    completed: false
  },
  {
    id: 5,
    title: 'Optimize performance',
    description: 'Implement code splitting and lazy loading',
    completed: false,
    subtasks: [
      {
        id: 501,
        title: 'Analyze bundle size',
        completed: false
      },
      {
        id: 502,
        title: 'Implement React.memo where needed',
        completed: false
      }
    ]
  },
  {
    id: 6,
    title: 'Add authentication',
    description: 'Integrate NextAuth.js for user authentication',
    completed: false
  },
  {
    id: 7,
    title: 'Create API endpoints',
    description: 'Build RESTful APIs for task operations',
    completed: true,
    subtasks: [
      {
        id: 701,
        title: 'Design API schema',
        completed: true
      },
      {
        id: 702,
        title: 'Implement CRUD operations',
        completed: true
      }
    ]
  },
  {
    id: 8,
    title: 'Set up database',
    description: 'Configure PostgreSQL with Prisma ORM',
    completed: false
  },
  {
    id: 9,
    title: 'Implement drag and drop',
    description: 'Add ability to reorder tasks with drag and drop',
    completed: false
  },
  {
    id: 10,
    title: 'Create dark mode',
    description: 'Add dark/light theme toggle functionality',
    completed: true
  }
];