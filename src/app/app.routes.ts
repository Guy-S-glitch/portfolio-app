import { Routes } from '@angular/router';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { EducationComponent } from './sections/education/education.component';

export const routes: Routes = [
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'skills', component:SkillsComponent},
    {path:'experience',component:ExperienceComponent},
    {path:'education',component:EducationComponent},
    {path:'',redirectTo:'/about',pathMatch:'full'},
    {path:'**',redirectTo:'/about'},
];
