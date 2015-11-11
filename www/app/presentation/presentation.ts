import {Page, NavController, ViewController} from 'ionic/ionic';


@Page({
  templateUrl:'app/presentation/presentation.html',
})
export class Presentation {
  constructor(nav: NavController, view: ViewController) {
    this.nav = nav;
    this.view = view;
  }
}
