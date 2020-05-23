import { Component, OnInit } from '@angular/core';
import { faSlack,faGithub,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';

declare let particlesJS: any;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  faSlack = faSlack;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  
  constructor() { }

  public ngOnInit(): void {
  }

  Aboutme()
  {
    document.getElementById('about-me').scrollIntoView({behavior:'smooth'}); 
  }  

}
