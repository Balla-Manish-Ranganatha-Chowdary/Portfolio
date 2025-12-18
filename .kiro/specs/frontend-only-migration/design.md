# Design Document

## Overview

This design document outlines the architecture and implementation strategy for migrating a full-stack Next.js photography portfolio to a frontend-only static site. The migration eliminates all backend dependencies (APIs, database, AWS services, authentication) while preserving the complete user experience, visual design, and functionality. The resulting application will be a fully static site deployable to platforms like GitHub Pages, Vercel, or Netlify, with all data sourced from local JSON files.

The key architectural shift is from dynamic server-side data fetching to static data imports at build time, transforming the application from a server-rendered application to a statically generated site.

## Architecture

### Current Architecture (To Be Removed)

- **Backend Layer**: tRPC API routes, Better Auth authentication, Drizzle ORM database access
- **Data Layer**: PostgreSQL database with photo management, user authentication, EXIF data
- **Storage Layer**: S3-compatible storage for image uploads
- **Server Components**: Server-side rendering with dynamic data fetching

### Target Architecture (Frontend-Only)

- **Static Generation**: Next.js static site generation (SSG) for all routes
- **Data Layer**: Local JSON files in `/src/data` directory
- **Asset Storage**: Static files in `/public` directory
- **Client Components**: React components with static data imports
- **Build Process**: Pre-render all pages at build time with no runtime server dependencies

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                   Static Build Process                   │
│                                                           │
│  ┌──────────────┐      ┌──────────────┐                │
│  │ JSON Data    │─────▶│  Next.js     │                │
│  │ Files        │      │  Build       │                │
│  └──────────────┘      └──────┬───────┘                │
│                               │                          │
│  ┌──────────────┐             │                         │
│  │ Public       │─────────────┤                         │
│  │ Assets       │             │                         │
│  └──────────────┘             ▼                         │
│                        ┌──────────────┐                 │
│                        │  Static HTML │                 │
│                        │  CSS, JS     │                 │
│                        └──────┬───────┘                 │
└───────────────────────────────┼─────────────────────────┘
                                │
                                ▼
                        ┌──────────────┐
                        │   CDN/       │
                        │   Static     │
                        │   Hosting    │
                        └──────────────┘
```

## Components and Interfaces

### Data Structure Interfaces

```typescript
// src/types/data.ts

export interface DeveloperProfile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  social: {
    github: string;
    email: string;
    location: string;
  };
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface PortfolioData {
  profile: DeveloperProfile;
  projects: Project[];
  skills: Skill[];
}
```

### Data Loading Module

```typescript
// src/lib/data-loader.ts

import profileData from '@/data/profile.json';
import projectsData from '@/data/projects.json';
import skillsData from '@/data/skills.json';
import type { DeveloperProfile, Project, Skill } from '@/types/data';

export function getProfile(): DeveloperProfile {
  return profileData;
}

export function getProjects(): Project[] {
  return projectsData;
}

export function getSkills(): Skill[] {
  return skillsData;
}
```

### Page Components

All page components will be converted to use static data imports:

1. **Home Page** (`src/app/(home)/page.tsx`)
   - Imports profile and skills data
   - Renders ProfileCard and SkillsShowcase with static data
   - Maintains existing layout and animations

2. **Projects Page** (`src/app/(home)/projects/page.tsx`)
   - Imports projects data
   - Renders project grid with static data
   - Preserves hover effects and card styling

3. **Skills Page** (`src/app/(home)/skills/page.tsx`)
   - Imports skills data
   - Renders skill cards with icons
   - Maintains animation sequences

4. **Contact Page** (`src/app/(home)/contact/page.tsx`)
   - Uses mailto links for email contact
   - Displays static social links
   - Includes resume download button

## Data Models

### Profile Data Model

**File**: `src/data/profile.json`

```json
{
  "name": "Balla Manish Ranganatha Chowdary",
  "title": "AI Full Stack Developer",
  "bio": "AI Full Stack Developer creating digital experiences that respect humans and scale with clarity. Accessibility is my north star.",
  "avatar": "/avatar.jpg",
  "social": {
    "github": "Balla-Manish-Ranganatha-Chowdary",
    "email": "manishballa00@gmail.com",
    "location": "Banglore"
  }
}
```

### Projects Data Model

**File**: `src/data/projects.json`

```json
[
  {
    "id": 1,
    "title": "AI-Powered Code Review Assistant",
    "description": "An intelligent code review platform that uses machine learning to analyze pull requests, detect bugs, suggest optimizations, and enforce coding standards.",
    "image": "/projects/project-1.webp",
    "technologies": ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Docker"],
    "github": "#",
    "demo": "#"
  }
]
```

### Skills Data Model

**File**: `src/data/skills.json`

```json
[
  {
    "name": "React.js",
    "icon": "react"
  },
  {
    "name": "Next.js",
    "icon": "nextjs"
  }
]
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Data file structure consistency

