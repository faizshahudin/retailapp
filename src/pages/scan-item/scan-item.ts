import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { bcData } from  '../../models/bcData';
import { Subject } from "rxjs/Subject";
/**
 * Generated class for the ScanItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan-item',
  templateUrl: 'scan-item.html',
})
export class ScanItemPage {

  options: BarcodeScannerOptions;
  results: {};
  items: FirebaseListObservable<any[]>;

  constructor(private barcode: BarcodeScanner, public navCtrl: NavController, 
        public navParams: NavParams, private db: AngularFireDatabase, 
        public alertCtrl: AlertController) {
        this.items = db.list('/Items');
  }

  async scanBarcode(){

    this.options = {
      prompt: "Scan your barcode"
    }
    this.results = await this.barcode.scan();
  }
  addItem(results):void{
    let prompt = this.alertCtrl.create({
      title: 'Item ',
      message: 'Enter item info',
      inputs:[{
          name:'barcodenumber',
          placeholder: results.text
        },
        {
          name:'name',
          placeholder:'Pen'
        },
        {
          name:'price',
          placeholder:'10.00'
        },
        {
          name:'category',
          placeholder:'Stationery'
        }
      ],
    buttons:[{
        text: "Cancel",
        handler: data => {
          console.log("cancel clicked");
        }
      },
      {
        text:"Save Item",
        handler: data => {
          this.items.push({
            barcodenumber: results.text,
            name: data.name,
            price: data.price,
            category: data.category
          })
        }
      }

      ]
    })

    prompt.present();
  }
}
