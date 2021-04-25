import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {

  items: {text:string, done:boolean}[] = [];

  constructor() { }

  addItem(formData:any) {
    this.items.push(
      {
        text: formData.text,
        done: false
      }
    );
  }

  clearList() {
    this.items = [];
  }

  deleteItem(i:number) {
    this.items.splice(i,1);
  }

  markItem(i:number) {
    this.items[i].done = !this.items[i].done;
  }

}
