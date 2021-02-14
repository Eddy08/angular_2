import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
//Smart Component : It has an internal state that can change.
export class BoardComponent implements OnInit {
squares:any[]; // Nine square board moves
xIsNext:boolean; // Determine the current player
winner:string; // Either ❌ or ⭕
  constructor() { } // Generally used for injecting dependency
// To set up this component 
  ngOnInit(): void {
    this.newGame();
  }
  newGame() {
  this.squares=Array(9).fill(null);
  this.winner=null;
  this.xIsNext=true;
  }
  // Accessors of getter method
  get player(){
    return this.xIsNext ? '❌':'⭕';
    }
  makeMove(index:number){
    if(!this.squares[index]){
      this.squares.splice(index,1,this.player)
    }
  }
}
