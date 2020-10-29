import { Component, OnInit } from '@angular/core';
import { SpruchService } from '../services/spruch.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  spruche: any;
  that: any = null;
  spruche_lenght:any;
  zufall: any;
  constructor(private spruch: SpruchService) {
    this.spruch.getSpruch().subscribe(value =>{
      this.spruche = value;
      console.log("aus constructor:", this.spruche)
      this.getRandom()
    })
  }
  ngOnInit(): void {
    // this.spruch.getSpruch().subscribe(val =>this.spruche = val)
    
  }

  getRandom(){
    console.log("aus get Random:", this.spruche)
    this.spruche_lenght = this.spruche.length - 1
    console.log("Länge: ", this.spruche_lenght)
    this.zufall = Math.floor(Math.random() * Math.floor(this.spruche_lenght));
    this.that = this.spruche[this.zufall];  
    console.log("element", this.that)
  }
}
