# Implementation Plan

- [x] 1. Create data directory structure and JSON files





  - Create `/src/data` directory
  - Create `profile.json` with developer information matching existing config
  - Create `projects.json` with project listings from existing config
  - Create `skills.json` with technology skills from existing config
  - Add TypeScript interfaces in `/src/types/data.ts` for type safety
  - _Requirements: 6.1, 6.2, 6.3, 9.1, 9.2, 9.3, 9.4_

- [ ]* 1.1 Write property test for data structure consistency
  - **Property 1: Data file structure consistency**
  - **Validates: Requirements 9.4**

- [x] 2. Add resume PDF to public directory




  - Place resume PDF file at `/public/resume.pdf`
  - Verify file is accessible via static path
  - _Requirements: 1.3, 5.4_

- [x] 3. Create data loader utility module





  - Implement `getProfile()` function to load profile data
  - Implement `getProjects()` function to load projects data
  - Implement `getSkills()` function to load skills data
  - Add proper TypeScript typing for all functions
  - _Requirements: 6.1, 6.2, 6.3, 9.5_

- [ ]* 3.1 Write unit tests for data loader functions
  - Test `getProfile()` returns valid profile data
  - Test `getProjects()` returns array of projects
  - Test `getSkills()` returns array of skills
  - Verify data structure matches TypeScript interfaces
  - _Requirements: 6.1, 6.2, 6.3_

- [ ]* 3.2 Write property test for data import independence
  - **Property 5: Data import independence**
  - **Validates: Requirements 2.2, 3.3, 4.2, 6.1, 6.2, 6.3**

- [x] 4. Update home page to use local data




  - Replace config imports with data loader imports
  - Update ProfileCard component to accept data props
  - Update SkillsShowcase component to accept data props
  - Ensure static generation with `generateStaticParams` if needed
  - _Requirements: 1.1, 1.5, 2.1, 2.2_

- [x] 5. Add resume download button to hero section





  - Add download button component with link to `/resume.pdf`
  - Style button to match existing design system
  - Ensure button is prominently displayed in hero section
  - _Requirements: 1.2, 1.3_

- [ ]* 5.1 Write property test for resume download availability
  - **Property 4: Resume download availability**
  - **Validates: Requirements 1.3**

- [x] 6. Update projects page to use local data





  - Replace config imports with data loader imports
  - Ensure all project fields render correctly (title, description, image, technologies, links)
  - Verify images load from public directory
  - Maintain existing card layout and styling
  - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [ ]* 6.1 Write property test for asset path resolution
  - **Property 3: Asset path resolution**
  - **Validates: Requirements 3.4**

- [ ]* 6.2 Write unit tests for project card rendering
  - Test ProjectCard displays all required fields
  - Verify image paths are correct
  - Test technology tags render properly
  - _Requirements: 3.2_

- [x] 7. Update skills page to use local data





  - Replace config imports with data loader imports
  - Ensure skill names and icons render correctly
  - Maintain existing grid layout and animations
  - _Requirements: 4.1, 4.2_

- [ ]* 7.1 Write unit tests for skill card rendering
  - Test SkillCard renders icon and name correctly
  - Verify icon mapping works for all skills
  - _Requirements: 4.2_

- [x] 8. Update contact page with resume download CTA




  - Add resume download button to contact page
  - Ensure mailto links work correctly
  - Verify social links load from local data
  - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [x] 9. Remove backend dependencies from package.json





  - Remove tRPC dependencies
  - Remove Drizzle ORM and database drivers
  - Remove Better Auth authentication packages
  - Remove AWS SDK and S3 client packages
  - Remove any server-only dependencies
  - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [x] 10. Delete backend code and API routes





  - Delete `/src/app/api` directory if it exists
  - Remove database schema files
  - Remove authentication configuration files
  - Remove AWS/S3 configuration files
  - Delete `.env.example` file
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [x] 11. Update Next.js configuration for static export





  - Configure `next.config.ts` for static site generation
  - Remove any server-side configuration
  - Ensure all routes use static generation
  - Configure image optimization for static export
  - _Requirements: 7.6, 10.1, 10.3_

- [ ]* 11.1 Write property test for static generation completeness
  - **Property 2: Static generation completeness**
  - **Validates: Requirements 7.6, 10.1, 10.3**

- [ ]* 11.2 Write property test for build environment independence
  - **Property 6: Build environment independence**
  - **Validates: Requirements 6.5, 7.5**

- [x] 12. Update README with static deployment instructions





  - Remove backend setup instructions
  - Add instructions for static hosting deployment
  - Document data file structure and update process
  - Add instructions for updating resume PDF
  - Remove environment variable documentation for backend services
  - _Requirements: 6.4, 7.5_

- [x] 13. Checkpoint - Ensure all tests pass





  - Ensure all tests pass, ask the user if questions arise.

- [x] 14. Verify static build output





  - Run `npm run build` to generate static site
  - Verify no server-side code in build output
  - Check that all pages are pre-rendered as HTML
  - Verify all assets are in the output directory
  - Test that build succeeds without backend environment variables
  - _Requirements: 6.5, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 10.1, 10.3, 10.5_

- [ ]* 14.1 Write integration tests for full page rendering
  - Test home page renders without errors
  - Test projects page renders all projects
  - Test skills page renders all skills
  - Test contact page renders correctly
  - Verify navigation between pages works
  - _Requirements: 2.1, 3.1, 4.1, 5.1_

- [x] 15. Test deployment on static hosting platform





  - Deploy to Vercel/Netlify/GitHub Pages
  - Verify all pages load correctly
  - Test resume download functionality
  - Verify all images load properly
  - Test responsive design on mobile devices
  - Confirm no server errors or missing resources
  - _Requirements: 7.6, 10.3_

- [x] 16. Final Checkpoint - Ensure all tests pass





  - Ensure all tests pass, ask the user if questions arise.
