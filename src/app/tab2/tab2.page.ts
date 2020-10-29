import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemmodalPage } from '../itemmodal/itemmodal.page';
import { EinkaufenService } from '../services/einkaufen.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  items: any;
  constructor(private einkaufen: EinkaufenService, private modalController: ModalController) {}
  ngOnInit(): void {
    this.einkaufen.getItems().subscribe(val =>this.items = val)
    console.log(this.items);
  }
  
  delete(item){
    console.log("delete item called: ", item)
    this.einkaufen.delete(item);
  }

  async addModal(){
    console.log("add Modal called:");
    const modal = await this.modalController.create({
      component: ItemmodalPage,

    })
    modal.present();


  }
}
