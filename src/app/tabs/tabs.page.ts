import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginModalPage } from '../login-modal/login-modal.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private modalController: ModalController) {
    this.modalController.create({
      component: LoginModalPage
    }).then(modal => modal.present())
  }

}
