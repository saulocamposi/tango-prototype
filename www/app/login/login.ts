import {Page, NavController, ViewController} from 'ionic/ionic';

@Page({
  templateUrl:'app/login/login.html'
})
export class Login {
  constructor(nav: NavController, view: ViewController) {
    this.nav = nav;
    this.view = view;
  }
}
