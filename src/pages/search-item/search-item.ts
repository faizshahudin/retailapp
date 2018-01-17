import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the SearchItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-item',
  templateUrl: 'search-item.html',
})

export class SearchItemPage {
  items: FirebaseListObservable<any[]>;
  selldata: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
               db: AngularFireDatabase, public alertCtrl: AlertController) {
    this.items = db.list('/Items');
    this.selldata = db.list('/SellItems');
  }

  addItem():void{
    let prompt = this.alertCtrl.create({
      title: 'Item ',
      message: 'Enter item info',
      inputs:[{
          name:'barcodenumber',
          placeholder: "2342"
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
            barcodenumber: data.barcodenumber,
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

  editItem(item):void{
    let prompt = this.alertCtrl.create({
      title: 'Edit Item',
      message: 'Edit item info',
      inputs:[{
          name:'barcodenumber',
          placeholder: item.barcodenumber
        },
        {
          name:'name',
          placeholder:item.name
        },
        {
          name:'price',
          placeholder: item.price
        },
        {
          name:'category',
          placeholder: item.category
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
          let newBarcodeNumber: String = item.barcodenumber;
          let newName: String = item.name;
          let newPrice: String = item.price;
          let newCategory: String = item.category;

          if(data.barcodenumber != ''){
            newBarcodeNumber = data.barcodenumber;
          }

          if(data.name != ''){
            newName = data.name;
          }
          if(data.price != ''){
            newPrice = data.price;
          }
          if(data.category != ''){
            newCategory = data.category;
          }
          this.items.update(item.$key,{
            barcodenumber: newBarcodeNumber,
            name: newName,
            price: newPrice,
            category: newCategory
          })
        }
      }

      ]
    })

    prompt.present();
  }

  sellItem(item):void{
    let prompt = this.alertCtrl.create({
      title: 'Sell Item',
      message: 'Sell Item',
      buttons:[{
        text: "Cancel",
        handler: data => {
          console.log("cancel clicked");
        }
      },
      {
        text:"Sell Item",
        handler: data => {
          this.selldata.push({name: item.name, price: item.price});
          this.items.remove(item);
        }
      }

      ]
    })

    prompt.present();
  }
}
