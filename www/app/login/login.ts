import {Page, NavController, ViewController} from 'ionic/ionic';
import {ProfileHairDresser} from '../profilehairdresser/profilehd';
import {ChooseProfile} from '../chooseprofile/chooseprofile';


@Page({
  templateUrl:'app/login/login.html'
})
export class Login {
  constructor(nav: NavController, view: ViewController) {
    this.nav = nav;
    this.view = view;
  }

  sigIn(){
    this.nav.push(ProfileHairDresser);
  }

  sigUp(){
    this.nav.push(ChooseProfile);
  }

}
