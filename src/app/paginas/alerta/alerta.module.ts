import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertaPageRoutingModule } from './alerta-routing.module';

import { AlertaPage } from './alerta.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertaPageRoutingModule,
    ComponentesModule
  
  ],
  declarations: [AlertaPage]
})
export class AlertaPageModule  {}
