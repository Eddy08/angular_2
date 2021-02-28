import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <!-- <p>
    {{randomClock}} {{randomNumber}}
    </p> -->
    <button nbButton *ngIf="!value"><h1>{{value}}</h1></button>
    <button nbButton hero status="success" *ngIf="value=='❌'"><h1>{{value}}</h1></button>
    <button nbButton hero status="info" *ngIf="value=='⭕'"><h1>{{value}}</h1></button>
    
    

  `,
  styles: [
  'h1{font-size:5em;}','button{height:200px;width:200px}'
  ]
})

// Dumb Component  --> It states Changes from Parent 
export class SquareComponent {

  randomNumber=Math.floor(Math.random()*10);
  randomClock= '🕐';
  typesOfClocks= [
    '🕐','🕧','🕑','🕜','🕒','🕝','🕓','🕞','🕔','🕟','🕕','🕡','🕖','🕢','🕗','🕣','🕘','🕤','🕙','🕥','🕚','🕦','🕛',];


@Input() value:'❌'|'⭕';


constructor(){
  let count=0;
  setInterval(()=>{this.randomNumber=Math.floor(Math.random()*10);
  
  if(count===23){count=1;this.randomClock=this.typesOfClocks[0]}
  else{
    this.randomClock=this.typesOfClocks[count];
    count++;
  }
},1000);


}
}
