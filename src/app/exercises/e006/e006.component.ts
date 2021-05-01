import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-e006',
  templateUrl: './e006.component.html',
  styleUrls: ['./e006.component.scss']
})
export class E006Component implements OnInit {

  counter$: Observable<number>;
  count: number;

  constructor() {}

  ngOnInit(): void {

    // this.cuentaAtras();
    this.cronometro();

  }

  cuentaAtras(){
    this.count = 10;
    this.counter$ = timer(1000,1000).pipe(
      take(this.count),
      map(() => --this.count)
    );
    this.counter$.subscribe();
  }

  cronometro(){
    this.count = 0;
    this.counter$ = timer(1000,1000).pipe(
      map(() => ++this.count)
    );
    this.counter$.subscribe();
  }



}
