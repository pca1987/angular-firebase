import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-firebase';
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.db.list('/items').valueChanges().subscribe(console.log);
  }

  testDB(): void {
    this.db.list('/items').push({
      test: 1
    });
  }
}