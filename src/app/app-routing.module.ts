import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education/new-education.component';
import { EditExperienceComponent } from './components/experience/edit-experience/edit-experience.component';
import { NewExperienceComponent } from './components/experience/new-experience/new-experience.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditProyectComponent } from './components/proyects/edit-proyect/edit-proyect.component';
import { NewProyectComponent } from './components/proyects/new-proyect/new-proyect.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';
import { EditAboutComponent } from './components/about/edit-about/edit-about.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newExperience', component: NewExperienceComponent },
  { path: 'editexp/:id', component: EditExperienceComponent },
  { path: 'newEducation', component: NewEducationComponent },
  { path: 'editedu/:id', component: EditEducationComponent },
  { path: 'newSkill', component: NewSkillComponent },
  { path: 'editskill/:id', component: EditSkillComponent },
  { path: 'newProyect', component: NewProyectComponent },
  { path: 'editproy/:id', component: EditProyectComponent },
  { path: 'editabout/:id', component: EditAboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
