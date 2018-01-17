import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the SalesReportsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sales-reports',
  templateUrl: 'sales-reports.html',
})
export class SalesReportsPage {
  items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              db: AngularFireDatabase) {
                this.items = db.list('/SellItems');
  }

}
