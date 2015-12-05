import {Page, NavController, ViewController} from 'ionic/ionic';
import {Login} from '../login/login';
import {Clients} from '../data/client';

@Page({
  templateUrl:'app/maintimeline/maintimeline.html',
   providers: [Clients]
})
export class MainTimeline {
  constructor(clients: Clients, nav: NavController, view: ViewController) {
    this.nav = nav;
    this.view = view;
    this.clients = clients;
    this.looks = this.clients.all();
  }

  goToLogin(){
    this.nav.push(Login);
  }

  goToLook(id,typeoflook){
    
    this.nav.push(Login);
  }

}
