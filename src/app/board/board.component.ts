import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
//Smart Component : It has an internal state that can change.
export class BoardComponent implements OnInit {
squares:any[]; // Nine moves square board moves
xIsNext:boolean; // Determine the current player
winner:string; // Either ❌ or ⭕
disabled:string;
  constructor() { } // Generally used for injecting dependency (immedietally when class is created)
// To set up this component 

 colors = ['#bb0000', '#ffffff'];

  ngOnInit(): void {   //live cycle hook
    this.shoot(); 
    this.newGame();
  }
  newGame() {
  this.squares=Array(9).fill(null);
  this.winner=null;
  this.xIsNext=true;
  this.disabled='no';
  }
  // Accessors of getter method
  get player(){
    return this.xIsNext ? '❌':'⭕';
    }
  makeMove(index:number){
    if(!this.squares[index]){
      this.squares.splice(index,1,this.player)
      this.xIsNext=!this.xIsNext;

    }
    this.winner=this.calculateWinner();
  }
  calculateWinner(){
    const lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      
      [0,3,6],
      [1,4,7],
      [2,5,8],

      [0,4,8],
      [2,4,6]
    ];
    for(let i=0;i<lines.length;i++){
      const [a,b,c]=lines[i];
      if(this.squares[a] && this.squares[a]===this.squares[b] && this.squares[a]===this.squares[c]){
    this.shoot();
        this.disabled=null;
        return this.squares[a];
      }
    }
    return null;
  }
  shoot() {
    try {
      this.confetti({
        angle: 90,
        spread:105,
        particleCount: 100,
        origin: {
            x: 0.1
        }
      });
      this.confetti({
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: this.colors
      });
      this.confetti({
        particleCount: 100,
    angle: 120,
    spread: 55,
    origin: { x: 0.3 },
        colors: this.colors
      });
    } catch(e) {
      // noop, confettijs may not be loaded yet
      console.log("No Conffettin 💔");
    }
  }

  random(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  confetti(args: any) {
    
    return window['confetti'].apply(this, arguments);
  }

 

}
