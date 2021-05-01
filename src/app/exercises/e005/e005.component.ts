import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e005',
  templateUrl: './e005.component.html',
  styleUrls: ['./e005.component.scss']
})
export class E005Component implements OnInit {

  cards: {image:string, revealed: boolean, code: number, solved: boolean}[] = [];
  score: number = 0;
  failedAttempts: number = 0;
  lastCard: number = -1;
  turn: number = 0;
  showAlgorithm: boolean;

  constructor() { }

  ngOnInit(): void {
    // Original deck
    this.cards = [
      {image: 'assets/img/toastman.jpg', revealed: false, code: 1, solved: false},
      {image: 'assets/img/toastman.jpg', revealed: false, code: 1, solved: false},
      {image: 'assets/img/ren.png', revealed: false, code: 2, solved: false},
      {image: 'assets/img/ren.png', revealed: false, code: 2, solved: false},
      {image: 'assets/img/stimpy.png', revealed: false, code: 3, solved: false},
      {image: 'assets/img/stimpy.png', revealed: false, code: 3, solved: false}
    ];
    // Random mix
    this.shuffle();
    // View
    this.showAlgorithm = false;
  }

  newGame() {
    this.cards.forEach(card => {
      card.revealed = false;
      card.solved = false;
    });
    this.shuffle();
    this.lastCard = -1;
    this.turn = 0;
    this.score = 0;
    this.failedAttempts = 0;
  }

  /* Randomize array using Durstenfeld shuffle algorithm */
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  cardPressed(id:number) {
    // debugger;
    switch(this.turn) {
      case 0: {
        // Clicked on not revealed card?
        if(!this.cards[id].revealed) {
          // Increase turn
          ++this.turn;
          // Mark card as revealed
          this.cards[id].revealed = !this.cards[id].revealed;
          // Mark as last card clicked
          this.lastCard = this.cards[id].code;
        }
         break;
      }
      case 1: {
        // Clicked on not revealed card?
        if(!this.cards[id].revealed) {
          // It's a match?
          if(this.cards[id].code == this.lastCard) {
            // Reset turn
            this.turn = 0;
            // Mark pair as solved
            this.cards.forEach(card => {
              if(card.code == this.lastCard) card.solved = true;
            });
            // Increase score
            ++this.score;
          } else {
            // Increase turn
            ++this.turn;
            // Increase attempts
            ++this.failedAttempts;
          }
          // Mark card as revealed
          this.cards[id].revealed = !this.cards[id].revealed;
          // Reset last card clicked
          this.lastCard = -1;
        }
         break;
      }
      default: {
        // Reset turn
         this.turn = 0;
        // Hide both cards again
         this.cards.forEach(card => {
          if(!card.solved) card.revealed = false;
         });
         break;
      }
   } // Switch end
  }

  switchView() {
    this.showAlgorithm = !this.showAlgorithm;
  }
}
