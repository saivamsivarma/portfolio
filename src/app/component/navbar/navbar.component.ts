import { Component, OnInit } from '@angular/core';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  faAlignRight=faAlignRight;

  constructor() { }



  public show = false;
  opennav() {
    this.show = !this.show;
  }

  toHome()
  {
    document.getElementById('home').scrollIntoView({behavior:'smooth'});
    this.show = !this.show;
  }
  Home()
  {
    document.getElementById('home').scrollIntoView({behavior:'smooth'});
  }
  
  toAboutme()
  {
    document.getElementById('about-me').scrollIntoView({behavior:'smooth'});
    this.show = !this.show;
  }
  Aboutme()
  {
    document.getElementById('about-me').scrollIntoView({behavior:'smooth'}); 
  }

  toSkills()
  {
    document.getElementById('skills').scrollIntoView({behavior:'smooth'});
    this.show = !this.show;
  }
  Skills()
  {
    document.getElementById('skills').scrollIntoView({behavior:'smooth'});
  }

  toEducation()
  {
    document.getElementById('education').scrollIntoView({behavior:'smooth'});
    this.show = !this.show;
  }
  Education()
  {
    document.getElementById('education').scrollIntoView({behavior:'smooth'});
  }
  
  toProject()
  {
    document.getElementById('projects').scrollIntoView({behavior:'smooth'});
    this.show = !this.show;
  }
  Project()
  {
    document.getElementById('projects').scrollIntoView({behavior:'smooth'});
  }
  toContact()
  {
    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    this.show = !this.show;
  }
  Contact()
  {
    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
  }
  ngOnInit(): void {
    
  }

}
