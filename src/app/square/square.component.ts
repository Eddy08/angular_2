import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
    {{randomClock}} {{randomNumber}}
    </p>
    <button>{{value}}</button>
  `,
  styles: [
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
