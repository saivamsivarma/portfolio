import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-type-animation',
  templateUrl: './type-animation.component.html',
  styleUrls: ['./type-animation.component.css']
})
export class TypeAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const options = {
      strings: ['a Web-Developer.', 'an UI/UX Designer.', 'a Freelancer.'],
      typeSpeed: 15,
      backSpeed: 15,
      showCursor: false,
      loop: true
  };
    const typed = new Typed('.typed-element', options);


  }

}
