import { Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  { path: 'home', component: HeroSectionComponent },  
  { path: 'about', component: AboutComponent },      
  { path: 'skills', component: SkillComponent },     
  { path: 'projects', component: ProjectsComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: '**', redirectTo: '/home' }                 
];
