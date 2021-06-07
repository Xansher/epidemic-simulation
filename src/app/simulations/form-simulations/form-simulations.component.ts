import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { simulationDTO } from '../simulation.model';

@Component({
  selector: 'app-form-simulations',
  templateUrl: './form-simulations.component.html',
  styleUrls: ['./form-simulations.component.css']
})
export class FormSimulationsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  model:simulationDTO;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      p: '',
      i: '',
      r: '',
      m: '',
      ti: '',
      tm: '',
      ts: ''
    });

    if(this.model != null){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){

  }
}
