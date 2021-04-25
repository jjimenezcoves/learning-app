import { Component } from '@angular/core';

@Component({
  selector: 'app-e003',
  templateUrl: './e003.component.html',
  styleUrls: ['./e003.component.scss']
})
export class E003Component {

  notes: string[] = [];
  noteToShow: number = 0;

  constructor() { }

  createNote(data:any) {
    this.notes.push(data.note);
  }

  viewNote(noteId:number) {
    this.noteToShow = noteId;
  }

}
