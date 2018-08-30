import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-firebase';
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.db.list('items').valueChanges().subscribe((item) => {

      for (let entry of item) {
        console.log('new item has been added: ' + entry['test']);
      }
      
    });


    // const size$ = new Subject<string>();
    // const queryObservable = size$.pipe(
    //   switchMap(size =>
    //     db.list('/items', ref => ref.orderByChild('test')).valueChanges()
    //   )
    // );

    // // subscribe to changes
    // queryObservable.subscribe(queriedItems => {
    //   console.log("queried: " + queriedItems);
    // });

    // // trigger the query
    // size$.next('large');

    // // re-trigger the query!!!
    // size$.next('small');
  }

  testDB(): void {
    this.db.list('items').push({
      test: new Date().getMilliseconds()
    });
  }
}