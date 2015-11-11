import {Page, NavController, ViewController} from 'ionic/ionic';


@Page({
  templateUrl:'app/timelinehd/timelinehd.html',
})
export class TimelineHd {
  constructor(nav: NavController, view: ViewController) {
    this.nav = nav;
    this.view = view;
  }
}
