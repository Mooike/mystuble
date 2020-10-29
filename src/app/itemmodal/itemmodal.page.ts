import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EinkaufenService, Item } from '../services/einkaufen.service';

@Component({
  selector: 'app-itemmodal',
  templateUrl: './itemmodal.page.html',
  styleUrls: ['./itemmodal.page.scss'],
})
export class ItemmodalPage implements OnInit {
  
  item: Item = { 
    beschreibung: ""
  }
  constructor(private modalController:ModalController, private einkaufen:EinkaufenService) { }

  ngOnInit() {
  }

  close(){
    this.modalController.dismiss()
  }
  add(){
    this.einkaufen.add(this.item);
    this.close();
  }

}
