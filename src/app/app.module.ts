import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EditAboutComponent } from './components/about/edit-about/edit-about.component';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education/new-education.component';
import { EditExperienceComponent } from './components/experience/edit-experience/edit-experience.component';
import { NewExperienceComponent } from './components/experience/new-experience/new-experience.component';
import { NewProyectComponent } from './components/proyects/new-proyect/new-proyect.component';
import { EditProyectComponent } from './components/proyects/edit-proyect/edit-proyect.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    NavbarComponent,
    BannerComponent,
    ExperienceComponent,
    EducationComponent,
    FooterComponent,
    LoginComponent,
    PortfolioComponent,
    ProyectsComponent,
    SkillsComponent,
    EditAboutComponent,
    EditEducationComponent,
    NewEducationComponent,
    EditExperienceComponent,
    NewExperienceComponent,
    NewProyectComponent,
    EditProyectComponent,
    EditSkillComponent,
    NewSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
