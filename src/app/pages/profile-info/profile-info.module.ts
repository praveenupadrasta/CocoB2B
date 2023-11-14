import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileInfoPageRoutingModule } from './profile-info-routing.module';

import { ProfileInfoPage } from './profile-info.page';
import { Form2Component } from 'src/app/components/profile-info/form2/form2.component';
import { Form1Component } from 'src/app/components/profile-info/form1/form1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileInfoPageRoutingModule
  ],
  declarations: [ProfileInfoPage, Form1Component , Form2Component]
})
export class ProfileInfoPageModule {}
