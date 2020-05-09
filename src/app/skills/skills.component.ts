import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  ngOnInit(): void {
    
  }

  title = 'angular8chartjs';
  canvas: any;
  ctx: any;
  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: ["HTML5", "CSS3", "SCSS","JAVASCRIPT","ANGULARJS","NODEJS","EXPRESSJS","SQL","MONGODB"],
          datasets: [{
              label: 'Skill',
              data: [90,80,75,65,65,65,60,85,70,100,50],
              backgroundColor: [
                  '#3366FF',
                  '#3366FF',
                  '#3366FF',
                  '#3366FF',
                  '#3366FF',
                  '#3366FF',
                  '#3366FF',
                  '#3366FF',
                  '#3366FF',
              ],
              borderWidth: 1
          }]
      },
      options: {
        scales: {
          xAxes: [{
              gridLines: {
                  display:false
              }
          }],
          yAxes: [{
              gridLines: {
                  display:true
              }   
          }]
      },
        responsive: true,
        legend: {
          display:true
      }
      }
    });
  }


}
