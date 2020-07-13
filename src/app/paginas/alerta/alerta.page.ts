import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})

export class AlertaPage implements OnInit {
  public variableEnviar: string =  "pagina de josue";

  constructor(private  alertController: AlertController) {  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Subtitulo',
      message: 'Este es un Mensaje de Alerta.',
      buttons: ['Correcto']
    });
  
    await alert.present();
  }




  ngOnInit() {
  }

}
