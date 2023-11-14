import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.page.html',
  styleUrls: ['./profile-info.page.scss'],
})
export class ProfileInfoPage implements OnInit {

  profileInfo = {
    step: 1,
    custType: '',
    orgName: '',
    gstNumber: '',
    fullName: '',
    state: '',
    city: '',
    productsInterested: [],
  }

  constructor() { }

  ngOnInit() {
  }

  toForm1() {
    console.log('toForm1');
    this.profileInfo['step']--;
  }

  toForm2(data: any) {
    this.profileInfo['step']++;
    this.profileInfo['custType'] = data['custType'];
  }

  toForm3(data: any) {
    this.profileInfo['step']++;
  }

}
