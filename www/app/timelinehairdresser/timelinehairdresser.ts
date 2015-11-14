import {Page, NavController, ViewController} from 'ionic/ionic';
import {Look} from '../look/look';
import {LookSimple} from '../looksimple/looksimple';
import {ProfileHairDresser} from '../profilehairdresser/profilehairdresser';
import {TakePicture} from '../takepicture/takepicture';


@Page({
  templateUrl:'app/timelinehairdresser/timelinehairdresser.html',
})
export class TimelineHairDresser {
  constructor(nav: NavController, view: ViewController) {
    this.nav = nav;
    this.view = view;
  }

  showLook(){
      this.nav.push(Look);
  }

  showLookSimple(){
      this.nav.push(LookSimple);
  }

  showProfile(){
      this.nav.push(ProfileHairDresser);
  }

  takePicture(){
    this.nav.push(TakePicture);
  }
}
