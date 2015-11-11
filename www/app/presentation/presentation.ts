import {Page, NavController, ViewController} from 'ionic/ionic';
import {Login} from '../login/login';

@Page({
  templateUrl:'app/presentation/presentation.html'
})
export class Presentation {

  constructor(nav: NavController, view: ViewController) {
    this.nav = nav;
    this.view = view;
  }

  goToLogin(){
    this.nav.push(Login);
  }

}
