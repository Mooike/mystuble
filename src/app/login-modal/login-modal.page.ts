import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.page.html',
  styleUrls: ['./login-modal.page.scss'],
})
export class LoginModalPage implements OnInit {
  user:any
  password:any
  logged_in:any
  constructor(private modalController: ModalController, private storage: Storage) { }

  ngOnInit() {
    this.storage.get("login").then(value => {
      this.logged_in = value;
      console.log(value)
      if(value == true){
        this.modalController.dismiss()
      }
    })
   
  }

  login(){
    
    if(this.user == "dgm" && this.password == "test"){
      this.storage.set("login", "true");
      this.modalController.dismiss();
    }

  }

}
