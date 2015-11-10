import {Page, NavController, ViewController} from 'ionic/ionic';


@Page({
  templateUrl:'app/profilehairdresser/profilehd.html',
})
export class ProfileHairDresser {
  constructor(nav: NavController, view: ViewController) {
    this.nav = nav;
    this.view = view;
  }
}
