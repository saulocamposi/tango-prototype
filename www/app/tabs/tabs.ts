import {Page} from 'ionic/ionic';
import {Presentation} from '../presentation/presentation';
import {TimelineHd} from '../timelinehd/timelinehd';
import {Look} from '../look/look';
import {Login} from '../login/login';
import {ProfileHairDresser} from '../profilehairdresser/profilehd';
import {ChooseProfile} from '../chooseprofile/chooseprofile';

@Page({
  templateUrl: 'app/tabs/tabs.html'
})

export class TabsPage {
  constructor() {
    this.PresentationRoot = Presentation;
    this.TimelineHdRoot = TimelineHd;
    this.LookRoot = Look;
    this.LoginRoot = Login;
    this.ProfileHdRoot = ProfileHairDresser;
    this.ChooseProfileRoot = ChooseProfile;
  }
}
