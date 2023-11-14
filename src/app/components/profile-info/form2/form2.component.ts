import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'profile-info-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss'],
})
export class Form2Component  implements OnInit {

  data = {
    step: 2,
    orgName: '',
    gstNumber: '',
    fullName: '',
    state: '',
    city: '',
  }

  @Output() nextStep = new EventEmitter();
  @Output() prevStep = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  toPrevStep() {
    this.prevStep.emit();
  }

  toNextStep() {
    this.nextStep.emit(this.data);
  }

}
