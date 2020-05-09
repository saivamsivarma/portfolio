import { Component, OnInit } from '@angular/core';
import { faSlack,faGithub,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faSlack = faSlack;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  
  constructor() { }

  ngOnInit(): void {
  }

}
