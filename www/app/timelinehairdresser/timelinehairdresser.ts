import {Page, NavController, ViewController} from 'ionic/ionic';


@Page({
  templateUrl:'app/timelinehairdresser/timelinehairdresser.html',
})
export class TimelineHairDresser {
  constructor(nav: NavController, view: ViewController) {
    this.nav = nav;
    this.view = view;
  }
}
