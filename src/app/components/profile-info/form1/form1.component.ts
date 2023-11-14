import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'profile-info-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss'],
})
export class Form1Component  implements OnInit {

  data = {
    step: 1,
    custType: '',
  }

  @Output() nextStep = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  toNextStep() {
    this.nextStep.emit(this.data);
  }
}
