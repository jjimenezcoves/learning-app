import { Component } from '@angular/core';

@Component({
  selector: 'app-e002',
  templateUrl: './e002.component.html',
  styleUrls: ['./e002.component.scss']
})
export class E002Component {

  expenses:{name:string, date:Date, amount:number}[] = [];

  constructor() { }

  addExpense(data:any) {
    this.expenses.push(
      {
        name: data.name,
        date: data.date,
        amount: data.amount
      }
    );
  }

  removeExpense(i:number){
    this.expenses.splice(i,1);
  }

}
