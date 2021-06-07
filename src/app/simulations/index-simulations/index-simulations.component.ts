import { Component, OnInit } from '@angular/core';
import { simulationDTO } from '../simulation.model';

@Component({
  selector: 'app-index-simulations',
  templateUrl: './index-simulations.component.html',
  styleUrls: ['./index-simulations.component.css']
})
export class IndexSimulationsComponent implements OnInit {

  constructor() { }
  isCreateFormVisible: boolean = false;

  simulations: simulationDTO[] =[
    {id:1, name: 'test', p: 700000, i:20000, r: 20, m: 30, ti: 14, tm: 14, ts: 30}, 
    {id:2, name: 'test', p: 700000, i:20000, r: 20, m: 30, ti: 14, tm: 14, ts: 30},
    {id:3, name: 'test', p: 700000, i:20000, r: 20, m: 30, ti: 14, tm: 14, ts: 30},
    {id:4, name: 'test', p: 700000, i:20000, r: 20, m: 30, ti: 14, tm: 14, ts: 30},
    {id:5, name: 'test', p: 700000, i:20000, r: 20, m: 30, ti: 14, tm: 14, ts: 30}
  ];
  columnsToDisplay=['name', 'p', 'i', 'r', 'm', 'ti', 'tm', 'ts', 'actions'];
  ngOnInit(): void {
  }

  delete(id:number){

  }

  openCreate(){
    this.isCreateFormVisible=true;
  }
  closeCreateWindow(){
    this.isCreateFormVisible=false;
  }

}
