import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e007',
  templateUrl: './e007.component.html',
  styleUrls: ['./e007.component.scss']
})
export class E007Component implements OnInit {

  grid = [[0,0,0],[0,0,0],[0,0,0]];
  turn = 1;

  constructor() { }

  ngOnInit(): void {

    console.log(this.grid);

  }

  newGame() {
    this.turn = 1;
    this.grid = [[0,0,0],[0,0,0],[0,0,0]];
  }

  cellClicked(x:number, y:number) {
    this.grid[x][y] = this.turn;
    this.turn = this.turn == 1 ? 2 : 1;
  }

}
