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
export class SquareComponent {

  randomNumber=Math.floor(Math.random()*10);
  randomClock= '🕐';
  typesOfClocks= [
    '🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛','🕜','🕝','🕞','🕟',
  '🕠','🕡','🕢',
  '🕣','🕤','🕥','🕦','🕧'];


@Input() value:'❌'|'⭕';


constructor(){
  let count=0;
  setInterval(()=>{this.randomNumber=Math.floor(Math.random()*10);
  
  if(count===10){count=0;this.randomClock=this.typesOfClocks[0]}
  else{
    this.randomClock=this.typesOfClocks[count];
    count++;
  }
},1000);


}
}
