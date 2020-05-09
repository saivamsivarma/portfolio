import { Component, OnInit } from '@angular/core';
import { faSlack,faGithub,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';



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

  async ngOnInit(){
    
  }  
  Aboutme()
  {
    document.getElementById('about-me').scrollIntoView({behavior:'smooth'}); 
  }
  
    

}
