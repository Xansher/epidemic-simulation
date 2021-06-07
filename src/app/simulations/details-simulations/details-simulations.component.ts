import { Component, OnInit } from '@angular/core';
import { resultDTO, simulationDTO } from '../simulation.model';

@Component({
  selector: 'app-details-simulations',
  templateUrl: './details-simulations.component.html',
  styleUrls: ['./details-simulations.component.css']
})
export class DetailsSimulationsComponent implements OnInit {

  constructor() { }

  columnsToDisplay= ['day', 'infected', 'healthy', 'dead', 'cured'];
  model:simulationDTO={id:1, name: 'test', p: 700000, i:20000, r: 20, m: 30, ti: 14, tm: 14, ts: 30};
  results:resultDTO[]=[
    {day:1, infected: 1000, healthy: 72000, dead: 50, cured: 0},
    {day:2, infected: 2000, healthy: 71000, dead: 100, cured: 20},
    {day:3, infected: 3000, healthy: 67000, dead: 150, cured: 40},
    {day:4, infected: 4000, healthy: 64000, dead: 200, cured: 60},
    {day:5, infected: 5000, healthy: 70000, dead: 250, cured: 80},
    {day:6, infected: 5000, healthy: 70000, dead: 300, cured: 100},
    {day:7, infected: 5600, healthy: 70000, dead: 350, cured: 120},
    {day:8, infected: 7000, healthy: 70000, dead: 400, cured: 140},
    {day:9, infected: 8000, healthy: 70000, dead: 450, cured: 160}

  ];

  
  ngOnInit(): void {
    
  }
  public chartType: string = 'line';

  public chartInfected: Array<any> = [
    { data: this.results.map(x=>x.infected), label: 'Infected' }  
  ];
  public chartHealthy: Array<any> = [
    { data: this.results.map(x=>x.healthy), label: 'Healthy' }  
  ];
  public chartDead: Array<any> = [
    { data: this.results.map(x=>x.dead), label: 'Dead' }  
  ];
  public chartCured: Array<any> = [
    { data: this.results.map(x=>x.cured), label: 'Cured' }  
  ];

  public chartLabels: Array<any>= this.results.map(x => x.day);

  public chartColorsInfected: Array<any> = [
    {
      backgroundColor: 'pink',
      borderColor: 'blueviolet',
      borderWidth: 2,
    }
  ];

  public chartColorsHealthy: Array<any> = [
    {
      backgroundColor: 'lightgreen',
      borderColor: 'green',
      borderWidth: 2,
    }
  ];

  public chartColorsDead: Array<any> = [
    {
      backgroundColor: 'pink',
      borderColor: 'red',
      borderWidth: 2,
    }
  ];

  public chartColorsCured: Array<any> = [
    {
      backgroundColor: 'lightblue',
      borderColor: 'blue',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

 

}
