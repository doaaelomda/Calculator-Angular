import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calcuat';
  resulat=""
  getaction(item:any){
    this.resulat +=item
  }
  equal(){
    this.resulat=eval(this.resulat).toFixed(1)
  }
  reset(){
    this.resulat=''
  }
  // delet(){
    
  // }
}
