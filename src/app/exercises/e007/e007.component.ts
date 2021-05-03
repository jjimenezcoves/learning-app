import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e007',
  templateUrl: './e007.component.html',
  styleUrls: ['./e007.component.scss']
})
export class E007Component implements OnInit {

  grid = [0,0,0,0,0,0,0,0,0];
  turn = 1;
  gameBlocked = false;

  constructor() { }

  ngOnInit(): void {

    console.log(this.grid);

  }

  newGame() {
    this.turn = 1;
    this.grid = [0,0,0,0,0,0,0,0,0];
    this.gameBlocked = false;
  }

  cellClicked(cell:number) {
    // debugger;
    if(this.grid[cell] == 0 && !this.gameBlocked){
      this.grid[cell] = this.turn;
      if(this.checkVictory()) {
        this.gameBlocked = true;
      }else{
        this.turn = this.turn == 1 ? 2 : 1;
      }
    }
  }

  checkVictory(): boolean {

    //00,01,02
    //10,11,12
    //20,21,22

    // 0, 1, 2
    // 3, 4, 5
    // 6, 7, 8

    if(this.grid[0]==this.grid[1]&&this.grid[2]==this.grid[0]&&(this.grid[0]==1||this.grid[0]==2)){
        return true;
    }else if(this.grid[3]==this.grid[4]&&this.grid[5]==this.grid[3]&&(this.grid[3]==1||this.grid[3]==2)){
        return true;
    }else if(this.grid[6]==this.grid[7]&&this.grid[8]==this.grid[6]&&(this.grid[6]==1||this.grid[6]==2)){
        return true;
    }else if(this.grid[0]==this.grid[3]&&this.grid[6]==this.grid[0]&&(this.grid[0]==1||this.grid[0]==2)){
        return true;
    }else if(this.grid[1]==this.grid[4]&&this.grid[7]==this.grid[1]&&(this.grid[1]==1||this.grid[1]==2)){
        return true;
    }else if(this.grid[2]==this.grid[5]&&this.grid[8]==this.grid[2]&&(this.grid[2]==1||this.grid[2]==2)){
        return true;
    }else if(this.grid[0]==this.grid[4]&&this.grid[8]==this.grid[0]&&(this.grid[0]==1||this.grid[0]==2)){
        return true;
    }else if(this.grid[6]==this.grid[4]&&this.grid[2]==this.grid[6]&&(this.grid[6]==1||this.grid[6]==2)){
        return true;
    }else{
        return false;
    }

  }



}
