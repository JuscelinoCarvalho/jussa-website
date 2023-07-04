import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AviationComponent } from './aviation/aviation.component';
import { ContactComponent } from './contact/contact.component';
import { EntrevistasComponent } from './entrevistas/entrevistas.component';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MechanicsComponent } from './mechanics/mechanics.component';
import { MusicComponent } from './music/music.component';
import { NatureComponent } from './nature/nature.component';
import { NauticComponent } from './nautic/nautic.component';
import { ResumeComponent } from './resume/resume.component';
import { PdfViewerModule, PdfViewerComponent } from 'ng2-pdf-viewer';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const material = [
  MatCardModule,
  MatIconModule
]

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    AviationComponent,
    ContactComponent,
    EntrevistasComponent,
    EmailSentComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MechanicsComponent,
    MusicComponent,
    NatureComponent,
    NauticComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PdfViewerModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule    
  ],
  providers: [PdfViewerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
