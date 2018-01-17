import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScannedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scanned',
  templateUrl: 'scanned.html',
})
export class ScannedPage {

  private bcData;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bcData = navParams.get('data');
  }
}
