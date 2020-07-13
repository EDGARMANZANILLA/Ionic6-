import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  datos: Datos[]=[
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'football',
      name: 'Alert',
      redirectTo: '/alerta'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Datos{
  icon: string;
  name: string;
  redirectTo: string;

}
