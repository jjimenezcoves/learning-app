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
  paused: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {image: 'assets/img/toastman.jpg', revealed: false, code: 1, solved: false},
      {image: 'assets/img/toastman.jpg', revealed: false, code: 1, solved: false},
      {image: 'assets/img/ren.png', revealed: false, code: 2, solved: false},
      {image: 'assets/img/ren.png', revealed: false, code: 2, solved: false},
      {image: 'assets/img/stimpy.png', revealed: false, code: 3, solved: false},
      {image: 'assets/img/stimpy.png', revealed: false, code: 3, solved: false}
    ];
    this.shuffle();
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

  shuffle() {

  }

  cardPressed(id:number) {

      // Click on not revealed card
      if(!this.cards[id].revealed) {
        console.log('Clicked on non revealed card');

        // Increase turn
        this.turn++;
        console.log('Turn: ' + this.turn);

        // Mark as revealed
        this.cards[id].revealed = !this.cards[id].revealed;

        // Match with last revealed card?
        console.log('Card: ' + this.cards[id].code + ', Last card: ' + this.lastCard);

        if(this.cards[id].code == this.lastCard) {

          console.log('Match');

          // Increase score
          this.score++;
          console.log('Score is now: ' + this.score);

          // Mark pair as solved
          this.cards.forEach(card => {
            if(card.code == this.lastCard) card.solved = true;
          });

        }else {

          console.log("Didn't match");

          // Not first round
          if(this.turn == 2) {

            // Increase attempts
            this.failedAttempts++;
            console.log('Failed attempts are now: ' + this.failedAttempts);
            alert('Error!');

            // Hide both cards again
            this.cards.forEach(card => {
              if(!card.solved) card.revealed = false;
            });

          }
        }

        // Check turn
        if(this.turn == 2) {
          this.turn = 0;
          this.lastCard = -1;
        }else{
          // Set last card clicked
          this.lastCard = this.cards[id].code;
        }

      }
  }

}
