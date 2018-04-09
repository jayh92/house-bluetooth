import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  constructor(
    public navCtrl: NavController, 
    navParams: NavParams, 
    public items: Items,
    public viewCtrl: ViewController
  ) {
    this.item = navParams.get('item') || items.defaultItem;
  }

  deleteItem() {
    this.items.delete(this.item);
    this.viewCtrl.dismiss();
  }
}
