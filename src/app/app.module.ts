import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {MaterialModule} from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexSimulationsComponent } from './simulations/index-simulations/index-simulations.component';
import { DetailsSimulationsComponent } from './simulations/details-simulations/details-simulations.component';
import { FormSimulationsComponent } from './simulations/form-simulations/form-simulations.component';
import { EditSimulationsComponent } from './simulations/edit-simulations/edit-simulations.component'
import {ChartsModule, WavesModule } from 'angular-bootstrap-md'
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexSimulationsComponent,
    DetailsSimulationsComponent,
    FormSimulationsComponent,
    EditSimulationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    WavesModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
