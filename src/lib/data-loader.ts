import profileData from '@/data/profile.json';
import projectsData from '@/data/projects.json';
import skillsData from '@/data/skills.json';
import type { DeveloperProfile, Project, Skill } from '@/types/data';

/**
 * Load developer profile data from local JSON file
 * @returns DeveloperProfile object containing name, title, bio, avatar, and social links
 */
export function getProfile(): DeveloperProfile {
  return profileData as DeveloperProfile;
}

/**
 * Load projects data from local JSON file
 * @returns Array of Project objects with details about portfolio projects
 */
export function getProjects(): Project[] {
  return projectsData as Project[];
}

/**
 * Load skills data from local JSON file
 * @returns Array of Skill objects with technology names and icons
 */
export function getSkills(): Skill[] {
  return skillsData as Skill[];
}
