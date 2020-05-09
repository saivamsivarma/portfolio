import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { UserAnimationComponent } from './component/user-animation/user-animation.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TypeAnimationComponent } from './component/type-animation/type-animation.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserAnimationComponent,
    NavbarComponent,
    AboutMeComponent,
    PortfolioComponent,
    TypeAnimationComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FontAwesomeModule,
    NgCircleProgressModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
