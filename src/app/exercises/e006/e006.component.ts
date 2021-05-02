import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-e006',
  templateUrl: './e006.component.html',
  styleUrls: ['./e006.component.scss']
})
export class E006Component implements OnInit {

  counter$: Observable<number>;
  count: number;
  subscription: Subscription;

  constructor() {}

  ngOnInit(): void {

    // this.cuentaAtras();
    this.cronometro();

  }

  cuentaAtras(){
    if(this.subscription) this.subscription.unsubscribe();
    this.count = 10;
    this.counter$ = timer(1000,1000).pipe(
      take(this.count),
      map(() => --this.count)
    );
    this.subscription = this.counter$.subscribe();
  }

  cronometro(){
    if(this.subscription) this.subscription.unsubscribe();
    this.count = 0;
    this.counter$ = timer(1000,1000).pipe(
      map(() => ++this.count)
    );
    this.subscription = this.counter$.subscribe();
  }

}
