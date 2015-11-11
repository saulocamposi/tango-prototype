import {Page} from 'ionic/ionic';
import {Presentation} from '../presentation/presentation';
import {TimelineHairDresser} from '../timelinehairdresser/timelinehairdresser';
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
    this.TimelineHairDresserRoot = TimelineHairDresser;
    this.LookRoot = Look;
    this.LoginRoot = Login;
    this.ProfileHdRoot = ProfileHairDresser;
    this.ChooseProfileRoot = ChooseProfile;
  }
}
