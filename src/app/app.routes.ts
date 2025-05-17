import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'about',
    loadComponent: () =>
      import('./sections/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'education',
    loadComponent: () =>
      import('./sections/education/education.component').then(
        (m) => m.EducationComponent
      ),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./sections/experience/experience.component').then(
        (m) => m.ExperienceComponent
      ),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./sections/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./sections/skills/skills.component').then(
        (m) => m.SkillsComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./sections/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', redirectTo: '/about' },
];
