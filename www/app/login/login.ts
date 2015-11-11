import {Page, NavController, ViewController} from 'ionic/ionic';
import {ChooseProfile} from '../chooseprofile/chooseprofile';
import {TabsPage} from '../tabs/tabs';


@Page({
  templateUrl:'app/login/login.html'
})
export class Login {
  constructor(nav: NavController, view: ViewController) {
    this.nav = nav;
    this.view = view;
  }

  sigIn(){
    this.nav.push(TabsPage);
  }

  sigUp(){
    this.nav.push(ChooseProfile);
  }

}
