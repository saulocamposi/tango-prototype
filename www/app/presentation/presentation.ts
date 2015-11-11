import {Page, NavController, ViewController} from 'ionic/ionic';
//import {Login} from '../login/login';
import {ChooseProfile} from '../chooseprofile/chooseprofile';

@Page({
  templateUrl:'app/presentation/presentation.html'
})
export class Presentation {
//  constructor(nav: NavController, view: ViewController, login: Login) {
  constructor(nav: NavController, view: ViewController, chooseProfile: ChooseProfile) {
    this.nav = nav;
    this.view = view;
    //this.login = login;
    this.chooseProfile = chooseProfile;
  }

  goToLogin(){
  //  this.nav.push(this.chooseProfile);
  }

}
