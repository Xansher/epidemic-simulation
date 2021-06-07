import { Component, OnInit } from '@angular/core';
import { simulationDTO } from '../simulation.model';

@Component({
  selector: 'app-edit-simulations',
  templateUrl: './edit-simulations.component.html',
  styleUrls: ['./edit-simulations.component.css']
})
export class EditSimulationsComponent implements OnInit {

  constructor() { }

  model:simulationDTO={id:1, name: 'test', p: 700000, i:20000, r: 20, m: 30, ti: 14, tm: 14, ts: 30};

  ngOnInit(): void {
    
  }

}