*For any* data file (profile, projects, skills), the JSON structure should match the corresponding TypeScript interface definition, ensuring type safety at build time.

**Validates: Requirements 6.4, 9.5**

### Property 2: Static generation completeness

*For any* route in the application, Next.js should generate a static HTML file at build time without requiring runtime server processing.

**Validates: Requirements 7.6, 10.1, 10.3**

### Property 3: Asset path resolution

*For any* image or asset reference in the data files, the corresponding file should exist in the public directory, preventing broken links.

**Validates: Requirements 3.4, 10.2**

### Property 4: Resume download availability

*For any* page containing a resume download button, clicking the button should successfully download the PDF file from the public directory.

**Validates: Requirements 1.3, 5.4**

### Property 5: Data import independence

*For any* page component, data should be loaded from local JSON files without making network requests or database queries.

**Validates: Requirements 2.2, 3.3, 4.2, 6.1, 6.2, 6.3**

### Property 6: Build environment independence

*For any* build execution, the application should build successfully without requiring environment variables for backend services (database, AWS, authentication).

**Validates: Requirements 6.5, 7.5**

### Property 7: UI preservation

*For any* page in the migrated application, the visual appearance and component structure should match the original application.

**Validates: Requirements 8.1, 8.3, 8.4**

### Property 8: Animation preservation

*For any* animated component, the Framer Motion animations should function identically to the original implementation.

**Validates: Requirements 8.2**

## Error Handling

### Build-Time Validation

1. **JSON Schema Validation**
   - Validate all JSON data files against TypeScript interfaces during build
   - Fail build if data structure doesn't match expected schema
   - Provide clear error messages indicating which file and field is invalid

2. **Asset Existence Checks**
   - Verify all referenced images exist in public directory
   - Check resume PDF exists at expected path
   - Fail build if required assets are missing

3. **Type Safety**
   - Use TypeScript strict mode to catch type mismatches
   - Ensure all data imports are properly typed
   - Validate icon names against available icon set

### Runtime Error Handling

1. **Image Loading Fallbacks**
   - Provide placeholder images for failed loads
   - Use Next.js Image component error handling
   - Log errors to console for debugging

2. **Graceful Degradation**
   - Handle missing data fields with default values
   - Display empty states for missing content
   - Ensure application doesn't crash on data issues

## Testing Strategy

### Unit Testing

Unit tests will verify specific data loading and component rendering behaviors:

1. **Data Loader Tests**
   - Test that `getProfile()` returns valid profile data
   - Test that `getProjects()` returns array of projects
   - Test that `getSkills()` returns array of skills
   - Verify data structure matches TypeScript interfaces

2. **Component Tests**
   - Test ProfileCard renders with provided data
   - Test ProjectCard displays all required fields
   - Test SkillCard renders icon and name correctly
   - Verify resume download button has correct href

3. **Integration Tests**
   - Test page components render without errors
   - Verify data flows correctly from JSON to components
   - Test navigation between pages works correctly

### Property-Based Testing

Property-based tests will verify universal properties across all inputs using **fast-check** library for TypeScript/JavaScript. Each test will run a minimum of 100 iterations.

1. **Data Structure Properties**
   - Property 1: Data file structure consistency
   - Generate random valid JSON structures
   - Verify they can be parsed and match interfaces
   - Tag: **Feature: frontend-only-migration, Property 1: Data file structure consistency**

2. **Asset Reference Properties**
   - Property 3: Asset path resolution
   - Generate random asset paths from data files
   - Verify corresponding files exist in public directory
   - Tag: **Feature: frontend-only-migration, Property 3: Asset path resolution**

3. **Build Output Properties**
   - Property 2: Static generation completeness
   - Verify all routes generate static HTML files
   - Check no server-side code in build output
   - Tag: **Feature: frontend-only-migration, Property 2: Static generation completeness**

4. **Data Import Properties**
   - Property 5: Data import independence
   - Mock network layer to ensure no requests made
   - Verify all data comes from local imports
   - Tag: **Feature: frontend-only-migration, Property 5: Data import independence**

### Testing Framework Configuration

- **Unit Testing**: Jest with React Testing Library
- **Property-Based Testing**: fast-check (minimum 100 iterations per property)
- **Build Testing**: Custom scripts to verify static output
- **E2E Testing**: Playwright for full user flow validation

### Test Organization

```
src/
  __tests__/
    unit/
      data-loader.test.ts
      components/
        ProfileCard.test.tsx
        ProjectCard.test.tsx
    properties/
      data-structure.property.test.ts
      asset-resolution.property.test.ts
      static-generation.property.test.ts
```

Each property-based test must include a comment with the format:
```typescript
// **Feature: frontend-only-migration, Property X: [property name]**
```

This ensures traceability between design properties and test implementation.
