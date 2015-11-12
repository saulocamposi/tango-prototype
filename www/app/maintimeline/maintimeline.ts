import {Page, NavController, ViewController} from 'ionic/ionic';
import {Login} from '../login/login';

@Page({
  templateUrl:'app/maintimeline/maintimeline.html',
})
export class MainTimeline {
  constructor(nav: NavController, view: ViewController) {
    this.nav = nav;
    this.view = view;
  }

  goToLogin(){
    this.nav.push(Login);
  }

}
