import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AviationComponent } from './aviation/aviation.component';
import { ContactComponent } from './contact/contact.component';
import { EntrevistasComponent } from './entrevistas/entrevistas.component';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { HomeComponent } from './home/home.component';
import { MechanicsComponent } from './mechanics/mechanics.component';
import { MusicComponent } from './music/music.component';
import { NatureComponent } from './nature/nature.component';
import { NauticComponent } from './nautic/nautic.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "about-me",
    component: AboutMeComponent
  },
  {
    path: "resume",
    component: ResumeComponent
  },
  {
    path: "aviation",
    component: AviationComponent 
  },
  {
    path: "mechanics",
    component: MechanicsComponent 
  },
  {
    path: "nautic",
    component: NauticComponent 
  },
  {
    path: "music",
    component: MusicComponent 
  },
  {
    path: "entrevistas",
    component: EntrevistasComponent 
  },
  {
    path: "nature",
    component: NatureComponent 
  }, 
  {
    path: "email-sent", 
    component: EmailSentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
