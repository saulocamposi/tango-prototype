import {Page} from 'ionic/ionic';
import {Dash} from '../dash/dash';
import {Chats} from '../chats/chats';
import {Account} from '../account/account';
import {Login} from '../login/login';
import {ProfileHairDresser} from '../profilehairdresser/profilehd';
import {ChooseProfile} from '../chooseprofile/chooseprofile';

@Page({
  templateUrl: 'app/tabs/tabs.html',
})

export class TabsPage {
  constructor() {
    this.DashRoot = Dash;
    this.ChatsRoot = Chats;
    this.AccountRoot = Account;
    this.LoginRoot = Login;
    this.ProfileHdRoot = ProfileHairDresser;
    this.ChooseProfileRoot = ChooseProfile;
  }
}
